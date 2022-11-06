"use strict";
const email = document.querySelector(".email")
const submit = document.querySelector(".enter")
const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const message =  document.querySelector(".message")
const container = document.querySelector(".container")
const invalid = document.querySelector(".invalid")
const mobile = document.querySelector(".mobile")
const empty = " "

submit.addEventListener("click", function(e){
    e.preventDefault();
  if (email.value.match(validation))
     {
               message.style.display = "block"
               container.style.display = "none"
               mobile.style.display = "none"
           }
           else{

               // ERROR MESSAGE


               invalid.style.display = "block"

           }
})