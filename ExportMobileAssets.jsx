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

    createOSTabPanel(androidTab, androidExport);
    createOSTabPanel(iosTab, iosExport);
    createOSTabPanel(uwpTab, uwpExport);
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
            generateCheckbox(tmpGroup, document.artboards[i], selectedArtboards);
        }
        else {
            generateCheckbox(tmpGroup, document.artboards[i], selectedArtboards);
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
    cb.onClick = function() {
        if (this.value) {
            if (array === selectedArtboards) {
                array[this.item.name] = this.item;
                //alert("added: " + this.item.name);
            }
            else if (array === selectedExport) {
                array[this.item.key] = this.item;
                //alert("added: " + this.item.key);
            }
        }
        else {
            if (array === selectedArtboards) {
                delete array[this.item.name];
                //alert("added: " + this.item.name);
            }
            else if (array === selectedExport) {
                delete array[this.item.key];
                //alert("added: " + this.item.key);
            }
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
        for (var j in selectedArtboards) lengthArtboards++;

        if (lengthExport === 0) {
            alert("Please select export sizes.");
        }
        else if (lengthArtboards === 0) {
            alert("Please select artboards.");
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
    var folderDestination;

    if (item.type === "android") {
        if (androidCategory[item.category] === "Launcher Icon") {
            folderDestination = new Folder(folder.fsName + "/mipmap-" + item.name);
        }
        else if (androidCategory[item.category] === "Others") {
            folderDestination = new Folder(folder.fsName);
        }
        else {
            folderDestination = new Folder(folder.fsName + "/drawable-" + item.name);
        }
    }
    else if (item.type === "ios") {
        folderDestination = new Folder(folder.fsName + "/iOS");
    }
    else if (item.type === "windows") {
        if (uwpCategory[item.category] === "App list") {
            folderDestination = new Folder(folder.fsName + "/UWP/AppList");
        }
        else {
            folderDestination = new Folder(folder.fsName + "/UWP");
        }
    }
    else {
        //alert("Error during exporting file");
    }

    if (!folderDestination.exists) {
        folderDestination.create();
    }

    for (var abName in selectedArtboards) {
        if (!selectedArtboards.hasOwnProperty(abName)) {
            continue;
        }
        ab = selectedArtboards[abName];
        document.artboards.setActiveArtboardIndex(ab.index);

        if (ab.name.charAt(0) == "!") {
            continue;
            alert("Error");
        }

        if (item.type === "android") {
            switch (item.category) {
                case 0:
                    file = new File(folderDestination.fsName + "/ic_launcher.png");
                    break;
                case 1:
                    file = new File(folderDestination.fsName + "/ic_action_" + ab.name + ".png");
                    break;
                case 2:
                    file = new File(folderDestination.fsName + "/ic_menu_" + ab.name + ".png");
                    break;
                case 3:
                    file = new File(folderDestination.fsName + "/ic_notif_" + ab.name + ".png");
                    break;
                default:
                    file = new File(folderDestination.fsName + "/" + ab.name + ".png");
            }

        }
        else if (item.type === "ios") {
            if (iosCategory[item.category] === "Others") {
                file = new File(folderDestination.fsName + "/" + ab.name + "-" + item.name);
            }
            else {
                file = new File(folderDestination.fsName + "/" + ab.name + "-" + item.name + ".png");
            }
        }
        else if (item.type === "windows") {
            if (uwpCategory[item.category] === "App list") {
                file = new File(folderDestination.fsName + "/" + ab.name + "LargeTile." + item.name + ".png");
            }
            else {
                file = new File(folderDestination.fsName + "/" + ab.name + uwpCategory[item.category] + "." + item.name + ".png");
            }

        }

        options = new ExportOptionsPNG24();
        options.transparency = true;
        options.artBoardClipping = true;
        options.antiAliasing = true;
        options.horizontalScale = 100 * (item.width / document.width);
        options.verticalScale = 100 * (item.height / document.height);

        document.exportFile(file, ExportType.PNG24, options);
        //alert("Generating PNG24 finish");
    }
}