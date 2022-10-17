//DECLARO MI  OBJETO USUARIO
class usuario{
    constructor(nombre,apellido,email,edad,nombre_de_usuario,contrasenia){
        this.nombre=nombre;
        this.apellido=apellido;
        this.email=email;
        this.edad=edad;
        this.nombre_de_usuario=nombre_de_usuario;
        this.contrasenia=contrasenia;
    }
}
// DECLARO LISTA VACIA 
const  usuarios_registrados=[];
//                      AGREGO USUARIOS A MI LISTA DE USUARIOS REGISTRADOS
usuarios_registrados.push(new usuario("Homero","Simpsons","homero.simpsons@gmail.com",64,"homerothompson","andalaosa"));
usuarios_registrados.push(new usuario("Bart","Simpsons","bart.simpsons@gmail.com",11,"elbarto","yonofui"));
usuarios_registrados.push(new usuario("Lisa","Simpsons","lisa.simpsons@gmail.com",8,"elsistemaestamal","plandental"));
console.log(usuarios_registrados);
// DECLARO  VARIABLES VACIAS, QUE LUEGO TOMARAN LOS DATOS PARA EL LOGEO MEDIANTE UN PROMPT
let usuario_ingresado="";
let contrasenia_ingresada="";
//                                   DECLARO FUNCIONES

//ESTA FUNCION RETORNA UN VALOR BOOLEANO QUE ES TRUE SI LA CUENTA SE ENCUENTRA REGISTRADA
function esta_registrado(usuario,contrasenia){
    return  (verificar_usuario(usuarios_registrados,usuario_ingresado) ===  verificar_contrasenia(usuarios_registrados,contrasenia_ingresada))  &&
            ((verificar_usuario(usuarios_registrados,usuario_ingresado))!==-1 ) && (verificar_contrasenia(usuarios_registrados,contrasenia_ingresada)!==-1)
}
//ESTA FUNCION ME PERMITE VERIFICAR SI EL USUARIO INGRESADO ESTA REGISTRADO Y ME DEVUELVE EL INDICE DE SU OBJETO EN EL ARRAY
function verificar_usuario(lista,usuario){
    return lista.findIndex(objeto=>objeto.nombre_de_usuario==usuario)
}
//ESTA FUNCION ME PERMITE VERIFIAR SI LA CONTRASEÑA INGRESADA ESTA REGISTRADA Y ME DEVUELVE EL INDICE DE SU OBJETO EN EL ARRAY
function verificar_contrasenia(lista,contrasenia){
    return lista.findIndex(objeto=>objeto.contrasenia==contrasenia)
}
console.log(verificar_usuario(usuarios_registrados,"andalaosa"));
console.log(verificar_contrasenia(usuarios_registrados,"plandental"));
// SIMULO EL INGRESO DE UN USUARIO AUN NO IDENTIFICADO 
let ingresa_usuario=prompt("Para ingresar,debes registrar una cuenta."+"\n Si ya tienes una cuenta registrada,presiona 1"+"\n Para registrarte ingresa 2");
// SI EL USUARIO INGRESA LA OPCION 1 
if(ingresa_usuario==1){
    usuario_ingresado=prompt("Ingresa el nombre de usuario");
    contrasenia_ingresada=prompt("Ingresa tu contraseña de usuario");
    if(esta_registrado(usuario_ingresado,contrasenia_ingresada)){
        alert("Bienvenido");
    }
    
    else{
        while(!esta_registrado(usuario_ingresado,contrasenia_ingresada)){
            alert("Usuario o contraseña incorrectos,por favor vuelva a ingresar");
            usuario_ingresado=prompt("Ingresa el nombre de Usuario");
            contrasenia_ingresada=prompt("Ingresa tu contraseña de usuario");
            }
        alert("Bienvenido");
    }
}
//SI EL USUARIO INGRESA LA OPCION 2
else if(ingresa_usuario==2){
    alert("para registrar una cuenta deberas completar el formulario con los siguientes datos :");
    usuarios_registrados.push(new usuario (prompt("Nombre:"),prompt("Apellido:"),prompt("Email:"),prompt("edad"),prompt("Nombre de Usuario:"),prompt("Contraseña")));
    alert("Felicidades, tu cuenta ha sido registrada,ya puedes ingresar");
    usuario_ingresado=prompt("Ingresa el nombre de Usuario");
    contrasenia_ingresada=prompt("Ingresa tu contraseña de usuario");
    if(esta_registrado(usuario_ingresado,contrasenia_ingresada)){
        alert("Bienvenido");
    }
    
    else{
        while(!esta_registrado(usuario_ingresado,contrasenia_ingresada)){
            alert("Usuario o contraseña incorrectos,por favor vuelva a ingresar");
            usuario_ingresado=prompt("Ingresa el nombre de Usuario");
            contrasenia_ingresada=prompt("Ingresa tu contraseña de usuario");
            }
        alert("Bienvenido");
    }
}
// SI EL USUARIO INGRESA UN DATO DISTINO A LAS OPCIONES DADAS
else{
    // MIENTRAS EL USUARIO NO INGRESE UN DATO CORRESPONDIENTE A LAS OPCIONES DADAS EJECUTO ESTE BUCLE WHILE
    while((ingresa_usuario!=2)&& (ingresa_usuario!=1)){
        alert("Error! No has ingresado el dato correcto");
        ingresa_usuario=prompt("Para ingresar,debes registrar una cuenta."+"\n Si ya tienes una cuenta registrada,presiona 1"+"\n Para registrarte ingresa 2");
        if(ingresa_usuario==1){
            usuario_ingresado=prompt("Ingresa el nombre de usuario");
            contrasenia_ingresada=prompt("Ingresa tu contraseña de usuario");
                if(esta_registrado(usuario_ingresado,contrasenia_ingresada)){
                alert("Bienvenido");
                }
        }
        else if(ingresa_usuario==2){
            alert("para registrar una cuenta deberas completar el formulario con los siguientes datos :");
            usuarios_registrados.push(new usuario (prompt("Nombre:"),prompt("Apellido:"),prompt("Email:"),prompt("edad"),prompt("Nombre de Usuario:"),prompt("Contraseña")));
            alert("Felicidades, tu cuenta ha sido registrada,ya puedes ingresar");
            usuario_ingresado=prompt("Ingresa el nombre de Usuario");
            contrasenia_ingresada=prompt("Ingresa tu contraseña de usuario");
            if(esta_registrado(usuario_ingresado,contrasenia_ingresada)){
                alert("Bienvenido");
            }
            
            else{
                while(!esta_registrado(usuario_ingresado,contrasenia_ingresada)){
                    alert("Usuario o contraseña incorrectos,por favor vuelva a ingresar");
                    usuario_ingresado=prompt("Ingresa el nombre de Usuario");
                    contrasenia_ingresada=prompt("Ingresa tu contraseña de usuario");
                    }
                alert("Bienvenido");
            }
        }
    }       
}


console.log(verificar_usuario(usuarios_registrados,"andalaosa"));
console.log(verificar_contrasenia(usuarios_registrados,"plandental"));
