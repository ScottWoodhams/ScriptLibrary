import React, { useState } from "react";
import { Tabs } from "../components/Tabs";
import { Shelf } from "../components/Shelf";
import { Manifest } from "../Manifest";

export type LibraryProps = {manifest: Manifest};
export const Library = ({ manifest }: LibraryProps) => {
    const [activeShelf, setActiveShelf] = useState("");

    function updateActiveShelf(name: string) {
        setActiveShelf(name);
        // set tabs to be selected or unselected
        Array.from(document.querySelectorAll(".tab")).forEach(tab => {
            tab.id === activeShelf ? tab.classList.add("selected") : tab.classList.remove("selected");
		});
    };

	return (
		<div>
			<Tabs
				tabs={manifest.shelves}
				onActiveTabUpdate={(e: string) => updateActiveShelf(e)}
			/>
			<Shelf shelf={manifest.shelves[activeShelf]} />
		</div>
	);
};
