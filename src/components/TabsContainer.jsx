import React from "react";
import {Tab} from "./Tab";
import "./TabsContainer.css"

export const TabsContainer = () => {

  return (
    <div className={"tabsContainer"}>
      <Tab/>
      <Tab/>
      <Tab/>
    </div>
  )
}