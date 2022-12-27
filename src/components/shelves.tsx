import React from "react";
import { ShelfTab } from "./shelfTab";
import { Shelf } from "../Manifest";

export type ShelvesProps = {
	onTabChange: (name: string) => void;
	shelves: Shelf[];
};
// * Container for tabs which controls how the tabs are laid out and handles what tabs get made
export const Shelves = ({ onTabChange, shelves }: ShelvesProps) => {
	return (
		<div>
			{shelves.map((item, index) => (
				<ShelfTab
					key={item.name}
					onTabChange={name => onTabChange(name)}
				/>
			))}
		</div>
	);
};
