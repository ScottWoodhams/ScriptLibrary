import React from "react";
import {TabsContainer} from "../components/TabsContainer";
import {Shelf} from "../components/Shelf";
import {retrieveLocalManifest} from "../DataHander";

export const Library = (props) => {

  return (
    <div>
      <label>{props.manifest}</label>
      <TabsContainer/>
      {/*<Shelf buttons={props.manifest}/>*/}
    </div>
  )
} 