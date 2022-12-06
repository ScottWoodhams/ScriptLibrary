import React from "react";
import "./Tab.css"


export const Tab = (props) => {
  return (
    <div className={"tab"}>
      {props.item.name}
    </div>
  )
}