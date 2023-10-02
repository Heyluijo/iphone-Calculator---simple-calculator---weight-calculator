
/* Primer Programa */

let boton = document.getElementById('sumar');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click',hacerSuma);

function hacerSuma(){
    let n1 = parseFloat(document.getElementById('n1').value);
    let n2 = parseFloat(document.getElementById('n2').value);
    let s=n1+n2;
    respuesta.innerHTML=`la suma es ${s}`;
}

function limpiar(){
    document.getElementById('formulario').reset();
    respuesta.innerHTML="";
}


 /* Segundo programa */
 let btnPeso = document.getElementById('btnPeso');
 let resultado = document.getElementById('resultPeso');

 btnPeso.addEventListener('click', calPeso);

function calPeso(){
    let n3 = parseFloat(document.getElementById('n3').value);

    if (document.getElementById('toneladas').checked){
    
        let g = n3* 0.0004535920000001679;
        resultado.innerHTML= `Su peso es ${g} toneladas`;

    } 
    
    if (document.getElementById('kilogramos').checked){
    
        let g = n3* 0.453592;
        resultado.innerHTML= `Su peso es ${g} kilogramos`;
    } 

    if (document.getElementById('gramos').checked){
    
        let g = n3* 453.592;
        resultado.innerHTML= `Su peso es ${g} gramos`;
    } 

    if (document.getElementById('miligramos').checked){
    
        let g = n3* 453592;
        resultado.innerHTML= `Su peso es ${g} miligramos` ;
    }

}

function limpiar2(){
    document.getElementById('formPeso').reset();
    resultado.innerHTML="";
}



/* Calculadora*/

let btnPeso = document.getElementById('btnPeso');
 let resCaladora = document.getElementById('resCaladora');
