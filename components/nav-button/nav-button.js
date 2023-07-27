import { nextButton } from "../../index.js";
import { prevButton } from "../../index.js";
import { page } from "../../index.js";
import { maxPage } from "../../index.js";


export function changeButtonColor(){
    if (page === 1){
      prevButton.innerHTML = "First Page"
      prevButton.classList.add("black")
      console.log("wir sind auf der ersten Seite")
    }
    else{
      prevButton.innerHTML = "previous"
      prevButton.classList.remove("black")
    }
  
    if (page === maxPage){
      nextButton.innerHTML = "Last Page"
      nextButton.classList.add("black")
    }
    else{
      nextButton.innerHTML = "next"
      nextButton.classList.remove("black")
    }
    return
  }
