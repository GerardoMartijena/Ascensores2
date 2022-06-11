const opcion1=1;
const opcion2=2;
const opcion3=3;
let opcion=prompt("Selecione una opcion 1=mayor menor o igual a 1000  2=Ingrese Hola 3=entre 20 y 50");
if(opcion==1){
    let num= prompt("Ingrese un numero");
num= parseInt(num);
if (num>1000){
    alert("Su numero es mayor a 1000");
}
else if(num==1000){
    alert("Su numero es igual a 1000");
}
else{
    alert("Su numero es menoro a 1000");
}
}
if(opcion==2){
    const Hola="Hola";
    let y=0;
    while(y==0){
        let x=prompt("Igrese Hola");
        if(Hola===x){
            alert("has escrito Hola");
            y=1;
        }
        else{
            alert("no has escrito Hola");
            y=0
        }
    }
}
if(opcion==3){
    let valor=true;
    const min=20;
    const max=50;
    
    while(valor){
        let z=true;
        let num1=prompt("Ingrese un valor");
        if((num1>=min) && (num1<=50)){
        alert("Su numero esta entre 20 y 50");
        while(z==true){
            alert("quiere salir");
            num1=prompt('SI o No');
        if(num1==="SI"){
            valor=false;
            z=false;
        }
        else if(num1==="NO"){
            valor=true;
            z=false;
        }
        else {
            alert("valor ingresado es incorrecto");
            z===true
        }
        }
        
    }
    else{
        alert("Su numero no esta entre 20 y 50");
    }
    }
}






