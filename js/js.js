let i=1;
let x=0;
let rNombreUsuario="";
let rApellidoUsuario="";
if(x==0){
    alert('soy el priomer if');
    alert("soy el segundo if");
}
alert("Bienvenido para continuar Registrese");
while(x==0){
    alert("ingrese su nombre");
    rNombreUsuario= prompt("Ingrese Nombre");
    if(rNombreUsuario!=""){
        x=1;
    }
    else{
        x=0;
    }
    
}
while(x==1){
    alert("ingrese su apellido");
    rApellidoUsuario= prompt("ingrese Apellido");
    if(rApellidoUsuario !=""){
        x=0;
    }
    else{
        x=1;
    }
}
alert("Registro completado");
alert("Por favor Inicie Sesion");
while (x==0){
    let lNombreUsuario= prompt("Ingrese Nombre");
    let lApellidoUsuario= prompt("ingrese Apellido");
    if( rNombreUsuario == lNombreUsuario ){
        if( lApellidoUsuario== rApellidoUsuario ){
            alert("Has iniciado sesion");
            x=1;
            alert("Bienvenido "+lNombreUsuario+" "+lApellidoUsuario);
        }
        else{
            alert("Inicio de sesion fallido porfavor vuelva a intentar");
            x=0;
        }
    }
}

const ano=2022;
alert("ingrese ano de nacimiento");
let anoNacimeinto= prompt("ano de nacimiento");
let edad=ano-anoNacimeinto;
alert("tienes "+edad+" anos");
