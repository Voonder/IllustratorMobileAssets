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
	{
		name: "ldpi",
		scaleFactor: 18.75,
		type: "android"
	},
	{
		name: "mdpi",
		scaleFactor: 25,
		type: "android"
	},
	{
		name: "hdpi",
		scaleFactor: 37.5,
		type: "android"
	},
	{
		name: "tvdpi",
		scaleFactor: 43.75,
		type: "android"
	},
	{
		name: "xhdpi",
		scaleFactor: 50,
		type: "android"
	},
	{
		name: "xxhdpi",
		scaleFactor: 75,
		type: "android"
	},
	{
		name: "xxxhdpi",
		scaleFactor: 100,
		type: "android"
	},
	{
		name: "web",
		scaleFactor:266.667,
		type: "android"
	}
];

var iosExport = [
	{
		name: "@1x",
		scaleFactor: 50,
		type: "ios"
	},
	{
		name: "@2x",
		scaleFactor: 100,
		type: "ios"
	},
	{
		name: "@3x",
		scaleFactor: 150,
		type: "ios"
	}
];

var windowsExport = [
	{
		name: "scale-80",
		scaleFactor: 80,
		type: "windows"
	},
		{
		name: "scale-100",
		scaleFactor: 100,
		type: "windows"
	},
	{
		name: "scale-125",
		scaleFactor: 125,
		type: "windows"
	},
	{
		name: "scale-150",
		scaleFactor: 150,
		type: "windows"
	},
	{
		name: "scale-180",
		scaleFactor: 180,
		type: "windows"
	},
	{
		name: "scale-200",
		scaleFactor: 200,
		type: "windows"
	},
	{
		name: "scale-400",
		scaleFactor: 400,
		type: "windows"
	}
];

var selectedExport = {};

var document = app.activeDocument;
var folder = new Folder(document.path);

if(document && folder) {
	var dialog = new Window("dialog","Export assets to ...");

	// ----- Folder panel
	createFilePanel("File destination", dialog);
	// -----

	// ----- OS panel
	var osGroup = dialog.add("group");
	osGroup.orientation = 'row';
	osGroup.alignChildren = 'top';
	createOSPanel("Android", osGroup, androidExport);
	createOSPanel("iOS", osGroup, iosExport);
	createOSPanel("Windows", osGroup, windowsExport);
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
	var changePathButton = panel.add("button", undefined, "...");

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

function createOSPanel(name, parent, array) {
	var panel = parent.add("panel", undefined, name);
	panel.alignChildren = "left";

	for(var i = 0; i < array.length;  i++) {
		var cb = panel.add("checkbox", undefined, "\u00A0" + array[i].name);
		cb.item = array[i];
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
}

function createButtonPanel(parent) {
	var panel = parent.add("group");
	var cancelButton = panel.add("button", undefined, "Cancel");
	var exportButton = panel.add("button", undefined, "Export");

	cancelButton.onClick = function() {
		this.parent.parent.close();
	};

	exportButton.onClick = function() {
		this.parent.parent.close();
	};
}