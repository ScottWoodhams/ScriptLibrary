import React, {useState} from "react";
import {Tabs} from "../components/Tabs";
import {Shelf} from "../components/Shelf";


export const Library = (props) => {

    function updateCurrentActiveShelf(activeShelf){

        console.log("New Shelf: " + activeShelf)
        localStorage.setItem("currentTab", activeShelf);
        Array.from(document.querySelectorAll(".tab")).forEach(tab =>{
            console.log(tab)
            if(tab.id === activeShelf){
                tab.classList.add("selected");
                console.log("sele")
            } else{
                tab.classList.remove("selected");
            }
        });

        Array.from(document.querySelectorAll(".shelf")).forEach(shelf => {
            if (shelf.getAttribute("id").startsWith(activeShelf.getAttribute("id"))) {
                shelf.classList.add("visible");
            } else {
                shelf.classList.remove("visible");
            }
        });

    }

    return (
        <div>
            <Tabs tabs={props.manifest.shelves} onActiveTabUpdate={(e) => updateCurrentActiveShelf(e)}/>
            <Shelf shelf={props.manifest.shelves[0]}/>
        </div>
    )
}