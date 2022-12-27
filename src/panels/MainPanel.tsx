import React from "react";
import { ActiveShelf } from "../components/activeShelf";
import { Shelves } from "../components/shelves";

//* Main visible panel.
export const MainPanel = () => {
	return (
		<div>
			<Shelves />
			<ActiveShelf />
		</div>
	);
};
