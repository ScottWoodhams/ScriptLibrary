import React from "react";


export const ShelfButton = (props) => {



    async function getResourceFromServer(resourceType){

        let url = "";
        if(resourceType === "icon"){
            url = 'https://raw.githubusercontent.com/ScottWoodhams/PS-UI-Exporter/main/plugin/icons/icon_D.png'
        } else if (resourceType === "script") {
            url = props.item.scriptPath;
        }

        const options = {
            method: "GET"
        }

        let response = await fetch(url, options)

        if (response.status === 200) {

            const imageBlob = await response.blob()
            return URL.createObjectURL(imageBlob)
        }
        else {
            console.log("HTTP-Error: " + response.status)
            return ""
        }
    }

    function runCode(){
        let scriptURL = getResourceFromServer('script')
        loadScript(scriptURL, () =>{

        })
    }

    /**
     * Used to load and execute javascript file.
     * @param file JS file name
     * @param callback Subscribe to get notified when script file is loaded
     **/
    function loadScript(file, callback) {
        let script = document.createElement("script");
        script.src = file;

        script.onload = function () {
            callback();
        };

        // append and execute script
        document.documentElement.firstChild.appendChild(script);
    }


    return (
    <div className={"shelfButton"} onClick={runCode()}>
        {<image src={getResourceFromServer('icon')}> </image>}
        <sp-label>{props.item.Name}</sp-label>
    </div>
  )
}