import Kep from "./Kep.js";
import { KEPEK } from "./adatok.js";
import NagyKep from "./NagyKep.js";

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

            document.querySelectorAll(".kep")[i].addEventListener('mousedown', ()=>{
                new NagyKep(document.querySelector(".kiemeltkep"), document.getElementById("balgomb"), document.getElementById("jobbgomb"), KEPEK, i);
            })

        }
    }
}