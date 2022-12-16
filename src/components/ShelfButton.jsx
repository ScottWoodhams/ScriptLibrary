import React from "react";
import {retrieveManifestLink} from "../DataHander";


export const ShelfButton = ({name,icon,tooltip,script}, key) => {

  const imgurl = retrieveManifestLink().replace("manifest.json", `icons/${icon}.png`)

  const imageRef = React.useRef();
    React.useEffect(() => {
        fetch(imgurl)
          .then(res => res.blob()) // Gets the response and returns it as a blob
          .then(blob => {
            imageRef.current.src = URL.createObjectURL(blob);

          });


    }, []);

    function runCode(){
      const scriptUrl = retrieveManifestLink().replace("manifest.json", `scripts/${script}.js`)
      loadScript(scriptUrl, ()=> console.log("ran"))

    }

    /**
     * Used to load and execute javascript file.
     * @param file JS file name
     * @param callback Subscribe to get notified when script file is loaded
     **/
    function loadScript(file, callback) {
        let script = document.createElement("script");
        script.src = file;
        //script.id = "runningScript"
        script.onload = function () {
            callback();
            document.documentElement.firstChild.removeChild(script);
        };



        // append and execute script
        document.documentElement.firstChild.appendChild(script);

    }


    return (
    <div className={"shelfButton"}>
      <img
        title={"tooltip"}
        ref={imageRef}
        id="icon"
        width="64"
        height="64"
        alt={'hi'}
        onClick={() => runCode()}

      />
      {/*<label>{name}</label>*/}
    </div>
  )
}