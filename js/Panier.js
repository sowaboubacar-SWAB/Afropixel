
export class Panier{
    constructor(){
        this.articles=[];

    }

    render(){
        const zonePanier = document.querySelector(".zone-panier");
        let rendu = '<h2>Mon panier </h2>';
        
        let total = 0;

        for (const article of this.articles) {
            const valeur = article.prix * article.quantite;
            total +=valeur;
            
            rendu += `<ul class="lepanier">
                    <li>${article.nom}</li>
                    </ul>
            `;

        }
        
        rendu +=`<p>total : ${total}</p>`
        zonePanier.innerHTML= rendu;
        
    }

    afficherProduit(id,prix,nom){
        const existant = this.articles.find((article)=>article.id===id);

        if(existant){
            existant.quantite++;
        }else{
            this.articles.push({id,prix,nom,quantite:1});
        }
        this.render();
    }

    retirerProduit(id){
        const existant = this.articles.find((article)=>article.id===id);

        if(existant){
            existant.quantite--;
            if(existant.quantite<=0){
                this.articles= this.articles.filter((article)=>article.id!==id);
            }
            this.render();

        }
    }
}
