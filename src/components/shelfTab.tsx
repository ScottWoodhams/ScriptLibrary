import React from "react";

export type ShelfTabProps = {
	name: string;
	onTabChange: (name: string) => void;
};

// * Tab button when clicked on will send an event to change the active shelf
export const ShelfTab = ({ name, onTabChange }: ShelfTabProps) => {
	return (
			<button
				className="btn btn-primary"
				onClick={() => onTabChange(name)}
			>
				{name}
			</button>
	);
};
