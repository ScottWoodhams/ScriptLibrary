import React, { useState, useEffect } from "react";
import { ActiveShelf } from "../components/activeShelf";
import { Shelves } from "../components/shelves";
import { loadManifest } from "../DataHandler";
import { Manifest, Shelf } from "../Manifest";

//* Main visible panel.
export const MainPanel = () => {
	const [activeShelf, setActiveShelf] = useState<Shelf>();
	const [manifest, setManifest] = useState<Manifest>();

	function toggleActiveShelf(shelf) {
		for (let i = 0; i < manifest.shelves.length; i++) {
			if (manifest.shelves[i].name === shelf) {
				setActiveShelf(manifest.shelves[i]);
				break;
			}
		}
	}

	useEffect(() => {
		loadManifest().then(manifest => setManifest(manifest));
	}, []);

	return (
		<div>
			<Shelves
				onTabChange={name => toggleActiveShelf(name)}
				shelves={manifest.shelves}
			/>
			<ActiveShelf buttons={activeShelf.buttons} />
		</div>
	);
};
