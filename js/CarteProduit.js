export class CarteProduit{
    constructor({id,url,nom,prix}){
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
