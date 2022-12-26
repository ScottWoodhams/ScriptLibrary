import { storage, fs } from "uxp";
import { Manifest } from "./Manifest";

export async function getManifest() {}

export async function storeManifestFromServer() {
	const file: string = retrieveManifestLink();
	const myObject: Response = await fetch(file);
	const manifest: string = await myObject.text();
	storeManifest(manifest);
}

export async function retrieveServerManifestAsObject(): Promise<Manifest> {
	const fileLink: string = retrieveManifestLink();
	const myObject: Response = await fetch(fileLink);
	return JSON.parse(await myObject.text());
}

export function storeManifestLink(link) {
	storage.localStorage.setItem("manifestLink", link);
}

export function retrieveManifestLink(): string {
	const link: string = storage.localStorage.getItem("manifestLink");
	if (link === null || link === "") {
		return "https://raw.githubusercontent.com/ScottWoodhams/UXPScripts/dev/manifest.json";
	}
	return link;
}

export function storeManifest(manifest) {
	storage.localStorage.setItem("manifest", manifest);
}

export function retrieveLocalManifest(): Manifest {
	return JSON.parse(storage.localStorage.getItem("manifest"));
}

export function getClientManifestVersion(): string {
	return JSON.parse(storage.localStorage.getItem("manifest")).version;
}

export async function getServerManifestVersion(): Promise<string> {
	const serverManifest: Manifest = await retrieveServerManifestAsObject();
	return serverManifest.version;
}

export async function isNewManifestVersionAvailable(): Promise<boolean> {
	const localVersion: string = getClientManifestVersion();
	const serverVersion: string = await getServerManifestVersion();
	return localVersion !== serverVersion;
}

function isWebLink(link: string): boolean {
	return link.startsWith("https://") || link.startsWith("http://");
}

// TODO 2nd iteration

export async function loadManifest(): Promise<Manifest> {
	const manifestLink: string = retrieveManifestLink();
	let manifest: Manifest = null;

	if (isWebLink(manifestLink)) {
		const myObject: Response = await fetch(manifestLink);
		manifest = JSON.parse(await myObject.text());
	} else {
		manifest = await fs.readFile(manifestLink, { encoding: "utf-8" });
	}

	const localManifest: Manifest = JSON.parse(storage.localStorage.getItem("manifest"));

	if (manifest.version !== localManifest.version) {
		storage.localStorage.setItem("manifest", JSON.stringify(manifest));
		return manifest;
	} else {
		return localManifest;
	}

	if (manifest === null) {
		throw new Error("Manifest not found");
	}

	// return manifest JSON object
}
