//Variables
let selectPalabra;
let letra1;
let letra2;
let letra3;
let letra4;
let letra5;
let letra6;
let letra7;
let letraIngresada;
let vidas;
let ganaste;
let volverAJugar;
//Funciones
const letraAlfajor=(letra)=>{
    alert("la letra "+letra+" se encuentra en la palabra");
    if(letra!=false){
        if(letra==letra1){
            alert("A _ _ A _ _ _");
        }
        if(letra==letra2){
            alert("_ L _ _ _ _ _");
        }
        if(letra==letra3){
            alert("_ _ F _ _ _ _");
        }
        if(letra==letra5){
            alert("_ _ _ _ J _ _");
        }
        if(letra==letra6){
            alert("_ _ _ _ _ O _");
        }
        if(letra==letra7){
            alert("_ _ _ _ _ _ R");
        }
        
        letra=false;
    }
    else if(letra==false){
        alert("Letra ya usada");
    }
}
const letraDeclarar=(letra)=>{
    alert("la letra "+letra+" se encuentra en la palabra");
    if(letra!=false){
        if(letra==letra1){
            alert("D _ _ _ _ _ _ _");
        }
        if(letra==letra2){
            alert("_ E _ _ _ _ _ _");
        }
        if(letra==letra3){
            alert("_ _ C _ _ _ _ _");
        }
        if(letra==letra5){
            alert("_ _ _ L _ _ _ _");
        }
        if(letra==letra6){
            alert("_ _ _ _ A _ A _");
        }
        if(letra==letra7){
            alert("_ _ _ _ _ R _ R");
        }
        
        letra=false;
    }
    else if(letra==false){
        alert("Letra ya usada");
    }
}
const ganador=()=>{
    alert("Felicidades has adivinado la palabra");
    ganaste=true;
}
const ingresarLetra=()=>{
    letraIngresada=prompt("Ingtrese 1 letra").toUpperCase();
}
const inicio=(cantidadDeLetras)=>{
    alert("la palabra tiene "+cantidadDeLetras+" letras");
    alert("tenes "+vidas+" vidas");
}
//Programa
do{
    alert("Antes de comenzar busque algo con que anotar");
    vidas=5;
    ganaste=false;
    selectPalabra=prompt("Ingrese un numero del 1 al 10");
    switch (parseInt(selectPalabra)){
        case 1://Palabra Alfajor
            inicio(7);
            letra1="A";
            letra2="L";
            letra3="F";
            letra4="A";
            letra5="J";
            letra6="O";
            letra7="R";
            for(vidas;vidas>0;){
                if(ganaste==true){
                    break;
                }
                ingresarLetra();
                switch (letraIngresada){
                    case "A":
                        letraAlfajor(letra1);
                        break;
                    case "L":
                        letraAlfajor(letra2);
                        break;
                    case "F":
                        letraAlfajor(letra3);
                        break;
                    case "J":
                        letraAlfajor(letra5);
                        break;
                    case "O":
                        letraAlfajor(letra6);
                        break;
                    case "R":
                        letraAlfajor(letra7);
                        break;
                    case "ALFAJOR":
                        ganador();
                        break;
                    default:
                        alert("La letra no se encuentra en la palabra");
                        vidas--;
                        alert("tenes "+vidas+" vidas");
                }
            }
            break;
        case 2://Palabra Declarar
            inicio(8);
            letra1="D";
            letra2="E";
            letra3="C";
            letra4="L";
            letra5="A";
            letra6="R";
            for(vidas;vidas>=0;){
                if(ganaste==true){
                    break;
                }
                ingresarLetra();
                switch(letraIngresada){
                    case "D":
                        letraDeclarar(letra1);
                        break;
                    case "E":
                        letraDeclarar(letra2);
                        break;
                    case "C":
                        letraDeclarar(letra3);
                        break;
                    case "L":
                        letraDeclarar(letra4);
                        break;  
                    case "A":
                        letraDeclarar(letra5);
                        break;
                    case "R":
                        letraDeclarar(letra6);
                        break;
                    case "DECLARAR":
                        ganador();
                        break;
                    default:
                        alert("La letra no se encuentra en la palabra");
                        vidas--;
                        alert("tenes "+vidas+" vidas");
                }
            }
            break;
    }
    volverAJugar=confirm("Quieres Volver a Jugar?");
}while(volverAJugar);



