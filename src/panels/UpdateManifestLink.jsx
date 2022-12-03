import React, {useEffect, useState} from "react";

import { versions } from "uxp";
import os from "os";
import {retrieveManifestLink} from "../DataHander";

export const UpdateManifestLinkDialog = (props) => {
  const [link, getLink] = useState("");

  useEffect(() => {
    let l = retrieveManifestLink()
    console.log(l)
    getLink(retrieveManifestLink())
    console.log("hello world")
  })


  return (
    <form method="dialog" className="aboutDialog">
      <sp-heading>Script Library Plugin</sp-heading>
      <sp-divider size="large"></sp-divider>
      <sp-body>
        Here you can change the link to your manifest which holds the information for the scripts.
        By default, the plugin tarts the plugin creator <a href="https://github.com/ScottWoodhams">Scott Woodhams</a>
        scripts. These are publicly available and are free to use within the MIT license. Any scripts amendments or
        updates via pull requests would be greatly appreciated!
      </sp-body>
      <sp-body class="well">
        <sp-icon name="ui:InfoBig" size="s"></sp-icon>
        Due to the limits of the UXP environments access top your local filesystem, I recommend hosting your own scripts on a server rather
        than on your local machine.
      </sp-body>
      <sp-detail>Manifest Link </sp-detail>
      <div className="table">
        <div>
          <sp-detail>CURRENT: </sp-detail>
          <sp-body> {link}</sp-body>
        </div>
        <div>
          <sp-detail>NEW:</sp-detail>
          <sp-textfield label="Manifest Link" />
          <sp-body>
            {" "}
            {os.platform()} {os.release()}
          </sp-body>
        </div>
        <div>
          <sp-detail>UNIFIED EXTENSIBILITY PLATFORM:</sp-detail>
          <sp-body>{versions.uxp}</sp-body>
        </div>
      </div>
      <sp-button-group>
        <sp-button
          tabindex={0}
          variant="secondary"
          quiet="quiet"
          onClick={() => props.dialog.close("reasonCanceled")}
        >
          Cancel
        </sp-button>
        <sp-button
          tabindex={0}
          autofocus="autofocus"
          variant="primary"
          onClick={() => props.dialog.close("ok")}
        >
          OK
        </sp-button>
      </sp-button-group>
    </form>
  );
};