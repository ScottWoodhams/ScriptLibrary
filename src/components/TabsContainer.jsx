import React from "react";
import {Tab} from "./Tab";
import "./TabsContainer.css"


export const TabsContainer = ({tabs, onActiveTabUpdate}) => {

  function updateTab(name){
    console.log(name)
  }

  let testItem = {
      name: "test"
  }


  return (
    <div className={"tabsContainer"}>
      {
        tabs.map((item) => (
          <Tab key={item.Name} item={item} onActiveTabUpdate={(name) => onActiveTabUpdate(name)}> </Tab>
        ))
      }
      <Tab key={"Test"} item={testItem} onActiveTabUpdate={(name) => onActiveTabUpdate(name)}> </Tab>
    </div>
  )
}