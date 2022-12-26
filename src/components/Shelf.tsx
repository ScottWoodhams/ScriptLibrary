import React from "react";
import "./Shelf.css";
import { ShelfButton } from "./ShelfButton";
import * as Manifest from "../Manifest";

export type ShelfProps = { shelf: Manifest.Shelf };
export const Shelf = ({ shelf }: ShelfProps) => {
	return (
		<div className={"shelf"}>
			{shelf.buttons.map((button: Manifest.Button) => (
				<ShelfButton
					key={button.name}
					name={button.name}
					icon={button.icon}
					tooltip={button.tooltip}
					script={button.scriptPath}
				/>
			))}
		</div>
	);
};
