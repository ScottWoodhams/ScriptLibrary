import React from "react";
import "./Shelf.css"
import {ShelfButton} from "./ShelfButton";


export const Shelf = ({shelf}) => {

  return (
    <div className={"shelf"}>
      {
        shelf.buttons.map((button) => (
          <ShelfButton
            key={button.name}
            name={button.name}
            icon={button.icon}
            tooltip={button.tooltip}
            script={button.scriptPath}>
          </ShelfButton>
        ))
      }
      </div>
  )
}