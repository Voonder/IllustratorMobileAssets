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

var androidCategory = [
    "Launcher icon",
    "Action bar, Dialog & Tab icons",
    "Small Contextual icons",
    "Notification icons",
    "Others"
];

var androidExport = [
	{ type:"android", category:0, key:"0-ldpi", name:"ldpi", width:36, height:36 },
	{ type:"android", category:0, key:"0-mdpi", name:"mdpi", width:48, height:48 },
	{ type:"android", category:0, key:"0-tvdpi", name:"tvdpi", width:64, height:64 },
	{ type:"android", category:0, key:"0-hdpi", name:"hdpi", width:72, height:72 },
	{ type:"android", category:0, key:"0-xhdpi", name:"xhdpi", width:96, height:96 },
	{ type:"android", category:0, key:"0-xxhdpi", name:"xxhdpi", width:144, height:144 },
	{ type:"android", category:0, key:"0-xxxhdpi", name:"xxxhdpi", width:192, height:192 },

	{ type:"android", category:1, key:"1-ldpi", name:"ldpi", width:24, height:24 },
	{ type:"android", category:1, key:"1-mdpi", name:"mdpi", width:32, height:32 },
	{ type:"android", category:1, key:"1-tvdpi", name:"tvdpi", width:42, height:42 },
	{ type:"android", category:1, key:"1-hdpi", name:"hdpi", width:48, height:48 },
	{ type:"android", category:1, key:"1-xhdpi", name:"xhdpi", width:64, height:64 },
	{ type:"android", category:1, key:"1-xxhdpi", name:"xxhdpi", width:96, height:96 },
	{ type:"android", category:1, key:"1-xxxhdpi", name:"xxxhdpi", width:128, height:128 },

	{ type:"android", category:2, key:"2-ldpi", name:"ldpi", width:12, height:12 },
	{ type:"android", category:2, key:"2-mdpi", name:"mdpi", width:16, height:16 },
	{ type:"android", category:2, key:"2-tvdpi", name:"tvdpi", width:21, height:21 },
	{ type:"android", category:2, key:"2-hdpi", name:"hdpi", width:24, height:24 },
	{ type:"android", category:2, key:"2-xhdpi", name:"xhdpi", width:32, height:64 },
	{ type:"android", category:2, key:"2-xxhdpi", name:"xxhdpi", width:48, height:48 },
	{ type:"android", category:2, key:"2-xxxhdpi", name:"xxxhdpi", width:64, height:64 },

	{ type:"android", category:3, key:"3-ldpi", name:"ldpi", width:18, height:18 },
	{ type:"android", category:3, key:"3-mdpi", name:"mdpi", width:24, height:24 },
	{ type:"android", category:3, key:"3-tvdpi", name:"tvdpi", width:32, height:32 },
	{ type:"android", category:3, key:"3-hdpi", name:"hdpi", width:36, height:36 },
	{ type:"android", category:3, key:"3-xhdpi", name:"xhdpi", width:48, height:48 },
	{ type:"android", category:3, key:"3-xxhdpi", name:"xxhdpi", width:72, height:72 },
	{ type:"android", category:3, key:"3-xxxhdpi", name:"xxxhdpi", width:96, height:96 },
 
	{ type:"android", category:4, key:"web", name:"web", width:512, height:512 }
];

var iosCategory = [
    "iOS 7 and above",
    "iOS 6.1 and earlier",
    "Others"
];

