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
let carrito=[];
let total=0;

const cardsCarrito=()=>{
    let articleCarrito=document.getElementById('cards__carrito');
    articleCarrito.innerHTML=``;
    articleCarrito.innerHTML=`
    <h5>Total: ${total}</h5>
    <button id="btnVaciarCarrito" class="btn btn-primary btnEliminar" type="submit">Vaciar Carrito</button>
    <button id="guardarCarrito" class="btn btn-primary btnEliminar" type="submit">Guardar Carrito</button>
    <button id="carritosGuardados" class="btn btn-primary btnEliminar" type="submit">Ver Carritos Guardados</button>`
    for (const producto of carrito) {
        let sectionCarrito=document.createElement("section");
        sectionCarrito.innerHTML=`
            <div class="card" style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">Producto:${producto.nombre}</h5>
        <p class="card-text">$${producto.precio}</p>
        <p class="card-text">Cantidada:${producto.cantidad}</p>
        <button id="${producto.id}" class="btn btn-primary btnEliminar" type="submit">X</button>
        <button id="btnRestar${producto.id}" class="btn btn-primary btnEliminar" type="submit">-</button>
    </div>
    </div>
        `;
        articleCarrito.appendChild(sectionCarrito);
        eliminarDelCarrito(producto.id);
        restarCantidad(producto.id);
        vaciarCarrito();
    }
    guardarCarrito();
    verCarritosGuardados();
}
const agregarAlCarro=(id)=>{
    let producto=articulos.find(articulos=>articulos.id===id);
    if(producto){
        let productoEnCarro=carrito.find(articulos=>articulos.id===id);
        if(productoEnCarro){
            productoEnCarro.cantidad++;
        }
        else{
            producto.cantidad=1;
            carrito.push(producto);
        }
    }
}
const leerBoton=(botonAgregarId)=>{
    let botonAgregar=document.getElementById(`${botonAgregarId}`);
        botonAgregar.addEventListener('click',()=>{
            agregarAlCarro(botonAgregarId);
            calcularTotal();
            cardsCarrito();
            console.log(carrito);
        })
        
    }
const mostrarProductos=(arrayDeProdcutos)=>{
    let listaCards=document.getElementById("lista__cards");
    listaCards.innerHTML='<h2>Productos</h2>';
    for (const producto of arrayDeProdcutos) {
        let card=document.createElement("section");
        card.innerHTML=`
        <div class="card" style="width: 18rem;">
        <img src="${producto.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}$</p>
        <button id="${producto.id}" class="btn btn-primary agregar">Agregar al Carrito</button>
        </div>
        </div>
        </div>
        `;
        listaCards.appendChild(card);
        leerBoton(producto.id);
    }
    
    eliminarDelCarrito();
}
const calcularTotal=()=>{
    total=0;
    carrito.forEach(producto=>{
        total+=(producto.cantidad*producto.precio);
    })
    return Math.round(total);
}
const eliminarDelCarrito=(btnEliminarId)=>{
    const btnEliminar=document.getElementById(`${btnEliminarId}`)
        btnEliminar.addEventListener("click",() =>{
        const item=carrito.find((producto)=>producto.id===btnEliminarId);
        const indice=carrito.indexOf(item)
        carrito.splice(indice,1);
        calcularTotal();
        cardsCarrito();
        console.log(carrito);
    });
};
const restarCantidad=(btnRestarId) =>{
    const btnRestar=document.getElementById(`btnRestar${btnRestarId}`);
        btnRestar.addEventListener('click', () => {
            const item = carrito.find((productoCarrito) => productoCarrito.id === btnRestarId);
            if(item.cantidad>1){
                item.cantidad--;
                calcularTotal();
                cardsCarrito();
            }
            else{
                const indice=carrito.indexOf(item)
                carrito.splice(indice,1);
                calcularTotal();
                cardsCarrito();
            }
        });
};
const vaciarCarrito=()=>{
    const btnVaciarCarrito=document.getElementById("btnVaciarCarrito");
    btnVaciarCarrito.addEventListener("click",()=>{
        carrito.length=0;
        calcularTotal();
        cardsCarrito();
    });
};
const guardarCarrito=()=>{
    let numCarrito=localStorage.length+1;
    const botonGuardar=document.getElementById(`guardarCarrito`);
    botonGuardar.addEventListener("click",()=>{
        localStorage.setItem(`carrito${numCarrito}`,JSON.stringify(carrito));
    });
};
const verCarritosGuardados=()=>{
    const btnCarritosGuardados=document.getElementById(`carritosGuardados`);
    btnCarritosGuardados.addEventListener("click",()=>{
        let articleCarrito=document.getElementById('cards__carrito');
        articleCarrito.innerHTML=``;
        for(let i=1;i<=localStorage.length;i++){
            let tituloSection=document.createElement('div');
            tituloSection.innerHTML=`
            <p>Carrito numero ${i}</p>
            `
            articleCarrito.appendChild(tituloSection);
            let carritoLStorage=JSON.parse(localStorage.getItem(`carrito${i}`));
            console.log(carritoLStorage);
            for (const producto of carritoLStorage){
                let sectionCarrito=document.createElement("div");
                sectionCarrito.innerHTML=`
                <p>${producto.nombre}</p>
                `;
                articleCarrito.appendChild(sectionCarrito);
            };
        };
    });
}
mostrarProductos(articulos);