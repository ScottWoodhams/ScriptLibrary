import {storage} from "uxp";

export async function updateManifestFromServer(){
  let file = retrieveManifestLink()
  let myObject = await fetch(file);
  let manifest = await myObject.text();
  storeManifest(JSON.parse(manifest))
}

export function storeManifestLink(link) {
  storage.localStorage.setItem("manifestLink", link)
}

export function retrieveManifestLink(){
  let link = storage.localStorage.getItem("manifestLink")
  if(link === null || link === ""){
    return "LINK NOT SET";
  }
  return link;
}

export function storeManifest(manifest) {
  storage.localStorage.setItem("manifest", manifest)
}

export function retrieveLocalManifest(){
  return storage.localStorage.getItem("manifest")
}

export async function retrieveServerManifest(){
  let file = retrieveManifestLink()
  let myObject = await fetch(file);
  return JSON.parse(await myObject.text());
}

export async function checkForManifestUpdate() {
  const manifest = await updateManifestFromServer()
  return manifest.version !== retrieveServerManifest().version
}

