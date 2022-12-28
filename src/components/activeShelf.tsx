import React from "react";
import { ShelfButton } from "./shelfButton";
import { Button } from "../Manifest";

export type ActiveShelfProps = {
	buttons: Button[];
};
//* Container for buttons which displays all the buttons for the active shelf
export const ActiveShelf = ({ buttons }: ActiveShelfProps) => {
	return (
		<div id="activeShelf">
			{buttons.map((item, index) => (
				<ShelfButton
					key={index}
					Name={item.name}
					icon={item.icon}
					scriptPath={item.scriptPath}
					tooltip={item.tooltip}
				/>
			))}
		</div>
	);
};
