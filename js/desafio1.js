let azucar=100;
let leche=200;
let galletitas=250;
let verduras=400;
let carnes=500;
let cantidad;
let tieneDescuento;
let descuento;
let totalConDescuento;
let envio=0;
let selecProducto;
let total=0;
let totalEnvio;
let volverAComprar;
let otraCompra;
let volverAPreguntar=false;
let valorCuotas;
let cuotas;
let quiereCuotas;

const suma=(a,b)=>a+b;
const precio=(a,b)=>a*b;
const elegirProducto=()=>{
    do{
        selecProducto=prompt(`Que productos le gustaria comprar:
        azucar=${azucar}$
        leche=${leche}$
        galletitas=${galletitas}$
        verduras=${verduras}$
        carnes=${carnes}$`).toUpperCase();
        switch(selecProducto){
            case "AZUCAR":
                producto=azucar;
                volverAPreguntar=false;
                break;
            case "LECHE":
                producto=leche;
                volverAPreguntar=false;
                break;
            case "GALLETITAS":
                producto=galletitas;
                volverAPreguntar=false;
                break;
            case "VERDURAS":
                producto=verduras;
                volverAPreguntar=false;
                break;
            case "CARNES":
                producto=carnes;
                volverAPreguntar=false;
                break;
            default:
                alert(`Ese producto no se encuentra en stock`);
                volverAPreguntar=true;
                break;
        }
    }while(volverAPreguntar)
}
const calucloTotal=()=>{
    cantidad=prompt(`cuanta ${selecProducto} quiere llevar?`);
    total=suma(total,(precio(producto,cantidad)));
}
const calculoEnvio=(a)=>{
    envio=confirm(`quiere que se lo enviemos?`);
    if(envio==true){
        envio=2000;
    }
    totalEnvio=suma(a,envio);
}
const valorDescuento=(a)=>{
    tieneDescuento=confirm(`tiene codigo de despuesto?`);
    if(tieneDescuento==true){
        codDescuento=prompt(`Ingrese Codigo de Descuento`);
        switch(codDescuento){
            case "N9TT-9G0A-B7FQ-RANC":
                descuento=20;
                break;
            case "QK6A-JI6S-7ETR-0A6C":
                descuento=30;
                break;
            case "SXFP-CHYK-ONI6-S89U":
                descuento=40;
                break;
            case "XNSS-HSJW-3NGU-8XTJ":
                descuento=50;
                break;
        }
        totalConDescuento=a-((a*descuento)/100);
        alert(`Descuento Aplicado`);
    }
    else
    totalConDescuento=totalEnvio;
}
const calculoCuotas=(a)=>{
    quiereCuotas=confirm(`Le gustaria pagar en cuotas?`);
    if(quiereCuotas==true){
        cuotas=parseInt(prompt(`En cuantas cuotas le gustaria pagar:
        3 
        6 
        12`));
        switch(cuotas){
            case 3:
                valorCuotas=a/cuotas;
                break;
            case 6:
                valorCuotas=a/cuotas;
                break;
            case 12:
                valorCuotas=a/cuotas;
                break;
        }
    }
}
const mostrarTotal=()=>{
    alert(`El total de su compra es: ${total}$,
        total con envio: ${totalEnvio}$,
        total con desuento: ${totalConDescuento}$
        valor de las cuotas: ${cuotas} cuotas de ${valorCuotas}$`);
        otraCompra=confirm(`quiere hacer otra compra?`);
}

do{
    do{
        elegirProducto();
        calucloTotal();
    volverAComprar=confirm(`quiere comprar algo mas? Su total ahora es de ${total}`);
    }while(volverAComprar)
    calculoEnvio(total);
    valorDescuento(totalEnvio);
    calculoCuotas(totalConDescuento);
    mostrarTotal();
}while(otraCompra)
