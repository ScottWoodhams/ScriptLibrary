import React from "react";

import { PanelController } from "./controllers/PanelController.jsx";

import { entrypoints } from "uxp";
import {Library} from "./panels/Library";
import {
    checkForManifestUpdate, isNewManifestVersionAvailable,
    retrieveLocalManifest,
    retrieveManifestLink, storeManifestFromServer,
    storeManifestLink,
} from "./DataHander";
import {CommandController} from "./controllers/CommandController";
import {About, UpdateManifestLinkDialog} from "./panels/UpdateManifestLink";


async function updateManifest() {
    try {
        console.log("update manifest")
        let updateAvailable = await isNewManifestVersionAvailable();
        console.log(updateAvailable)
        if(updateAvailable){
            await storeManifestFromServer();
            console.log("reload")

            window.location.reload(true);
        }
    } catch (e) {
        console.error(e)
    }
}

const libraryController = new PanelController(() =>
    <Library manifest={retrieveLocalManifest()}/>,{
    id: "library",
    menuItems:[
        { id: "update", label: "Update", enabled: true, checked: false, oninvoke: () => updateManifest() }
    ]
})

const manifestLinkController = new CommandController(
  ({ dialog }) => <UpdateManifestLinkDialog dialog={dialog} currentLink={retrieveManifestLink()}/>,
  {
      id: "updateManifestLink",
      title: "React Starter Plugin Demo",
      size: { width: 480, height: 480 },
  }
);

// const aboutController = new CommandController()


entrypoints.setup({
    plugin: {
        create(plugin) {
            console.log("created", plugin);
        },
        destroy() {
            /* optional */ console.log("destroyed");
        }
    },
    commands: {
        updateManifestLink: manifestLinkController
    },
    panels: {
        library: libraryController,
    }
});
