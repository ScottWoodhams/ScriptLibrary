import React from "react";
import {retrieveManifestLink} from "../DataHander";


export const ShelfButton = ({name,icon,tooltip,script}, key) => {


  const imgurl = retrieveManifestLink().replace("manifest.json", `icons/${icon}.png`)
  //const imgurl = "/icons/icon_D.png"
  const imageRef = React.useRef();
    React.useEffect(() => {
        console.log(imgurl)
        fetch(imgurl)
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
              let objectURL = URL.createObjectURL(blob);
              console.log(imageRef.current);
              imageRef.current.src = objectURL;
          });
    }, []);


    // /**
    //  * Used to load and execute javascript file.
    //  * @param file JS file name
    //  * @param callback Subscribe to get notified when script file is loaded
    //  **/
    // function loadScript(file, callback) {
    //     let script = document.createElement("script");
    //     script.src = file;
    //
    //     script.onload = function () {
    //         callback();
    //     };
    //
    //     // append and execute script
    //     document.documentElement.firstChild.appendChild(script);
    // }


    return (
    <div className={"shelfButton"}>
        <img ref={imageRef} id="myImg" width="128" height="128"  alt={'hi'}/>
      <label>hi</label>
    </div>
  )
}