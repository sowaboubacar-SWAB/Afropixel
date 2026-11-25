const carte = document.getElementById("carte");
const panier = [];

fetch("../pictures.json").then(response=>response.json()).then(produits=>{
    
    carte.innerHTML="";
    for (const article of produits) {
        carte.innerHTML +=`
            <div class="contenu-class">
                <img src="../${article.url}" alt="${article.nom}" class="image">
                <h3>${article.nom}</h3>
                <p class="prix">${article.prix}</p>
                <button class="plus">+</button>
                <span class="valeur">-</span>
                <button class="moins">-</button>
            </div>

        `
        const toutesLesCartes = carte.querySelectorAll(".contenu-class");

        for (const uneCarte of toutesLesCartes) {
            let valeur = 0 ; // Un compteur propre à chaque carte
            const plus = uneCarte.querySelector(".plus");
            const moins = uneCarte.querySelector(".moins");
            const spanCompteur = uneCarte.querySelector(".valeur");

            plus.addEventListener("click", () => {
                valeur++;
                spanCompteur.textContent = valeur;
            });

            moins.addEventListener("click", () => {
                if (valeur > 0) {
                    
                    valeur--;
                    if(valeur===0){
                        spanCompteur.textContent = "-";
                    }else
                        spanCompteur.textContent = valeur;
                }
            });
        }
        
        // const contenu = document.createElement("div");
        // contenu.classList.add("contenu-class")

        // const image = document.createElement("img");
        // image.id ="image";
        // image.src=article.url ;
        // image.alt=article.nom ;

        // const titre = document.createElement("h3");
        // titre.textContent = article.nom;

        // const prix = document.createElement("p");
        // prix.textContent = article.prix;

        // const plus = document.createElement("button");
        // plus.textContent ="+";
        // plus.className="plus";

        // const moins = document.createElement("button");
        // moins.textContent ="-";
        // moins.className="moins";
        
        // const spanCompteur = carte.querySelector(".valeur");
        // plus.addEventListener("click", () => {
        //     valeur ++;
        //     spanCompteur.textContent = valeur ;
        //     //affichePanier(article,valeur);
            
        // });
        // enleverProduit.addEventListener("click",()=>{
        //     if(valeur>0){
        //         valeur --;
        //         spanCompteur.textContent = valeur ;                   
        //     }
        // });

        // moins.addEventListener("click", () => {
        //    if(valeur>0){
        //         valeur --;
        //         spanCompteur.textContent = valeur ;

        //         //affichePanier(article,valeur);
        //    }
        // });
        // carte.append()

       
    };
});

function ajouter(produits){
    panier.push(produits);
    console.log("On a ajouter : "+produits.nom);

}

