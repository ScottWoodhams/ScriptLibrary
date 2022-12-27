import React from "react";

export type ShelfTabProps = {
	key: string;
	onTabChange: (name: string) => void;
};

// * Tab button when clicked on will send an event to change the active shelf
export const ShelfTab = ({ key, onTabChange }: ShelfTabProps) => {
	return (
		<div>
			<button
				className="btn btn-primary"
				onClick={() => onTabChange(key)}
			>
				{key}
			</button>
		</div>
	);
};
