
//MENU >>>> INICIAR.HTML
let usuario = prompt("Ingrese su Email");
let contraseña = prompt("Ingrese su Contraseña");
let usuariosAptos = "erikadipietro7@gmail.com";
let contraseñaAptas = 123456789;

    if (usuario  == usuariosAptos && contraseña == contraseñaAptas) {
        alert ("Bienvenido");
} else {
    alert(" Lo sentimos, el usuario y la contraseña no coinciden")
}


const registroNombre = () => {

    let nombreUsuario = prompt("Ingrese un nombre de usuario:");

    while (nombreUsuario == '' || nombreUsuario == null || nombreUsuario.length < 3) {

        nombreUsuario = prompt("Ingreso un valor incorrecto. Por favor, ingrese un nombre de usuario: ")
    }

    return nombreUsuario
}

const registroContrasenia = () => {

    let contraseniaUsuario = prompt("Ingrese una contraseña")

    while (contraseniaUsuario == '' || contraseniaUsuario == null) {
        contraseniaUsuario = prompt("Ingreso una contraseña incorrecta. Por favor, ingrese una contraseña:")
    }

    return contraseniaUsuario
}





function inicioDeSesion() {

    let nombreInicio = prompt("Bienvenido al Inicio de Sesion. Ingrese su Usuario");

    while (nombreInicio != nombreUsuario) {
        nombreInicio = prompt("El usuario que ingreso es incorrecto. Ingrese su nombre de usuario:")
    }

    let contraseniaInicio = prompt("Ingrese su contrasenia");

    while (contraseniaInicio != contraseniaUsuario) {

        contraseniaInicio = prompt("La contraseña que ingreso es incorrecta. Ingrese su nombre de contraseña:")

    }
}



// ORGANIZÁ TU VIAJE

/*
//MENU >>>> INICIAR.HTML
let usuario = prompt("Ingrese su Email");
let contraseña = prompt("Ingrese su Contraseña");
let usuariosAptos = "erikadipietro7@gmail.com";
let contraseñaAptas = 123456789;

    if (usuario  == usuariosAptos && contraseña == contraseñaAptas) {
        alert ("Bienvenido");
} else {
    alert(" Lo sentimos, el usuario y la contraseña no coinciden")
}
*/

//dias
let finde = 2;
let semana = 7;
let dosSemanas = 15;
let mes = 30;

//transporte
let micro = micro;
let tren = tren;
let avion = avion;

//salida
let buenosAires	= buenosAires;
let catamarca = catamarca;	
let chaco = chaco;	 
let chubut = chubut;
let cordoba	= cordoba;
let corrientes = corrientes;
let entreRios = entreRios;		
let jujuy = jujuy;	
let laPampa = laPampa;	
let laRioja = laRioja;	
let mendoza	= mendoza;
let misiones = misiones;
let neuquen	= neuquen;
let rioNegro = rioNegro;	
let salta = salta;	
let sanJuan = sanJuan;	
let sanLuis = sanLuis;	
let santaCruz = santaCruz;	
let santaFe	= santaFe;
let santiagoDelEstero = santiagoDelEstero;
let tierraDelFuego = tierraDelFuego;
let tucuman	= tucuman;


//destino
let buenosAires1	= buenosAires1;
let catamarca1 = catamarca1;	
let chaco1 = chaco1;	 
let chubut1 = chubut1;
let cordoba1	= cordoba1;
let corrientes1 = corrientes1;
let entreRios1 = entreRios1;		
let jujuy1 = jujuy1;	
let laPampa1 = laPampa1;	
let laRioja1 = laRioja1;	
let mendoza1	= mendoza1;
let misiones1 = misiones1;
let neuquen1	= neuquen1;
let rioNegro1 = rioNegro1;	
let salta1 = salta1;	
let sanJuan1 = sanJuan1;	
let sanLuis1 = sanLuis1;	
let santaCruz1 = santaCruz1;	
let santaFe1	= santaFe1;
let santiagoDelEstero1 = santiagoDelEstero1;
let tierraDelFuego1 = tierraDelFuego1;
let tucuman1 = tucuman1;


//COMBOS PASAJES
let combo1 = combo1;
let combo2 = combo2;
let combo3 = combo3;
let combo4 = combo4;
let combo5 = combo5;
let combo6 = combo6;
let combo7 = combo7;
let combo8 = combo8;
let combo9 = combo9;
let combo10 = combo10;

//

let usuario1 = usuario1;
let salida = salida;
let destino = destino;
let trasporte = trasporte;
let dias = dias;


// funciones
if ( dias <= 7 ) {
    alert (prompt("Ingrese su Salida"));
    alert (prompt("Ingrese su Destino"));
} else {
alert(" Lo sentimos, son muy pocos dias para esas grandes distancias")
}