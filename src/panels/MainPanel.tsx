import React, { useState, useEffect } from "react";
import { ActiveShelf } from "../components/activeShelf";
import { Shelves } from "../components/shelves";
import { loadManifest } from "../DataHandler";
import { Manifest, Shelf } from "../Manifest";

//* Main visible panel.
export const MainPanel = () => {
	const [activeShelf, setActiveShelf] = useState<Shelf>();
	const [manifest, setManifest] = useState<Manifest>();

	function toggleActiveShelf(shelf: string) {
		if (manifest === undefined || manifest === null) {
			setActiveShelf(manifest.shelves[0]);
			return;
		}
		for (let i = 0; i < manifest.shelves.length; i++) {
			if (manifest.shelves[i].name === shelf) {
				setActiveShelf(manifest.shelves[i]);
				break;
			}
		}
	}

	useEffect(() => {
		const fetchManifest = async () => {
			const manifest = await loadManifest();
			console.log(
				"🚀 ~ file: MainPanel.tsx:28 ~ fetchManifest ~ manifest",
				manifest
			);
			setManifest(manifest);
			setActiveShelf(manifest.shelves[0]);
		};

		fetchManifest().catch(console.error);
	}, []);

	function getShelves() {
		const dummyShelf: Shelf = { name: "Dummy", buttons: [] };
		const dummyShelves = [dummyShelf];

		if (manifest === undefined || manifest === null) {
			return dummyShelves;
		}

		if (manifest.shelves === undefined || manifest.shelves === null) {
			return dummyShelves;
		}

		return manifest.shelves;
	}

	function getButtons() {
		if (activeShelf === undefined || activeShelf === null) {
			return [];
		} else {
			return activeShelf.buttons;
		}
	}

	return (
		<div id={"MainPanel"}>
			<Shelves
				onTabChange={name => toggleActiveShelf(name)}
				shelves={getShelves()}
			/>
			<ActiveShelf buttons={getButtons()} />
		</div>
	);
};
