const carte = document.getElementById("carte");
const icone = document.querySelector(".logo");
const panie = document.querySelector(".zone-panier");

icone.addEventListener("click",()=>{
    panie.classList.toggle("visible")
})
fetch("../pictures.json").then((response)=>response.json()).then((produits)=>{
    produits.forEach( (article)=> {
        const card = new listecard(article.url,article.nom,article.prix);
        card.carte();
        
    });
});

class listecard{
    constructor(img , nom , prix ){
        this.img = img;
        this.nom = nom;
        this.prix = prix;
        this.valeur = 0;
    }
    carte(){
        const contenu = document.createElement("div");
        contenu.className = "contenu-class";
        contenu.innerHTML = `
            
            <img src="${this.img}" alt="${this.img}" class="image">
            <h3>${this.nom}</h3>
            <p class="prix">${this.prix}</p>
            <button class="plus">+</button>
            <span class="valeur">-</span>
            <button class="moins">-</button>
        
        `;

        // 2. On cible les boutons uniquement à l'intérieur de contenu
        const plus = contenu.querySelector(".plus");
        const moins = contenu.querySelector(".moins");
        const spanCompteur = contenu.querySelector(".valeur");
        

        // // 3. On utilise directement this.valeur
        // plus.addEventListener("click", () => {
        //     this.valeur++;
        //     spanCompteur.textContent = this.valeur;
        //     if(this.valeur===1){
        //         const pagn = new Panier(this);
        //         pagn.panier();
        //     }else if(this.spanCompteur){
        //         this.spanCompteur.textContent=this.valeur;
        //     }
           
        // });

        // moins.addEventListener("click", () => {
        //     if (this.valeur > 0) {
        //         this.valeur--;
        //         if (this.valeur === 0) {
        //         spanCompteur.textContent = "-";
        //         } else {
        //         spanCompteur.textContent = this.valeur;
        //         }
        //     }
        // });
                // Fonction unique pour ajouter (appelée par le + du catalogue ET le + du panier)
        this.ajouter = () => {
            this.valeur++;
            spanCompteur.textContent = this.valeur;

            if (this.valeur === 1) {
                const pagn = new Panier(this);
                pagn.panier();
            } else if (this.spanCompteur) {
                this.spanCompteur.textContent = this.valeur;
            } 
        };

        // Fonction unique pour diminuer (appelée par le - du catalogue ET le - du panier)
        this.retirer = () => {
            if (this.valeur > 0) {
                this.valeur--;

                if (this.valeur === 0) {
                    spanCompteur.textContent = "-";

                    // Enlève la carte du panier
                    if (this.cartePanier) {
                        this.cartePanier.remove();
                        this.cartePanier = null;
                        this.spanCompteur = null;
                    }

                    // Ferme le panier s'il n'y a plus aucune carte
                    if (panie.children.length === 0) {
                        panie.classList.remove("visible");
                    }
                } else {
                    spanCompteur.textContent = this.valeur;
                    if (this.spanCompteur) {
                        this.spanCompteur.textContent = this.valeur;
                    }
                }
            }
        };

        plus.addEventListener("click", this.ajouter);
        moins.addEventListener("click", this.retirer);


        carte.appendChild(contenu);
    }
   
}

class Panier{
    constructor(article){
        this.article=article;

    }
    panier(){
        const zonePagn = document.createElement("div");
        zonePagn.className = "lepanier"
        
        
        
        zonePagn.innerHTML = `
        
            <img src="${this.article.img}" alt="${this.article.img}" class="image">
            <h3>${this.article.nom}</h3>
            <p class="prix">${this.article.prix}</p>
            <button class="plus">+</button>
            <span class="valeur">${this.article.valeur}</span>
            <button class="moins">-</button>
    
        `;
        this.article.spanCompteur = zonePagn.querySelector(".valeur");

        this.article.cartePanier = zonePagn;


        zonePagn.querySelector(".plus").addEventListener("click", this.article.ajouter);
        zonePagn.querySelector(".moins").addEventListener("click", this.article.retirer);

        panie.appendChild(zonePagn);
    }
}
