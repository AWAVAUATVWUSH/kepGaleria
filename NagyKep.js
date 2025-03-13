import Kep from "./Kep.js";
export default class NagyKep{
    #szuloElem;
    #balGombElem;
    #jobbGombElem;
    #lista;
    constructor(szuloElem, balGombElem, jobbGombElem, lista){
        this.#szuloElem = szuloElem;
        this.#balGombElem = balGombElem;
        this.#jobbGombElem = jobbGombElem;
        this.#lista = lista;
        this.megjelenit();
    }
    megjelenit(){
        var nagykepIndex = 0;
        this.renderNagykep(nagykepIndex);

        this.#jobbGombElem.addEventListener('mousedown', ()=>{ //IT IS IMPORTANT TO USE ()=> AND NOT function(){} BECAUSE this. WILL REFRENCE THE BUTTON OBJECT NOT THE NagyKep OBJECT
            if(nagykepIndex<this.#lista.length-1){
                nagykepIndex++;
            }
            else{
                nagykepIndex = 0;
            }
            this.renderNagykep(nagykepIndex);
        })

        this.#balGombElem.addEventListener('mousedown', ()=>{
            if(nagykepIndex>0){
                nagykepIndex--;
            }
            else{
                nagykepIndex = this.#lista.length-1;
            }
            this.renderNagykep(nagykepIndex);
        })
    }
    renderNagykep(index){
        this.#szuloElem.innerHTML = "";
        new Kep(this.#lista[index].kep, this.#lista[index].cim, this.#szuloElem);
    }
}
