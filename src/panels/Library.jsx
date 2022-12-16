import React, {useState} from "react";
import {TabsContainer} from "../components/TabsContainer";
import {Shelf} from "../components/Shelf";


export const Library = (props) => {

  return (
    <div>
      <TabsContainer tabs={props.manifest.shelves} onActiveTabUpdate={(e) => console.log(e)}/>
      <Shelf shelf={props.manifest.shelves[0]}/>
    </div>
  )
} 