import React from "react";
import "./Shelf.css"
import {ShelfButton} from "./ShelfButton";


export const Shelf = (props) => {

  return (
    <div className={"shelf"}>
      {
        props.buttons.map((item) => (
          <ShelfButton key={item.Name} item={item}/>
        ))
      }
      </div>
  )
}