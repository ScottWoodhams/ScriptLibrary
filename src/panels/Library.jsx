import React, {useEffect} from "react";
import {TabsContainer} from "../components/TabsContainer";
import {Shelf} from "../components/Shelf";
import {retrieveLocalManifest} from "../DataHander";

export const Library = () => {

  useEffect(() =>{
    const manifest = retrieveLocalManifest()
    console.log(manifest)
  })

  async function getManifest(){

  }

  return (
    <div>
      <TabsContainer/>
      <Shelf/>
    </div>
  )
} 