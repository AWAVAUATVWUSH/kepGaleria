import { KEPEK } from "./adatok.js";
import Galeria from "./Galeria.js";
import NagyKep from "./NagyKep.js";
new Galeria(document.querySelector(".galeria"),KEPEK);

new NagyKep(document.querySelector(".kiemeltkep"), document.getElementById("balgomb"), document.getElementById("jobbgomb"), KEPEK);



/*
var nagykepIndex = 0;
renderNagykep(nagykepIndex);

let jobbGombElement = document.getElementById("jobbgomb");
jobbGombElement.addEventListener('mousedown', ()=>{
    if(nagykepIndex<KEPEK.length-1){
        nagykepIndex++;
    }
    else{
        nagykepIndex = 0;
    }
    renderNagykep(nagykepIndex);
})

let balGombElement = document.getElementById("balgomb");
balGombElement.addEventListener('mousedown', ()=>{
    if(nagykepIndex>0){
        nagykepIndex--;
    }
    else{
        nagykepIndex = KEPEK.length-1;
    }
    renderNagykep(nagykepIndex);
})

function renderNagykep(index){
    let szuloElem = document.querySelector(".kiemeltkep");
    szuloElem.innerHTML = "";
    new Kep(KEPEK[index].kep, KEPEK[index].cim, szuloElem);
}*/

