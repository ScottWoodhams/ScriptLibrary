import React from "react";
import "../components/shelfTab.css"

export type ShelfTabProps = {
	name: string;
	onTabChange: (name: string) => void;
};

// * Tab button when clicked on will send an event to change the active shelf
export const ShelfTab = ({ name, onTabChange }: ShelfTabProps) => {
	return (
		<div className={"shelfTab"} id={name} onClick={() => onTabChange(name)}>
				<sp-label>{name}</sp-label>
		</div>
	);
};
