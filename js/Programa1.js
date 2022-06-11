let item
let x=1;
let y=1;
let k=1;
let opcion;
let opcion1;
let accion;
let selectItem;
let cantidad;
let cantidadPer;
while(x==1){
        opcion=prompt("1=agregar nuevo item");
    if(opcion==1){
        item=prompt("Nombre del item");
        alert("has agregado "+item);
        y=1;
        while(y==1){
            opcion1=prompt("1=selecionar item");
            if(opcion1==1){
                selectItem=prompt("1="+item);
                if(selectItem==1){
                    k=1;
                    cantidad=0;
                    cantidadPer=0;
                    while(k==1){
                        accion=prompt("tienes "+cantidad+" de"+item+" Opciones= 1# agregar uno 2#agregar cantidad personalizada 3#quitar uno 4#quitar cantidad personalizada 5# Salir atras 6#Borrar Item")
                        if(accion==1){
                            cantidad++;
                        }
                        if(accion==2){
                            cantidadPer=parseInt(prompt("ingrese la cantidad a agregar"));
                            cantidad=cantidad+cantidadPer;
                        }
                        if(accion==3){
                            cantidad--;
                        }
                        if(accion==4){
                            cantidadPer=parseInt(prompt("ingrese la cantidad a quitar"));
                            cantidad=cantidad-cantidadPer;
                        }
                        if(accion==5){
                            k=0;
                            x=0;
                            y=0;
                        }
                        if(accion==6){
                            k=0;
                            y=0;
                        }
                    }
                }
            }
        }
    }
}
