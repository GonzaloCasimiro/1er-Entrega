/// Registro una cuenta de usuario
alert("Para ingresar debes registrar una cuenta")
let nombre_de_usuario=prompt("Elige tu nombre de usuario");
let contraseña_de_usuario=prompt("Elige tu contraseña");
alert("Felicitaciones,tu cuenta ha sido creada,ya puedes acceder a tu cuenta");
// PIDO NOMBRE DE USUARIO Y CONTRASEÑA
let usuario =prompt("ingrese nombre de usuario");
let contraseña =prompt("ingrese contraseña");
// CREO FUNCION QUE VERIFIQUE LOS VALORES INGRESADOS Y DE ACCESO SEGUN LAS CONDICIONALES
function verificando_cuenta(usuario,contraseña){
    if(usuario==nombre_de_usuario&& contraseña==contraseña_de_usuario){
        return alert("Bienvenido "+usuario);
    }
    else{
        while(usuario!=nombre_de_usuario || contraseña!=contraseña_de_usuario){
            alert("usuario o contraseña incorrecta,por favor vuelva a ingresar");
            usuario=prompt("ingrese nombre de usuario");
            contraseña=prompt("ingrese contraseña");
        }
        return alert("bienvenido "+ usuario)
    }
}
verificando_cuenta(usuario,contraseña);
