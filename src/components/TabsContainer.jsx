import React from "react";
import {Tab} from "./Tab";
import "./TabsContainer.css"
import {ShelfButton} from "./ShelfButton";

export const TabsContainer = (props) => {

  return (
    <div className={"tabsContainer"}>
      {
        props.manifest.shelves.map((item) => (
          <Tab key={item.Name} item={item}/>
        ))
      }
      <Tab/>
      s
      <Tab/>
      <Tab/>
    </div>
  )
}