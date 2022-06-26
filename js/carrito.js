//  variables / constantes
class productoAgregado{
    constructor(producto, cantidad, id, precio){
        this.id=Number(id),
        this.nombre=producto.toLowerCase();
        this.precio=Number(precio);
        this.cantidad=parseInt(cantidad)
    }
}
const articulos=[
    {
        id:0,
        nombre:"azucar",
        precio:141,
        cantidad:0
    },
    {
        id:1,
        nombre:"arroz",
        precio:173,
        cantidad:0
    },
    {
        id:2,
        nombre:"harina",
        precio:125,
        cantidad:0
    },
    {
        id:3,
        nombre:"fideos",
        precio:125,
        cantidad:0
    },
    {
        id:4,
        nombre:"leche",
        precio:117,
        cantidad:0
    },
    {
        id:5,
        nombre:"aceite",
        precio:370,
        cantidad:0
    },
    {
        id:6,
        nombre:"queso",
        precio:370,
        cantidad:0
    },
    {
        id:7,
        nombre:"huevos",
        precio:370,
        cantidad:0
    }
];
const carrito=[];
let selecProducto=null;
let selecCantidad=0;
let selecCuotas=0;
let total=0;
let totalCuotas=0;
let volverAComprar=true;
//Funciones
const agregarAlCarro=(selecProducto,selecCantidad)=>{
    let producto=articulos.find(producto=>producto.nombre===selecProducto);
    let yaEnCarrito=carrito.find(producto=>producto.nombre===selecProducto);
    if(producto){
        if(yaEnCarrito){
            yaEnCarrito.cantidad+=selecCantidad;
        }
        else{
            producto.cantidad=selecCantidad;
            carrito.push(producto);
        }
    }
    else{
        let agregarArticulo=confirm(`El prodcuto no se encuntra quiere agregarlo?`);
        if(agregarArticulo==true){
            let totalId=articulos.length;
            let id=totalId++;
            let precio=Number(prompt(`Ingrece el precio de ${selecProducto}`));
            let articuloNuevo=new productoAgregado(selecProducto,0,id,precio);
            articulos.push(articuloNuevo);
            articuloNuevo.cantidad=selecCantidad;
            carrito.push(articuloNuevo);
            /* carrito.push(new productoAgregado(selecProducto, selecCantidad,id,precio)); */
        }
    }
}
const calcularTotal=()=>{
    total=0;
    carrito.forEach(producto=>{
        total+=(producto.cantidad*producto.precio);
    })
    return total;
}
const calcularCuotas=(cuotas)=>{
    totalCuotas=total/cuotas;
}
const mostrarTotal=()=>{
    if(selecCuotas==1){
        alert(`
            El total de su es: ${total}$
        `);
    }
    else{
        alert(`El total de su compra es ${total}$ en ${selecCuotas} cuotas de ${totalCuotas}$`);
    }
}
const verCarrito=()=>{
    console.log(`Productos en el carrito`);
    for (const articulo of carrito) {
        console.log(`Producto:`);
        console.log(articulo.nombre);
        console.log(articulo.cantidad);
        console.log(articulo.precio+` c/u`);
    }
}
const pedirProducto=()=>{
    do{
        for (const articulo of articulos) {
            console.log(articulo.nombre);
            console.log(articulo.precio);
            console.log(articulo.cantidad);
        }
        selecProducto=prompt(`
                selecione el articulo que quiere comprar

                Para dejar de comprar ingrese:
                "cancelar" o "dejar de comprar"
                `);
                if(selecProducto==null || selecProducto=="" || selecProducto==0){
                    console.log(`No ingresaste ningun dato`);
                }
                else if((!isNaN(selecProducto))){
                    console.log(`Ingresaste un numero`);
                }
    }while(!isNaN(selecProducto))
    
}
const pedirCantidad=()=>{
    do{
        selecCantidad=Number(prompt(`
            Ingrese la cantidad que quiere llevar:
        `));
        if(selecCantidad==0){
            console.log(`No ingresaste ninguna cantidad, vuelve a intenrarlo`);
            selecCantidad=NaN;
        }
        else if(isNaN(selecCantidad)){
            console.log(`No ingresaste un Numero`);
        }
    }while(isNaN(selecCantidad))
}
const pedirCuotas=()=>{
    do{
    selecCuotas=Number(prompt(`Ingrese la cantidad de cuotas que desea pagar`));
        if(selecCuotas==0){
            console.log(`No ingresaste ninguna cantidad, vuelve a intenrarlo`);
            selecCuotas=NaN;
        }
        else if(isNaN(selecCuotas)){
            console.log(`No ingresaste un Numero`);
        }
    }while(isNaN(selecCuotas))
}
//Logica
    do{
        pedirProducto();
        selecProducto.toLowerCase();
        if(selecProducto=="cancelar" || selecProducto=="dejar de comprar"){
            break;
        }
        pedirCantidad();
        agregarAlCarro(selecProducto,selecCantidad);
        verCarrito();
        console.log(`Total del carrito `+calcularTotal());
        volverAComprar=confirm(`Quiere Agregar otro Producto?`);
        if(volverAComprar==false){
            break;
        }
    }while(selecProducto!="cancelar" || selecProducto!="dejar de comprar" || volverAComprar==true);
    if(volverAComprar==false){
        pedirCuotas();
        calcularCuotas(selecCuotas);
        mostrarTotal();
    }
console.log(`gracias por visitar nuestra tienda`);