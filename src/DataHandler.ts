import { app } from "photoshop";
import { storage, fs } from "uxp";
import { Manifest } from "./Manifest";

export function retrieveManifestLink(): string {
	const link: string = storage.localStorage.getItem("manifestLink");
	if (link === null || link === "") {
		return "https://raw.githubusercontent.com/ScottWoodhams/UXPScripts/dev/manifest.json";
	}
	return link;
}

function isWebLink(link: string): boolean {
	return link.startsWith("https://") || link.startsWith("http://");
}

export async function loadManifest(): Promise<Manifest> {
	const manifestLink: string = retrieveManifestLink();
	console.log(
		"🚀 ~ file: DataHandler.ts:19 ~ loadManifest ~ retrieveManifestLink",
		retrieveManifestLink
	);

	// Load external manifest
	let externalManifest: Manifest = null;

	// get external manifest depending on if the link is a web link or not
	if (isWebLink(manifestLink)) {
		const myObject: Response = await fetch(manifestLink);
		externalManifest = JSON.parse(await myObject.text());
	} else {
		externalManifest = JSON.parse(
			await fs.readFile(manifestLink, { encoding: "utf-8" })
		);
	}

	// Load locally stored manifest
	const localManifest: Manifest = JSON.parse(
		storage.localStorage.getItem("manifest")
	);

	// if no manifest exist - throw error
	if (localManifest === null && externalManifest === null) {
		app.showAlert(
			"Script manifest not found. Update manifest link via panel menu"
		);
		return null;
	}

	// Check if manifests are different
	if (externalManifest.version !== localManifest.version) {
		// store the external manifest locally and return it

		storage.localStorage.setItem(
			"manifest",
			JSON.stringify(externalManifest)
		);
		return externalManifest;
	} else {
		// return the locally stored manifest

		return localManifest;
	}
}

export async function loadIcon(iconName: string): Promise<string> {
	const imgurl = retrieveManifestLink().replace(
		"manifest.json",
		`icons/${iconName}.png`
	);

	const res = await fetch(imgurl);
	const blob = await res.blob();
	return URL.createObjectURL(blob);
}