var iosExport = [
	{ type:"ios", category:0, key:"Small", name:"Small", width:29, height:29 },
	{ type:"ios", category:0, key:"Small@2x", name:"Small@2x", width:58, height:58 },
	{ type:"ios", category:0, key:"Small@3x", name:"Small@3x", width:87, height:87 },
	{ type:"ios", category:0, key:"Small-40", name:"Small-40", width:40, height:40 },
	{ type:"ios", category:0, key:"Small-40@2x", name:"Small-40@2x", width:80, height:80 },
	{ type:"ios", category:0, key:"Small-40@3x", name:"Small-40@3x", width:120, height:120 },
	{ type:"ios", category:0, key:"60@2x", name:"60@2x", width:120, height:120 },
	{ type:"ios", category:0, key:"60@3x", name:"60@3x", width:180, height:180 },
	{ type:"ios", category:0, key:"76", name:"76", width:76, height:76 },
	{ type:"ios", category:0, key:"76@2x", name:"76@2x", width:152, height:152 },

	{ type:"ios", category:1, key:"", name:"", width:57, height:57 },
	{ type:"ios", category:1, key:"@2x", name:"@2x", width:114, height:114 },
	{ type:"ios", category:1, key:"72", name:"72", width:72, height:72 },
	{ type:"ios", category:1, key:"72@2x", name:"72@2x", width:144, height:144 },
	{ type:"ios", category:1, key:"Small-50", name:"Small-50", width:50, height:50 },
	{ type:"ios", category:1, key:"Small-50@2x", name:"Small-50@2x", width:100, height:100 },
	
	{ type:"ios", category:2, key:"iTunesArtwork", name:"iTunesArtwork", width:512, height:512 },
	{ type:"ios", category:2, key:"iTunesArtwork@2x", name:"iTunesArtwork@2x", width:1024, height:1024 }
];

var uwpCategory = [
    "SmallTile",
    "MediumTile",
    "WideTile",
    "LargeTile",
    "App list"
];

var uwpExport = [
	{ type:"windows", category:0, key:"0-scale-100", name:"scale-100", width:71, height:71 },
	{ type:"windows", category:0, key:"0-scale-125", name:"scale-125", width:89, height:89 },
	{ type:"windows", category:0, key:"0-scale-150", name:"scale-150", width:107, height:107 },
	{ type:"windows", category:0, key:"0-scale-200", name:"scale-200", width:142, height:142 },
	{ type:"windows", category:0, key:"0-scale-400", name:"scale-400", width:284, height:284 },

	{ type:"windows", category:1, key:"1-scale-100", name:"scale-100", width:150, height:150 },
	{ type:"windows", category:1, key:"1-scale-125", name:"scale-125", width:188, height:188 },
	{ type:"windows", category:1, key:"1-scale-150", name:"scale-150", width:225, height:225 },
	{ type:"windows", category:1, key:"1-scale-200", name:"scale-200", width:300, height:300 },
	{ type:"windows", category:1, key:"1-scale-400", name:"scale-400", width:600, height:600 },

	{ type:"windows", category:2, key:"2-scale-100", name:"scale-100", width:310, height:150 },
	{ type:"windows", category:2, key:"2-scale-125", name:"scale-125", width:388, height:188 },
	{ type:"windows", category:2, key:"2-scale-150", name:"scale-150", width:465, height:225 },
	{ type:"windows", category:2, key:"2-scale-200", name:"scale-200", width:620, height:300 },
	{ type:"windows", category:2, key:"2-scale-400", name:"scale-400", width:1240, height:600 },

	{ type:"windows", category:3, key:"3-scale-100", name:"scale-100", width:310, height:310 },
	{ type:"windows", category:3, key:"3-scale-125", name:"scale-125", width:388, height:388 },
	{ type:"windows", category:3, key:"3-scale-150", name:"scale-150", width:465, height:465 },
	{ type:"windows", category:3, key:"3-scale-200", name:"scale-200", width:620, height:620 },
	{ type:"windows", category:3, key:"3-scale-400", name:"scale-400", width:1240, height:1240 },

	{ type:"windows", category:4, key:"4-scale-100", name:"scale-100", width:44, height:44 },
	{ type:"windows", category:4, key:"4-scale-125", name:"scale-125", width:55, height:55 },
	{ type:"windows", category:4, key:"4-scale-150", name:"scale-150", width:66, height:66 },
	{ type:"windows", category:4, key:"4-scale-200", name:"scale-200", width:88, height:88 },
	{ type:"windows", category:4, key:"4-scale-400", name:"scale-400", width:176, height:176 }
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