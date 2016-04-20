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

var androidExport = [
	{ type:"android", category:"Launcher Icon", name:"ldpi", key:"-ldpi", width:36, height:36 },
	{ type:"android", category:"Launcher Icon", name:"mdpi", key:"-mdpi", width:48, height:48 },
	{ type:"android", category:"Launcher Icon", name:"tvdpi", key:"-tvdpi", width:64, height:64 },
	{ type:"android", category:"Launcher Icon", name:"hdpi", key:"-hdpi", width:72, height:72 },
	{ type:"android", category:"Launcher Icon", name:"xhdpi", key:"-xhdpi", width:96, height:96 },
	{ type:"android", category:"Launcher Icon", name:"xxhdpi", key:"-xxhdpi", width:144, height:144 },
	{ type:"android", category:"Launcher Icon", name:"xxxhdpi", key:"-xxxhdpi", width:192, height:192 },
	
	{ type:"android", category:"Action bar, Dialog & Tab icons", name:"ldpi", key:"-ldpi", width:24, height:24 },
	{ type:"android", category:"Action bar, Dialog & Tab icons", name:"mdpi", key:"-mdpi", width:32, height:32 },
	{ type:"android", category:"Action bar, Dialog & Tab icons", name:"tvdpi",key:"-tvdpi", width:42, height:42 },
	{ type:"android", category:"Action bar, Dialog & Tab icons", name:"hdpi", key:"-hdpi", width:48, height:48 },
	{ type:"android", category:"Action bar, Dialog & Tab icons", name:"xhdpi", key:"-xhdpi", width:64, height:64 },
	{ type:"android", category:"Action bar, Dialog & Tab icons", name:"xxhdpi", key:"-xxhdpi", width:96, height:96 },
	{ type:"android", category:"Action bar, Dialog & Tab icons", name:"xxxhdpi", key:"-xxxhdpi", width:128, height:128 },
	
	{ type:"android", category:"Small Contextual Icons", name:"ldpi", key:"-ldpi", width:12, height:12 },
	{ type:"android", category:"Small Contextual Icons", name:"mdpi", key:"-mdpi", width:16, height:16 },
	{ type:"android", category:"Small Contextual Icons", name:"tvdpi", key:"-tvdpi", width:21, height:21 },
	{ type:"android", category:"Small Contextual Icons", name:"hdpi", key:"-hdpi", width:24, height:24 },
	{ type:"android", category:"Small Contextual Icons", name:"xhdpi", key:"-xhdpi", width:32, height:64 },
	{ type:"android", category:"Small Contextual Icons", name:"xxhdpi", key:"-xxhdpi", width:48, height:48 },
	{ type:"android", category:"Small Contextual Icons", name:"xxxhdpi", key:"-xxxhdpi", width:64, height:64 },
	
	{ type:"android", category:"Notification icons", name:"ldpi", key:"-ldpi", width:18, height:18 },
	{ type:"android", category:"Notification icons", name:"mdpi", key:"-mdpi", width:24, height:24 },
	{ type:"android", category:"Notification icons", name:"tvdpi", key:"-tvdpi", width:32, height:32 },
	{ type:"android", category:"Notification icons", name:"hdpi", key:"-hdpi", width:36, height:36 },
	{ type:"android", category:"Notification icons", name:"xhdpi", key:"-xhdpi", width:48, height:48 },
	{ type:"android", category:"Notification icons", name:"xxhdpi", key:"-xxhdpi", width:72, height:72 },
	{ type:"android", category:"Notification icons", name:"xxxhdpi", key:"-xxxhdpi", width:96, height:96 },

	{ type:"android", category:"Others", name:"Icon store", key:"web", width:512, height:512 }
];

