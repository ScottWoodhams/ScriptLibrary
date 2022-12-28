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

export function storeManifestLink(link: string): void {
	storage.localStorage.setItem("manifestLink", link);
}

function isWebLink(link: string): boolean {
	return link.startsWith("https://") || link.startsWith("http://");
}

function storeRemoteManifest(manifest: Manifest) {
	storage.localStorage.setItem("manifest", JSON.stringify(manifest));
}

export async function loadManifest(): Promise<Manifest> {
	const manifestLink: string = retrieveManifestLink();

	//* --- START Load both local and remote manifests ---

	// Load remote manifest
	let remoteManifest: Manifest = null;

	// get remote manifest depending on if the link is a web link or not
	if (isWebLink(manifestLink)) {
		const myObject: Response = await fetch(manifestLink);
		remoteManifest = JSON.parse(await myObject.text());
	} else {
		remoteManifest = JSON.parse(
			await fs.readFile(manifestLink, { encoding: "utf-8" })
		);
	}

	// Load locally stored manifest
	const localManifest: Manifest = JSON.parse(
		storage.localStorage.getItem("manifest")
	);

	//* --------------------------------------
	const localExist = localManifest !== null;
	const remoteExist = remoteManifest !== null;
	//* --------------------------------------

	if (localExist && remoteExist) {
		if (remoteManifest.version !== localManifest.version) {
			storeRemoteManifest(remoteManifest);
		}
		return remoteManifest;
	} else if (!localExist && remoteExist) {
		storeRemoteManifest(remoteManifest);
		return remoteManifest;
	} else if (localExist && !remoteExist) {
		return localManifest;
	} else {
		return null;
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
