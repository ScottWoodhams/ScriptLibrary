import React from "react";
import { loadIcon, retrieveManifestLink } from "../DataHandler";
import "./shelfButton.css";

export type ShelfButtonProps = {
	key: number;
	Name: string;
	icon: string;
	scriptPath: string;
	tooltip: string;
};
// * Icon button which runs the associated script from the script path. Hover mouse for tooltip.
export const ShelfButton = ({
	Name,
	icon,
	scriptPath,
	tooltip
}: ShelfButtonProps) => {
	const imageRef = React.useRef();
	const imgurl = retrieveManifestLink().replace("manifest.json", `icons/${icon}.svg`)

	React.useEffect(() => {
		fetch(imgurl)
			.then(res => res.blob()) // Gets the response and returns it as a blob
			.then(blob => {
				if (imageRef.current !== undefined) {
					imageRef.current.src = URL.createObjectURL(blob);
				}
			});
	}, []);

	function runScript() {
		const scriptUrl = retrieveManifestLink().replace("manifest.json", `scripts/${scriptPath}.js`)
		const script = document.createElement("script");
		script.src = scriptUrl;
		script.onload = function() {
			// we can remove the script after its loaded so we dont clog up the HTML from many script uses
			document.documentElement.firstChild.removeChild(script);
		};

		// append and execute script
		document.documentElement.firstChild.appendChild(script);
	}

	return (
		<img
			className={"shelfButton"}
			title={"tooltip"}
			ref={imageRef}
			id="icon"
			width="36"
			height="36"
			alt={"hi"}
			onClick={() => runScript()}
		/>
	);
};
