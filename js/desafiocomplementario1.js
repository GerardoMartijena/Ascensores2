alert("Antes de comenzar busque algo con que anotar");
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
do{
    vidas=5;
    ganaste=false;
selectPalabra=prompt("Ingrese un numero del 1 al 10");
switch (parseInt(selectPalabra)){
    case 1:
        alert("la palabra tiene 7 letras");
        alert("tenes "+vidas+" vidas");
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
            letraIngresada=prompt("Ingtrese 1 letra").toUpperCase();
            switch (letraIngresada){
                case "A":
                    if(letra1!=false){
                        alert("la letra "+letra1+" se encuentra en la palabra");
                        alert("A _ _ A _ _ _");
                        letra1=false;
                    }
                    else if(letra1==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "L":
                    if(letra2!=false){
                        alert("la letra "+letra2+" se encuentra en la palabra");
                        alert("_ L _ _ _ _ _");
                        letra2=false;
                    }
                    else if(letra2==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "F":
                    if(letra3!=false){
                        alert("la letra "+letra3+" se encuentra en la palabra");
                        alert("_ _ F _ _ _ _");
                        letra3=false;
                    }
                    else if(letra3==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "J":
                    if(letra5!=false){
                        alert("la letra "+letra5+" se encuentra en la palabra");
                        alert("_ _ _ _ J _ _");
                        letra5=false;
                    }
                    else if(letra5==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "O":
                    if(letra6!=false){
                        alert("la letra "+letra6+" se encuentra en la palabra");
                        alert("_ _ _ _ _ O _");
                        letra6=false;
                    }
                    else if(letra6==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "R":
                    if(letra7!=false){
                        alert("la letra "+letra7+" se encuentra en la palabra");
                        alert("_ _ _ _ _ _ R");
                        letra7=false;
                    }
                    else if(letra7==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "ALFAJOR":
                    alert("Felicidades has adivinado la palabra");
                    ganaste=true;
                    break;
                default:
                    alert("La letra no se encuentra en la palabra");
                    vidas--;
                    alert("tenes "+vidas+" vidas");
            }
        }
        break;
    case 2:
        alert("la palabra tiene 8 letras");
        alert("tenes "+vidas+" vidas");
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
            letraIngresada=prompt("Ingtrese 1 letra").toUpperCase();
            switch(letraIngresada){
                case "D":
                    if(letra1!=false){
                        alert("la letra "+letra1+" se encuentra en la palabra");
                        alert("D _ _ _ _ _ _ _");
                        letra1=false;
                    }
                    else if(letra1==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "E":
                    if(letra2!=false){
                        alert("la letra "+letra2+" se encuentra en la palabra");
                        alert("_ E _ _ _ _ _ +");
                        letra2=false;
                    }
                    else if(letra2==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "C":
                    if(letra3!=false){
                        alert("la letra "+letra3+" se encuentra en la palabra");
                        alert("_ _ C _ _ _ _ _");
                        letra3=false;
                    }
                    else if(letra3==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "L":
                    if(letra4!=false){
                        alert("la letra "+letra4+" se encuentra en la palabra");
                        alert("_ _ _ L _ _ _");
                        letra4=false;
                    }
                    else if(letra4==false){
                        alert("Letra ya usada");
                    }
                    break;  
                case "A":
                    if(letra5!=false){
                        alert("la letra "+letra5+" se encuentra en la palabra");
                        alert("_ _ _ _ A _ A _");
                        letra5=false;
                    }
                    else if(letra5==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "R":
                    if(letra6!=false){
                        alert("la letra "+letra6+" se encuentra en la palabra");
                        alert("_ _ _ _ _ R _ R");
                        letra6=false;
                    }
                    else if(letra6==false){
                        alert("Letra ya usada");
                    }
                    break;
                case "DECLARAR":
                    alert("Felicidades has adivinado la palabra");
                    ganaste=true;
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