var iosExport = [
	{ type:"ios", category:"iOS 7 and above", name:"Icon-Small.png", key:"-Small", width:29, height:29 },
	{ type:"ios", category:"iOS 7 and above", name:"Icon-Small@2x.png", key:"-Small@2x", width:58, height:58 },
	{ type:"ios", category:"iOS 7 and above", name:"Icon-Small@3x.png", key:"-Small@3x", width:87, height:87 },
	{ type:"ios", category:"iOS 7 and above", name:"Icon-Small-40.png", key:"-Small-40", width:40, height:40 },
	{ type:"ios", category:"iOS 7 and above", name:"Icon-Small-40@2x.png", key:"-Small-40@2x", width:80, height:80 },
	{ type:"ios", category:"iOS 7 and above", name:"Icon-Small-40@3x.png", key:"-Small-40@3x", width:120, height:120 },
	{ type:"ios", category:"iOS 7 and above", name:"Icon-60@2x.png", key:"-60@2x", width:120, height:120 },
	{ type:"ios", category:"iOS 7 and above", name:"Icon-60@3x.png", key:"-60@3x", width:180, height:180 },
	{ type:"ios", category:"iOS 7 and above", name:"Icon-76.png", key:"-76", width:76, height:76 },
	{ type:"ios", category:"iOS 7 and above", name:"Icon-76@2x.png", key:"-76@2x", width:152, height:152 },

	{ type:"ios", category:"iOS 6.1 and earlier", name:"Icon.png", key:"", width:57, height:57 },
	{ type:"ios", category:"iOS 6.1 and earlier", name:"Icon@2x.png", key:"@2x", width:114, height:114 },
	{ type:"ios", category:"iOS 6.1 and earlier", name:"Icon-72.png", key:"-72", width:72, height:72 },
	{ type:"ios", category:"iOS 6.1 and earlier", name:"Icon-72@2x.png", key:"-72@2x", width:144, height:144 },
	{ type:"ios", category:"iOS 6.1 and earlier", name:"Icon-Small-50.png", key:"-Small-50", width:50, height:50 },
	{ type:"ios", category:"iOS 6.1 and earlier", name:"Icon-Small-50@2x.png", key:"-Small-50@2x", width:100, height:100 },
	
	{ type:"ios", category:"Others", name:"iTunesArtwork", key:"iTunesArtwork", width:512, height:512 },
	{ type:"ios", category:"Others", name:"iTunesArtwork@2x", key:"iTunesArtwork@2x", width:1024, height:1024 }
];

var uwpExport = [
	{ type:"windows", category:"Small", name:"scale-100", key:"SmallTile.scale-100", width:71, height:71 },
	{ type:"windows", category:"Small", name:"scale-125", key:"SmallTile.scale-125", width:89, height:89 },
	{ type:"windows", category:"Small", name:"scale-150", key:"SmallTile.scale-150", width:107, height:107 },
	{ type:"windows", category:"Small", name:"scale-200", key:"SmallTile.scale-200", width:142, height:142 },
	{ type:"windows", category:"Small", name:"scale-400", key:"SmallTile.scale-400", width:284, height:284 },

	{ type:"windows", category:"Medium", name:"scale-100", key:"MedTile.scale-100", width:150, height:150 },
	{ type:"windows", category:"Medium", name:"scale-125", key:"MedTile.scale-125", width:188, height:188 },
	{ type:"windows", category:"Medium", name:"scale-150", key:"MedTile.scale-150", width:225, height:225 },
	{ type:"windows", category:"Medium", name:"scale-200", key:"MedTile.scale-200", width:300, height:300 },
	{ type:"windows", category:"Medium", name:"scale-400", key:"MedTile.scale-400", width:600, height:600 },

	{ type:"windows", category:"Wide", name:"scale-100", key:"WideTile.scale-100", width:310, height:150 },
	{ type:"windows", category:"Wide", name:"scale-125", key:"WideTile.scale-125", width:388, height:188 },
	{ type:"windows", category:"Wide", name:"scale-150", key:"WideTile.scale-150", width:465, height:225 },
	{ type:"windows", category:"Wide", name:"scale-200", key:"WideTile.scale-200", width:620, height:300 },
	{ type:"windows", category:"Wide", name:"scale-400", key:"WideTile.scale-400", width:1240, height:600 },

	{ type:"windows", category:"Large", name:"scale-100", key:"LargeTile.scale-100", width:310, height:310 },
	{ type:"windows", category:"Large", name:"scale-125", key:"LargeTile.scale-125", width:388, height:388 },
	{ type:"windows", category:"Large", name:"scale-150", key:"LargeTile.scale-150", width:465, height:465 },
	{ type:"windows", category:"Large", name:"scale-200", key:"LargeTile.scale-200", width:620, height:620 },
	{ type:"windows", category:"Large", name:"scale-400", key:"LargeTile.scale-400", width:1240, height:1240 },

	{ type:"windows", category:"App list", name:"scale-100", key:"LargeTile.scale-100", width:44, height:44 },
	{ type:"windows", category:"App list", name:"scale-125", key:"LargeTile.scale-125", width:55, height:55 },
	{ type:"windows", category:"App list", name:"scale-150", key:"LargeTile.scale-150", width:66, height:66 },
	{ type:"windows", category:"App list", name:"scale-200", key:"LargeTile.scale-200", width:88, height:88 },
	{ type:"windows", category:"App list", name:"scale-400", key:"LargeTile.scale-400", width:176, height:176 }
];

