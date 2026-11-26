import { ListeProduit } from "./ListeProduit.js";
import { Panier } from "./Panier.js";

const carte = document.getElementById("carte");
const icone = document.querySelector(".logo");
const panie = document.querySelector(".zone-panier");


const panier = new Panier();
panier.render();

icone.addEventListener("click",()=>{
    panie.classList.toggle("visible")
})



fetch("../pictures.json").then((response)=>response.json()).then((produits)=>{
    
    const prods = new ListeProduit(produits);
    carte.innerHTML = prods.carte();
    prods.activerBoutons(panier);

});
