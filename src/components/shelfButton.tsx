import React from "react";
import { loadIcon } from "../DataHandler";

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

	React.useEffect(() => {
		imageRef.current.src = loadIcon(icon);
	}, []);

	function runScript() {
		const script = document.createElement("script");
		script.src = scriptPath;
		script.onload = function() {
			// we can remove the script after its loaded so we dont clog up the HTML from many script uses
			document.documentElement.firstChild.removeChild(script);
		};

		// append and execute script
		document.documentElement.firstChild.appendChild(script);
	}

	return (
		<div>
			<img
                title={"tooltip"}
                ref={imageRef}
                id="icon"
                width="64"
                height="64"
                alt={'hi'}
                onClick={() => runScript()}

            />
		</div>
	);
};
