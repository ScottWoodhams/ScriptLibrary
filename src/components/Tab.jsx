import React from "react";
import "./Tab.css"


export const Tab = ({item, onActiveTabUpdate, key, isActive}) => {
  return (
    <div className={"tab"} target={isActive} onClick={() => onActiveTabUpdate(item.name)}>
      {item.name}
    </div>
  )
}