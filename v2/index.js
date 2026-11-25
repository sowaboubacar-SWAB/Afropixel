const carte = document.getElementById("carte");
const icone = document.querySelector(".logo");

fetch("../pictures.json").then((response)=>response.json()).then((produits)=>{
    
    const prods = new ListeProduit(produits);
    carte.innerHTML = prods.carte();
    


});
class CarteProduit{
    constructor(id,url,nom,prix){
        this.id=id;
        this.url=url;
        this.nom=nom;
        this.prix=prix;
    }
    render(){
        return`
            <div class="contenu-class">
                <img src="../${this.url}" alt="${this.img}" class="image">
                <h3>${this.nom}</h3>
                <p class="prix">${this.prix}</p>
                <button class="plus" >+</button>
                <button class="moins">-</button>
            </div>
        `
    }

    
    
}

class ListeProduit{
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
