import { ListeProduit } from "./ListeProduit.js";


const carte = document.getElementById("carte");
const icone = document.querySelector(".logo");

fetch("../pictures.json").then((response)=>response.json()).then((produits)=>{
    
    const prods = new ListeProduit(produits);
    carte.innerHTML = prods.carte();
    


});