import {storage} from "uxp";
import {Manifest} from "./Manifest";

export async function storeManifestFromServer() {
    let file: string = retrieveManifestLink()
    let myObject: Response = await fetch(file);
    let manifest: string = await myObject.text();
    storeManifest(manifest)
}

export async function retrieveServerManifestAsObject(): Promise<Manifest> {
    let fileLink: string = retrieveManifestLink()
    let myObject: Response = await fetch(fileLink);
    return JSON.parse(await myObject.text());
}

export function storeManifestLink(link) {
    storage.localStorage.setItem("manifestLink", link)
}

export function retrieveManifestLink(): string {
    let link: string = storage.localStorage.getItem("manifestLink")
    if (link === null || link === "") {
        return "https://raw.githubusercontent.com/ScottWoodhams/UXPScripts/dev/manifest.json";
    }
    return link;
}

export function storeManifest(manifest) {
    storage.localStorage.setItem("manifest", manifest)
}

export function retrieveLocalManifest(): Manifest {
    return JSON.parse(storage.localStorage.getItem("manifest"))
}

export function getClientManifestVersion(): string {
    return JSON.parse(storage.localStorage.getItem("manifest")).version
}

export async function getServerManifestVersion(): Promise<string> {
    let serverManifest: Manifest = await retrieveServerManifestAsObject();
    return serverManifest.version;
}

export async function isNewManifestVersionAvailable(): Promise<boolean> {
    const localVersion: string = getClientManifestVersion();
    const serverVersion: string = await getServerManifestVersion();
    return localVersion !== serverVersion
}