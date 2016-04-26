﻿/*
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

var androidFolder = [
    "drawable",
    "mipmap"
];

var androidExport = [
    { type:"Android", name:"ldpi", scaleFactor:18.75 },
    { type:"Android", name:"mdpi", scaleFactor:25 },
    { type:"Android", name:"tvdpi", scaleFactor:33.33 },
    { type:"Android", name:"hdpi", scaleFactor:37.5 },
    { type:"Android", name:"xhdpi", scaleFactor:50 },
    { type:"Android", name:"xxhdpi", scaleFactor:75 },
    { type:"Android", name:"xxxhdpi", scaleFactor:100 },
    { type:"Android", name:"web", scaleFactor:266.66 }
];

var iosSuffix = [
    "Small",
    "Small-40",
    "Small-50",
    "",
    "60",
    "72",
    "76",
    "iTunesArtwork"
];

var iosExport = [
    { type:"iOS", name:"", scaleFactor:50 },
    { type:"iOS", name:"@2x", scaleFactor:100 },
    { type:"iOS", name:"@3x", scaleFactor:150 }
];

var uwpSuffix = [
    "SmallTile",
    "MediumTile",
    "WideTile",
    "LargeTile"
];

var uwpExport = [
    { type:"Universal Windows Platform", name:"scale-100", scaleFactor:100 },
    { type:"Universal Windows Platform", name:"scale-125", scaleFactor:125 },
    { type:"Universal Windows Platform", name:"scale-150", scaleFactor:150 },
    { type:"Universal Windows Platform", name:"scale-200", scaleFactor:200 },
    { type:"Universal Windows Platform", name:"scale-400", scaleFactor:400 },
];

var AndroidFolderName = "";
var iOSFileSuffixName = "";
var uwpFileSuffixName = "";

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

    var group = dialog.add("group");

    // ----- Artboards panel
    createArtboardPanel("Select artboards", group);
    // -----

    // ----- OS table panel
    var tpanel = group.add("tabbedpanel");

    createOSTabPanel(tpanel, "Android", "Folder", androidFolder.sort(), androidExport, androidFolderName);
    createOSTabPanel(tpanel, "iOS", "File suffix", iosSuffix.sort(), iosExport, iosFileSuffixName);
    createOSTabPanel(tpanel, "Universal Windows Platform", "File suffix", uwpSuffix.sort(), uwpExport, uwpFileSuffixName);
    // -----

    // ----- Button
    createButtonPanel(dialog);
    // -----

    dialog.show();
}

function createFilePanel(name, parent) {
    var panel = parent.add("panel", undefined, name);
    panel.orientation = 'row';

    var folderEdit = panel.add("edittext", undefined, "File destination");
    folderEdit.text = folder.fsName;
    folderEdit.enabled = false;

    var pathButton = panel.add("button", undefined, "...");
    pathButton.size = [28, 28];

    pathButton.onClick = function() {
        var tmpFolder = Folder.selectDialog("Select new folder destination", folder.fsName);
        if (tmpFolder) {
            folder = tmpFolder;
            folderEdit.text = folder.fsName;
        } else {
            //alert("Cannot change current path");
        }
    };
}

function createArtboardPanel(name, parent) {
    var panel = parent.add("panel", undefined, name);
    panel.orientation = 'row';
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

function createOSTabPanel(parent, os, name, arrayType, arrayExport) {
    var tab = parent.add("tab", undefined, os);
    tab.orientation = 'row';
    tab.alignChildren = 'top';

    var typePanel = tab.add("panel", undefined, name);
    typePanel.alignChildren = 'left';
    var exportPanel = tab.add("panel", undefined, "Size");
    exportPanel.alignChildren = 'left';

    for (var i = 0; i < arrayType.length; i++) {
        generateRadioButton(typePanel, os, arrayType[i]);
    }

    for (var j = 0; j < arrayExport.length; j++) {
        generateCheckbox(panelExport, arrayExport[j], selectedExport);
    }

    var button = exportPanel.add("button", undefined, "Select All");
    button.alignment = 'center';
    button.onClick = function() {
        var newValue;
        if (button.text === "Select All") {
            newValue = true;
            button.text = "Deselect All";
        } else {
            newValue = false;
            button.text = "Select All";
        }
        var children = this.parent.children;
        var child;
        for (var i = 0; i < children.length; i++) {
            child = children[i];
            if (child instanceof Checkbox) {
                child.value = newValue;
                selectedExport[child.item.name] = child.item;
            }
        }
    }
}

function generateRadioButton(parent, os, name) {
    var rad = parent.add("radiobutton", undefined, name);

    if (os === "Android") {
        if (name === "drawable") rad.value = true;
    } else if (os === "iOS") {
        if (name === "") rad.value = true;
    }

    rad.onClick = function(){
        if (os === "Android") {
            androidFolderName = name;
        } else if (os === "iOS"){
            iosFileSuffixName = name;
        } else if (os === "Universal Windows Platform"){
            uwpFileSuffixName = name;
        }
        //alert("change to: " + name);
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
        } else {
            delete array[this.item.name];
            //alert("delete: " + this.item.name);
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
        } else if (lengthArtboards === 0) {
            alert("Please select artboards.");
        } else {
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

    if (item.type === "Android") {
        expFolder = new Folder(folder.fsName + "/drawable-" + item.name);
    } else if (item.type === "iOS") {
        expFolder = new Folder(folder.fsName + "/iOS");
    } else if (item.type === "Universal Windows Platform") {
        expFolder = new Folder(folder.fsName + "/UWP");
    } else {
        //alert("Error during exporting file");
    }

    if (!expFolder.exists) {
        expFolder.create();
    }

    for (var abName in selectedArtboards) {
        if (!selectedArtboards.hasOwnProperty(abName)) {
            continue;
        }
        ab = selectedArtboards[abName];
        document.artboards.setActiveArtboardIndex(ab.index);

        if (ab.name.charAt(0) == "!") {
            continue;
            //alert("Error");
        }

        if (item.type === "Android") {
            file = new File(expFolder.fsName + "/" + ab.name + ".png");
        } else if (item.type === "iOS") {
            file = new File(expFolder.fsName + "/" + ab.name + "-" + item.name + ".png");
        } else if (item.type === "Universal Windows Platform") {
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
