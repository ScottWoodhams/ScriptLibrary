import "@babel/polyfill";
import React from "react";
import { PanelController } from "./controllers/PanelController";
import { entrypoints } from "uxp";
import { Library } from "./panels/Library";
import * as dataHandler from "./DataHandler";
import { CommandController } from "./controllers/CommandController";
import { UpdateManifestLinkDialog } from "./panels/UpdateManifestLink";

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

const manifestLinkController = new CommandController(
	({ dialog }) => (
		<UpdateManifestLinkDialog
			dialog={dialog}
			currentLink={dataHandler.retrieveManifestLink()}
		/>
	),
	{
		id: "Update Manifest Link"
	}
);

entrypoints.setup({
	plugin: {
		create(plugin) {
			console.clear();
		}
	},
	commands: {
		updateManifestLink: manifestLinkController
	},
	panels: {
		//library: libraryController
	}
});
