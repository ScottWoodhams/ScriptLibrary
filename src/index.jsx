import React from "react";

import { PanelController } from "./controllers/PanelController.jsx";

import { entrypoints } from "uxp";
import {Library} from "./panels/Library";
import {checkForManifestUpdate, retrieveManifestLink, storeManifestLink, updateManifestFromServer} from "./DataHander";
import {CommandController} from "./controllers/CommandController";
import {About, UpdateManifestLinkDialog} from "./panels/UpdateManifestLink";

const libraryController = new PanelController(() => <Library/>,{
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


async function updateManifest(){
    let updateAvailable = await checkForManifestUpdate();
    if(updateAvailable){
        await updateManifestFromServer();
    }
}

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
