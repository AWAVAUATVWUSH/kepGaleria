import Kep from "./Kep.js";

export default class Galeria{
    #lista;
    constructor(szuloElem, lista){
        this.szuloElem = szuloElem
        this.#lista = lista; 
        this.megjelenit();
    }
    megjelenit(){
        for(let i = 0; i<this.#lista.length; i++){
            new Kep(this.#lista[i].kep, this.#lista[i].cim, this.szuloElem);
        }
    }
}