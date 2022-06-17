//Bucles
let productoInvalido;
let descuentoInvalido;
let agregarProducto;
let quiereDescuento;
let quiereCuotas;
//Ingreso de datos
let ingresarProducto;
let ingresarCantidad;
let ingresarPrecio;
let ingresarDescuento;
let ingresarCuotas;
//Productos
const azucar=141;
const arroz=173;
const harina=125;
const fideos=125;
const leche=117;
const aceite=370;
const queso=370;
const huevos=140;
//Contador
let x=0;
//Resultados
let valorCuotas=0;
let totalFinal=0;
//Funcion
class compra{
    constructor(producto, cantidad, precio,descuento,cuotas){
        this.producto=producto.toUpperCase();
        this.precioProducto=Number(precio);
        this.totalFinal=0;
        this.valorIva=0;
        this.valorDescuento=0;
        this.cantidad=Number(cantidad);
        this.descuento=Number(descuento);
        this.valorEnvio=0;
        this.cantiadCuotas=Number(cuotas);
        this.valorCuotas=0;
    }
    calcularTotalFinal(){
        this.totalFinal=this.cantidad*this.precioProducto;
        return this.totalFinal;
    }
    calcularIva(){
        this.valorIva=this.totalFinal*1.21;
        return this.valorIva;
    }
    calcularDescuento(){
        this.valorDescuento=this.valorIva-((this.valorIva/100)*this.descuento);
        return this.valorDescuento;
    }
    calcularCuotas(){
        this.valorCuotas=this.valorDescuento/this.cantiadCuotas;
        return this.valorCuotas;
    }
}
//Bloques de codigo
const pedirProducto=()=>{
    do{
        ingresarProducto=prompt(`Que producto le gustaria comprar:
        azúcar:${azucar}$
        arroz:${arroz}$
        harina:${harina}$
        fideos:${fideos}$
        leche:${leche}$
        aceite:${aceite}$
        queso rallado:${queso}$
        huevos:${huevos}$
        `).toUpperCase();
        switch(ingresarProducto){
            case "AZUCAR":
                ingresarPrecio=azucar;
                productoInvalido=false;
                break;
            case "ARROZ":
                ingresarPrecio=arroz;
                productoInvalido=false;
                break;
            case "HARINA":
                ingresarPrecio=harina;
                productoInvalido=false;
                break;
            case "FIDEOS":
                ingresarPrecio=fideos;
                productoInvalido=false;
                break;
            case "LECHE":
                ingresarPrecio=leche;
                productoInvalido=false;
                break;
            case "ACEITE":
                ingresarPrecio=aceite;
                productoInvalido=false;
                break;
            case "QUESO RALLADO":
                ingresarPrecio=queso;
                productoInvalido=false;
                break;
            case "HUEVOS":
                ingresarPrecio=huevos;
                productoInvalido=false;
                break;
            default:
                alert(`Producto Ingresado Invalido vuelva a elegir un producto?`);
                productoInvalido=true;
        }
    }while(productoInvalido==true)
}
const pedirCantidad=()=>{
    do{
        ingresarCantidad=prompt(`Cuanto ${ingresarProducto} quiere llevar?`);
    }while(isNaN(ingresarCantidad))
}
const pedirDescuento=()=>{
    quiereDescuento=confirm(`Quiere aplicar un descuento`);
    if(quiereDescuento==true){
        do{
            descuento=prompt(`Que descuento le gustaria aplicar:
            20%
            25%
            30%
            `);
            switch(descuento){
                case "20%":
                    ingresarDescuento=20;
                    descuentoInvalido=false;
                    break;
                case "25%":
                    ingresarDescuento=25;
                    descuentoInvalido=false;
                    break;
                case "30%":
                    ingresarDescuento=30;
                    descuentoInvalido=false;
                    break;
                default:
                    alert(`Descuento ingresado invalido vuelva a ingresar un valor valido`);
                    descuentoInvalido=true;
                    break;
            }
        }while(descuentoInvalido==true)
    }
    else if(quiereDescuento==false){
        ingresarDescuento=0;
    }
}
const pedirCuotas=()=>{
    quiereCuotas=confirm(`Quiere pagar en cuotas?`);
    if(quiereCuotas==true){
        for(x;x<1;x++){
            do{
                ingresarCuotas=prompt(`Ingrese el numero de cuotas que desea pagar`);
            }while((isNaN(ingresarCuotas))|| (ingresarCuotas==0))
        
    }
    }
    else if(quiereCuotas==false){
        ingresarCuotas=1;
    }
}
const calcularCompra=()=>{
    const compra1=new compra(ingresarProducto,ingresarCantidad,ingresarPrecio,ingresarDescuento,ingresarCuotas);
    compra1.calcularTotalFinal();
    compra1.calcularIva();
    compra1.calcularDescuento();
    compra1.calcularCuotas();
    totalFinal=totalFinal+compra1.valorDescuento;
    valorCuotas=valorCuotas+compra1.valorCuotas;
}
const mostrarTotal=()=>{
    if(quiereCuotas>1){
        alert(`El total de su compra es:${totalFinal}$
El valor de las cuotes es: ${ingresarCuotas} de ${valorCuotas}$`);
    }
    else if(quiereCuotas<=1){
        alert(`El total de su compra es:${totalFinal}$`);
    }
}
//Codigo
do{
    pedirProducto();
    pedirCantidad();
    pedirDescuento();
    pedirCuotas();
    calcularCompra();
    agregarProducto=confirm(`Quiere agregar otro producto?`);
}while(agregarProducto==true)
mostrarTotal();

