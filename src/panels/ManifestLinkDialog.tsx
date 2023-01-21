import React, { useEffect, useState } from "react";

import { versions } from "uxp";
import os from "os";
import { retrieveManifestLink, storeManifestLink } from "../DataHandler";
import { Button, Divider, Heading, Textfield } from "react-uxp-spectrum";
import { app } from "photoshop";

export type DialogProps = { dialog };

export const UpdateManifestLinkDialog = ({ dialog }: DialogProps) => {
	const [link, getLink] = useState("");

	useEffect(() => {
		const link = retrieveManifestLink();
		getLink(link);
	});

	function saveNewLink() {
		let link = document.getElementsByClassName("newLink")[0].value;
		app.showAlert(link);
        storeManifestLink(link);
	}

	return (
		<form method="dialog" className="aboutDialog">
			<Heading>Script Library Plugin</Heading>
			<Divider size="large"></Divider>
			<sp-body>
				Here you can change the link to your manifest which holds the
				information for the scripts. By default, the plugin tarts the
				plugin creator{" "}
				<a href="https://github.com/ScottWoodhams">Scott Woodhams</a>
				scripts. These are publicly available and are free to use within
				the MIT license. Any scripts amendments or updates via pull
				requests would be greatly appreciated!
			</sp-body>
			<sp-body class="well">
				Due to the limits of the UXP environments access top your local
				filesystem, I recommend hosting your own scripts on a server
				rather than on your local machine.
			</sp-body>
			<sp-detail>Manifest Link </sp-detail>
			<div className="table">
				<div>
					<sp-detail>CURRENT: </sp-detail>
					<sp-body> {link}</sp-body>
				</div>
				<div>
					<sp-detail>NEW:</sp-detail>
					<Textfield className={"newLink"} value={link} />
					<sp-body>
						{" "}
						{os.platform()} {os.release()}
					</sp-body>
				</div>
				<div>
					<sp-detail>UNIFIED EXTENISBILITY PLATFORM:</sp-detail>
					<sp-body>{versions.uxp}</sp-body>
				</div>
			</div>
			<div>
				<Button
					variant="secondary"
					quiet={true}
					onClick={() => dialog.close("reasonCanceled")}
				>
					Cancel
				</Button>
				<Button
					variant="primary"
					onClick={() => {
						saveNewLink();
						dialog.close("ok");
					}}
				>
					OK
				</Button>
			</div>
		</form>
	);
};