var selectedExport = {};
var selectedArtboards = {};

var document = app.activeDocument;
var folder = new Folder(document.path);

if(document && folder) {
	
	var dialog = new Window("dialog","Export assets to ...");
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
	panel.alignment = 'fill';

	var fileLocationEditText = panel.add("edittext", undefined, "File destination");
	fileLocationEditText.text = folder.fsName;
	fileLocationEditText.enabled = false;
	
	var changePathButton = panel.add("button", undefined, "...");
	changePathButton.size = [28, 28];

	changePathButton.onClick = function() {
		var tmpFolder = Folder.selectDialog("Select new folder destination", folder.fsName);
		if(tmpFolder){
			folder =  tmpFolder;
			fileLocationEditText.text = folder.fsName;
		}
		else {
			//alert("Cannot change current path");
		}
	};
}

function createArtboardPanel(name, parent){
	 var groupArt = parent.add("panel", undefined, name);

	var artboardNames = [];

	for (var i = 0; i < document.artboards.length; i++) {
		artboardNames[i] = document.artboards[i].name;
	}

	var panel = groupArt.add("listbox", undefined, artboardNames);
	panel.size = [200 , 350];

	panel.onClick = function() {
	};
}

function createOSTabPanel(parent, array){
	var tmpCategory = "";
	var tmpGroup;

	for (var i = 0; i < array.length; i++) {
		if(array[i].category === tmpCategory){
			generateCheckbox(tmpGroup, array[i]);
		}
		else{
			tmpCategory = array[i].category;
			tmpGroup = parent.add("panel", undefined, array[i].category);
			tmpGroup.orientation = 'column';
			tmpGroup.alignChildren = 'left';
			tmpGroup.margins = 16;
			tmpGroup.alignment = 'fill';
			
			generateCheckbox(tmpGroup, array[i]);
		}
	}
}

function generateCheckbox(parent, item) {
	var cb = parent.add("checkbox", undefined, "\u00A0" + item.name);
	cb.item = item;
	cb.onClick = function () {
		if (this.value) {
			selectedExport[this.item.name] = this.item;
			//alert("added: " + this.item.name + ", index: " + this.item.index);
		} else {
			delete selectedExport[this.item.name];
			//alert("deleted: " + this.item.name + ", index: " + this.item.index);
		}
	};
}

function createButtonPanel(parent) {
	var panel = parent.add("group");
	panel.alignChildren = 'right';
	var exportButton = panel.add("button", undefined, "Export");
	var cancelButton = panel.add("button", undefined, "Cancel");

	exportButton.onClick = function() {
		this.parent.parent.close();
	};

	cancelButton.onClick = function() {
		this.parent.parent.close();
	};
}