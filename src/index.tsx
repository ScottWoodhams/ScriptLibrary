import "@babel/polyfill";
import React from "react";
import { PanelController } from "./controllers/PanelController";
import { entrypoints } from "uxp";
import { MainPanel } from "./panels/MainPanel";

async function updateManifest() {
	window.location.reload();
}

// const libraryController = new PanelController(
// 	async () => <Library manifest={ await dataHandler.loadManifest()} />,
// 	{
// 		id: "library",
// 		menuItems: [
// 			{
// 				id: "update",
// 				label: "Update",
// 				enabled: true,
// 				checked: false,
// 				oninvoke: () => updateManifest()
// 			}
// 		]
// 	}
// );

const mainPanelController = new PanelController(() => <MainPanel />, {
	id: "shelf",
	menuItems: [
		{
			id: "update",
			label: "Update",
			enabled: true,
			checked: false,
			oninvoke: () => updateManifest()
		}
	]
});

entrypoints.setup({
	plugin: {
		create(plugin) {
			console.clear();
		}
	},
	commands: {
		// updateManifestLink: manifestLinkController
	},
	panels: {
		shelf: mainPanelController
	}
});
