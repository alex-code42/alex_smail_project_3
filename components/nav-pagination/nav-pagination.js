import { myVariable, nextButton, pagination } from "../../index.js";
import { prevButton } from "../../index.js";
import {fetchCharacters} from "../../index.js";


import { maxPage } from "../../index.js";

export async function clickNextAndPrevButton() {
    const { myVariable } = await import("../../index.js");
    let { page} = await import ("../../index.js")
    let { maxPage} = await import ("../../index.js")
    
    nextButton.addEventListener("click", function(event){ 
        console.log("wir consolen Page",page)
        page++
        if (page > maxPage){
          page = maxPage
        }
        console.log("Page: ",page)
        fetchCharacters()
        pagination.innerHTML = `${page} / ${maxPage}`
      });
      
      prevButton.addEventListener("click", function(event){ 
        page--
        if (page <= 1){
          page = 1
        }
        console.log("Page: ",page)
        fetchCharacters()
        pagination.innerHTML = `${page} / ${maxPage}`
      
        console.log("prevButton")
      });
      return

  }

