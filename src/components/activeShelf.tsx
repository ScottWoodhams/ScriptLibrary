import React from "react";
import { ShelfButton } from "./shelfButton";

//* Container for buttons which displays all the buttons for the active shelf
export const ActiveShelf = () => {
	return <div>
        <ShelfButton/>
        <ShelfButton/>
        <ShelfButton/>
    </div>;
};
