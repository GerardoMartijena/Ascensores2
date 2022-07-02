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
        cantidad:0,
        img:`../multimedia/images/7792540260138_02.webp`
    },
    {
        id:1,
        nombre:"arroz",
        precio:173,
        cantidad:0,
        img:`../multimedia/images/7702511000014.jpg`
    },
    {
        id:2,
        nombre:"harina",
        precio:125,
        cantidad:0,
        img:`../multimedia/images/3fa9702fd03f1ffbb831fffeba101fb5.1500.0.0.0.wmark.6a856457.jpg`
    },
    {
        id:3,
        nombre:"fideos",
        precio:125,
        cantidad:0,
        img:`../multimedia/images/20080120.webp`
    },
    {
        id:4,
        nombre:"leche",
        precio:117,
        cantidad:0,
        img:`../multimedia/images/leche-entera-Veronica-Lt-300x300.jpg`
    },
    {
        id:5,
        nombre:"aceite",
        precio:370,
        cantidad:0,
        img:`../multimedia/images/8822174941214.jpg`
    },
    {
        id:6,
        nombre:"queso",
        precio:370,
        cantidad:0,
        img:`../multimedia/images/20193458.webp`
    },
    {
        id:7,
        nombre:"huevos",
        precio:370,
        cantidad:0,
        img:`../multimedia/images/yumurta--15li-vira--mediumyumurta-4cb5.jpg`
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
    if(producto){
        let yaEnCarrito=carrito.find(producto=>producto.nombre===selecProducto);
        if(yaEnCarrito){
            yaEnCarrito.cantidad+=selecCantidad;
        }
        else{
            producto.cantidad=selecCantidad;
            carrito.push(producto);
        }
    }
    else{
        let agregarArticulo=confirm(`El producto no se encuntra en stock quiere agregarlo?`);
        if(agregarArticulo==true){
            let totalId=articulos.length;
            let id=totalId++;
            let precio=Number(prompt(`Ingrece el precio de ${selecProducto}`));
            let articuloNuevo=new productoAgregado(selecProducto,0,id,precio);
            articulos.push(articuloNuevo);
            producto=articulos.find(producto=>producto.nombre===selecProducto);
            producto.cantidad=selecCantidad;
            articuloNuevo.cantidad=selecCantidad;
            carrito.push(producto);
            /* carrito.push(new productoAgregado(selecProducto, selecCantidad,id,precio)); */
        }
    }
}
const calcularTotal=()=>{
    total=0;
    carrito.forEach(producto=>{
        total+=(producto.cantidad*producto.precio);
    })
    return Math.round(total);
}
const calcularCuotas=(cuotas)=>{
    totalCuotas=total/cuotas;
    totalCuotas=Math.round(totalCuotas);
    return totalCuotas;
}
const mostrarTotal=()=>{
    let mostrarCarritoHtml=document.getElementById("lista__cards")
    if(selecCuotas==1){
        let p=document.createElement("h1");
        p.innerText=`El total de su compra es: ${total}$`
        mostrarCarritoHtml.appendChild(p);
    }
    else{
        let p=document.createElement("h1");
        p.innerText=`El total de su compra es ${total}$ en ${selecCuotas} cuotas de ${totalCuotas}$`
        mostrarCarritoHtml.appendChild(p);
    }
}
const verCarrito=()=>{
    let listaCards=document.getElementById("lista__cards")
for (const producto of carrito) {
    let card=document.createElement("section");
    card.innerHTML=`
    <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">${producto.precio}$ ${producto.cantidad} Unidades</p>
    <a href="#" class="btn btn-primary">Agregar al Carrito</a>
    </div>
</div>
</div>
    `;
    listaCards.appendChild(card);
}
}
const pedirProducto=()=>{
    for (const articulo of articulos) {
        console.log(`
        ${articulo.nombre} : ${articulo.precio}`);
    }
    do{
        selecProducto=prompt(`
            Selecione el articulo de la consola (f12) que quiere comprar.

            Si el producto que busca no lo encuentra puede agregarlo 
            a nuestro stock e ingresarle un precio.

            Si abrio la consola y no ve nuestros productos ingrese
            cancelar y recarge la pagina

            Para dejar de comprar o recargar la pagina ingrese:
            "cancelar" o "dejar de comprar"
                `);
                if(selecProducto==null || selecProducto=="" || selecProducto==0){
                    alert(`No ingresaste ningun dato`);
                }
                else if((!isNaN(selecProducto))){
                    alert(`Ingresaste un numero`);
                }
    }while(!isNaN(selecProducto))
    
}
const pedirCantidad=()=>{
    do{
        selecCantidad=Number(prompt(`
            Ingrese la cantidad que quiere llevar:
        `));
        if(selecCantidad==0){
            alert(`No ingresaste ninguna cantidad, vuelve a intenrarlo`);
            selecCantidad=NaN;
        }
        else if(isNaN(selecCantidad)){
            alert(`No ingresaste un Numero`);
        }
    }while(isNaN(selecCantidad))
}
const pedirCuotas=()=>{
    do{
    selecCuotas=Number(prompt(`Ingrese la cantidad de cuotas que desea pagar`));
        if(selecCuotas==0){
            alert(`No ingresaste ninguna cantidad, vuelve a intenrarlo`);
            selecCuotas=NaN;
        }
        else if(isNaN(selecCuotas)){
            alert(`No ingresaste un Numero`);
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
        alert(`Total del carrito `+calcularTotal());
        volverAComprar=confirm(`Quiere Agregar otro Producto?`);
        if(volverAComprar==false){
            break;
        }
    }while(selecProducto!="cancelar" || selecProducto!="dejar de comprar" || volverAComprar==true);
    if(volverAComprar==false){
        pedirCuotas();
        calcularCuotas(selecCuotas);
        verCarrito();
        mostrarTotal();
    }
console.log(`gracias por visitar nuestra tienda`);