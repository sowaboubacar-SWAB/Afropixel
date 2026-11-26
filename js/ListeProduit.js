import { CarteProduit } from "./CarteProduit.js";
import { Panier } from "./Panier.js";
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
    activerBoutons(panier){

        const btPlus = document.querySelectorAll(".plus");
        btPlus.forEach((bouton,index) => {
            bouton.addEventListener("click",()=>{
                const produit = this.carteProduits[index];
                const div = document.createElement('div');
                div.className="lepanier";

                panier.afficherProduit(produit.id,produit.prix,produit.nom);

                
            });
            
        });

        const btMoins = document.querySelectorAll(".moins");
        btMoins.forEach((bouton,index) => {
            bouton.addEventListener("click",()=>{
                const produit = this.CarteProduits[index];
                panier.retirerProduit(produit.id);
            });
            
        });

    }

}
