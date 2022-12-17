import {storage} from "uxp";

export async function storeManifestFromServer(){
    let file = retrieveManifestLink()
    let myObject = await fetch(file);
    let manifest = await myObject.text();
    storeManifest(manifest)
}

export async function retrieveServerManifestAsObject(){
    let file = retrieveManifestLink()
    let myObject = await fetch(file);
    return JSON.parse(await myObject.text());
}

export function storeManifestLink(link) {
    storage.localStorage.setItem("manifestLink", link)
}

export function retrieveManifestLink(){
    let link = storage.localStorage.getItem("manifestLink")
    if(link === null || link === ""){
        return "https://raw.githubusercontent.com/ScottWoodhams/UXPScripts/dev/manifest.json";
    }
    return link;
}

export function storeManifest(manifest) {
    storage.localStorage.setItem("manifest", manifest)
}

export function retrieveLocalManifest() {
    return JSON.parse(storage.localStorage.getItem("manifest"))
}

export function getClientManifestVersion(){
    return JSON.parse(storage.localStorage.getItem("manifest")).version
}

export async function getServerManifestVersion() {
    let serverManifest = await retrieveServerManifestAsObject();
    return serverManifest.version;
}

export async function isNewManifestVersionAvailable() {
    const localVersion = await getClientManifestVersion();
    console.log(localVersion)
    const serverVersion = await getServerManifestVersion();
    console.log(serverVersion)

    return localVersion !== serverVersion
}