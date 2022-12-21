import React, {useEffect, useState} from "react";

import { versions } from "uxp";
import os from "os";
import {retrieveManifestLink} from "../DataHandler";
import {Button, Divider, Heading, Icon, Textfield} from "react-uxp-spectrum";

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
            <Heading>Script Library Plugin</Heading>
            <Divider size="large"></Divider>
            <sp-body>
                Here you can change the link to your manifest which holds the information for the scripts.
                By default, the plugin tarts the plugin creator <a href="https://github.com/ScottWoodhams">Scott Woodhams</a>
                scripts. These are publicly available and are free to use within the MIT license. Any scripts amendments or
                updates via pull requests would be greatly appreciated!
            </sp-body>
            <sp-body class="well">
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
                    <Textfield value="Manifest Link" />
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
            <div>
                <Button
                    variant="secondary"
                    quiet={true}
                    onClick={() => props.dialog.close("reasonCanceled")}
                >
                    Cancel
                </Button>
                <Button
                    variant="primary"
                    onClick={() => props.dialog.close("ok")}
                >
                    OK
                </Button>
            </div>
        </form>
    );
};