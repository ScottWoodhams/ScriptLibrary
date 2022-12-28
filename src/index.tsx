import "@babel/polyfill";
import React from "react";
import { PanelController } from "./controllers/PanelController";
import { entrypoints } from "uxp";
import { MainPanel } from "./panels/MainPanel";
import { CommandController } from "./controllers/CommandController";
import { UpdateManifestLinkDialog } from "./panels/ManifestLinkDialog";

async function updateManifest() {
	window.location.reload();
}

const manifestLinkController = new CommandController(({ dialog }) => (
	<UpdateManifestLinkDialog
		dialog={dialog}
	/>
),
{
	id: "Update Manifest Link"
})

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
		updateManifestLink: manifestLinkController
	},
	panels: {
		shelf: mainPanelController
	}
});
