import { CarteProduit } from "./CarteProduit.js";

export class ListeProduit{
    constructor(produits){
        this.carteProduits=[];
        for(const produit of produits){
            this.carteProduits.push(
                new CarteProduit(produit.id,produit.url,produit.nom,produit.prix)
            )
        }
    }
    carte(){
        
        let card = "";
        for (const contenuCard of this.carteProduits){
            card += contenuCard.render();
        }
        return card;
    }
    
}
