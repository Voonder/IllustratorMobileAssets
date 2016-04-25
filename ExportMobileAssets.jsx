/*
 * Copyright (c) 2016 Julien NORMAND - Voonder
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
#target illustrator

var androidFolderName = [
    { name:"drawable" },
    { name:"mipmap" }
];

var androidExport = [
    { scaleFactor:18.75, type:"android", name:"ldpi" },
    { scaleFactor:25, type:"android", name:"mdpi" },
    { scaleFactor:33.33, type:"android", name:"tvdpi" },
    { scaleFactor:37.5, type:"android", name:"hdpi" },
    { scaleFactor:50, type:"android", name:"xhdpi" },
    { scaleFactor:75, type:"android", name:"xxhdpi" },
    { scaleFactor:100, type:"android", name:"xxxhdpi" },
    { scaleFactor:266.66, type:"android", name:"web" }
];

var iosSuffix = [
    { name:"Small" },
    { name:"Small-40" },
    { name:"Small-50" },
    { name:"" },
    { name:"60" },
    { name: "72" },
    { name:"76" },
    { name:"iTunesArtwork" }
];

var iosExport = [
    { scaleFactor:50, type:"ios", name:"" },
    { scaleFactor:100, type:"ios", name:"@2x" },
    { scaleFactor:150, type:"ios", name:"@3x" }
];

var uwpSuffix = [
    { name:"SmallTile" },
    { name:"MediumTile" },
    { name:"WideTile" },
    { name:"LargeTile" }
];

var uwpExport = [
    { scaleFactor:100, type:"windows", name:"scale-100" },
    { scaleFactor:125, type:"windows", name:"scale-125" },
    { scaleFactor:150, type:"windows", name:"scale-150" },
    { scaleFactor:200, type:"windows", name:"scale-200" },
    { scaleFactor:400, type:"windows", name:"scale-400" },
];

var selectedExport = {};
var selectedArtboards = {};
var selectedArtboardsOptions = {};

var document = app.activeDocument;
var folder = new Folder(document.path);

if (document && folder) {
    var dialog = new Window("dialog", "Export assets to ...");
    dialog.alignChildren = 'right';

    // ----- Folder panel
    createFilePanel("File destination", dialog);
    // -----

    var groupMiddle = dialog.add("group");

    // ----- Artboards panel
    createArtboardPanel("Select artboards", groupMiddle);
    // -----

    // ----- OS table panel
    var tpanel = groupMiddle.add("tabbedpanel");

    var androidTab = tpanel.add("tab", undefined, "Android");
    androidTab.orientation = 'row';
    androidTab.alignChildren = 'top';
    var iosTab = tpanel.add("tab", undefined, "iOS");
    iosTab.orientation = 'row';
    iosTab.alignChildren = 'top';
    var uwpTab = tpanel.add("tab", undefined, "Universal Windows Platform");
    uwpTab.orientation = 'row';
    uwpTab.alignChildren = 'top';

    createOSAndroidTab(androidTab);
    //createOSTabPanel(androidTab, androidFolderName, androidExport);
    createOSTabPanel(iosTab, iosType, iosExport);
    createOSTabPanel(uwpTab, uwpType, uwpExport);
    // -----

    // ----- Button
    createButtonPanel(dialog);
    // -----

    dialog.show();
}

function createFilePanel(name, parent) {
    var panel = parent.add("panel", undefined, name);
    panel.orientation = 'row';

    var fileLocationEditText = panel.add("edittext", undefined, "File destination");
    fileLocationEditText.text = folder.fsName;
    fileLocationEditText.enabled = false;
    fileLocationEditText.size = [677, 28];

    var changePathButton = panel.add("button", undefined, "...");
    changePathButton.size = [28, 28];

    changePathButton.onClick = function() {
        var tmpFolder = Folder.selectDialog("Select new folder destination", folder.fsName);
        if (tmpFolder) {
            folder = tmpFolder;
            fileLocationEditText.text = folder.fsName;
        }
        else {
            //alert("Cannot change current path");
        }
    };
}

function createArtboardPanel(name, parent) {
    var panel = parent.add("panel", undefined, name);
    panel.orientation = 'row';
    panel.minimumSize.height = 362;
    panel.alignChildren = 'left';

    var tmpGroup;

    for (var i = 0; i < document.artboards.length; i++) {
        if (i % 20 == 0) {
            tmpGroup = panel.add("group");
            tmpGroup.orientation = 'column';
            tmpGroup.alignChildren = 'left';
            generateCheckbox(tmpGroup, document.artboards[i], selectedArtboardsOptions);
        }
        else {
            generateCheckbox(tmpGroup, document.artboards[i], selectedArtboardsOptions);
        }

    }
}

function createOSTabPanel(parent, array) {
    var tmpCategory;
    var tmpGroup;

    for (var i = 0; i < array.length; i++) {
        if (array[i].category === tmpCategory) {
            generateCheckbox(tmpGroup, array[i], selectedExport);
        }
        else {
            tmpCategory = array[i].category;
            tmpGroup = parent.add("panel", undefined, androidCategory[array[i].category]);
            tmpGroup.orientation = 'column';
            tmpGroup.alignChildren = 'left';
            tmpGroup.alignment = 'fill';

            generateCheckbox(tmpGroup, array[i], selectedExport);
        }
    }
}

function generateCheckbox(parent, item, array) {
    var cb = parent.add("checkbox", undefined, "\u00A0" + item.name);
    cb.item = item;
    cb.item.index = i;  // save the index, to be used later in setActiveArtboardIndex
    cb.onClick = function() {
        if (this.value) {
            array[this.item.name] = this.item;
            //alert("added: " + this.item.name);
        }
        else {
            delete array[this.item.name];
            //alert("added: " + this.item.name);
        }
    };
}

function createButtonPanel(parent) {
    var panel = parent.add("group");
    panel.alignChildren = 'right';
    var exportButton = panel.add("button", undefined, "Export");
    var cancelButton = panel.add("button", undefined, "Cancel");

    exportButton.onClick = function() {
        var lengthExport = 0;
        var lengthArtboards = 0;

        for (var i in selectedExport) lengthExport++;
        for (var j in selectedArtboardsOptions) lengthArtboards++;

        if (lengthExport === 0) {
            //alert("Please select export sizes.");
        }
        else if (lengthArtboards === 0) {
            //alert("Please select artboards.");
        }
        else {
            for (var key in selectedExport) {
                if (selectedExport.hasOwnProperty(key)) {
                    var item = selectedExport[key];
                    exportToPNG24File(item);
                }
            }
            this.parent.parent.close();
        }
    };

    cancelButton.onClick = function() {
        this.parent.parent.close();
    };
}

function exportToPNG24File(item) {
    var ab, file, options, expFolder;

    if (item.type === "android") {
        expFolder = new Folder(folder.fsName + "/drawable-" + item.name);
    }
    else if (item.type === "ios") {
        expFolder = new Folder(folder.fsName + "/iOS");
    }
    else if (item.type === "windows") {
        expFolder = new Folder(folder.fsName + "/UWP");
    }
    else {
        //alert("Error during exporting file");
    }

    if (!expFolder.exists) {
        expFolder.create();
    }

    for (var abName in selectedArtboardsOptions) {
        if (!selectedArtboardsOptions.hasOwnProperty(abName)) {
            continue;
        }
        ab = selectedArtboardsOptions[abName];
        document.artboards.setActiveArtboardIndex(ab.index);

        if (ab.name.charAt(0) == "!") {
            continue;
            //alert("Error");
        }

        if (item.type === "android") {
            file = new File(expFolder.fsName + "/" + ab.name + ".png");
        }
        else if (item.type === "ios") {
            file = new File(expFolder.fsName + "/" + ab.name + "-" + item.name + ".png");
        }
        else if (item.type === "windows") {
            file = new File(expFolder.fsName + "/" + ab.name + "." + item.name + ".png");
        }

        options = new ExportOptionsPNG24();
        options.transparency = true;
        options.artBoardClipping = true;
        options.antiAliasing = true;
        options.verticalScale = item.scaleFactor;
        options.horizontalScale = item.scaleFactor;

        document.exportFile(file, ExportType.PNG24, options);
        //alert("Generating PNG24 finish");
    }
}