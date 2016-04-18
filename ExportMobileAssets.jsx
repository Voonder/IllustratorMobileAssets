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

var document = app.activeDocument;
var folder = new Folder(document.path);

if(document && folder) {
	var dialog = new Window("dialog","Export assets to ...");

	// ----- Folder destination
	createFilePanel("File destination", dialog);
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