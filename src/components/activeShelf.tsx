import React from "react";
import { ShelfButton } from "./shelfButton";
import { Button } from "../Manifest";

export type ActiveShelfProps = {
	Buttons: Button[];
};
//* Container for buttons which displays all the buttons for the active shelf
export const ActiveShelf = ({ Buttons }: ActiveShelfProps) => {
	return (
		<div>
			{Buttons.map((item, index) => (
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
