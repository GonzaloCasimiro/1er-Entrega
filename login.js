//     CLASES
class Administrador{
    constructor(dni,nombre,apellido,edad,img,es_director,nro_contacto){
        this.dni=dni,
        this.nombre=nombre,
        this.apellido=apellido,
        this.es_director=es_director
        this.edad=edad,
        this.img=img,
        this.nro_contacto=nro_contacto
    }
}
class Usuario{
    constructor(dni,contraseña,email,es_profesor,es_administrador){
        this.dni=dni;
        this.contraseña=contraseña,
        this.email=email
        this.es_profesor=es_profesor
        this.es_director=es_administrador
    }
}
class Alumno {
    constructor(nombre,apellido,dni,img,edad,nota_historia,nota_matematicas,nota_fisica,nota_quimica){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.img=img;
        this.edad=edad,
        this.nota_fisica=nota_fisica;
        this.nota_matematicas=nota_matematicas;
        this.nota_quimica=nota_quimica;
        this.nota_historia=nota_historia;
    }
    get_notas(materia){
        if (materia=="historia"){
            console.log("Tu nota en Historia es de : "+this.nota_historia)
        }
        else if (materia=="matematicas"){
            console.log("Tu nota en Matematicas es de : "+ this.nota_matematicas);
        }
        else if (materia=="fisica"){
            console.log("Tu nota en Fisica es de : "+ this.nota_fisica);
        }
        else if (materia=="quimica"){
            console.log("Tu nota en qumica es de :"+ this.nota_qumica);
        }
        else{
            console.log("No tienes esa materia");
        }
    }
    set_notas(materia,nota){
        if (materia=="historia"){
            this.nota_historia= nota;
        }
        else if (materia=="matematicas"){
            this.nota_matematicas= nota;
        }
        else if (materia=="fisica"){
            this.nota_fisica=nota;
        }
        else if (materia=="quimica"){
            this.nota_qumica;
        }
        else{
            console.log("No tienes esa materia");
        }
    }
}

class Profesor{
    constructor(dni,nombre,apellido,img,asignatura,edad,nro_contacto){
        this.dni=dni,
        this.nombre=nombre,
        this.apellido=apellido,
        this.img=img,
        this.asignatura=asignatura,
        this.edad=edad;
        this.nro_contacto=nro_contacto
    }
    cambiar_notas(alumno,nota,materia){
        if (materia=="musica"){
            (Alumnos.find(Alumno=>Alumno.nombre==alumno)).nota_musica=nota;
        }
        else if (materia=="matematicas"){
            (Alumnos.find(Alumno=>Alumno.nombre==alumno)).nota_matematicas=nota;
        }
        else if (materia=="fisica"){
            (Alumnos.find(Alumno=>Alumno.nombre==alumno)).nota_fisica=nota;
        }
        else if (materia=="quimica"){
            (Alumnos.find(Alumno=>Alumno.nombre==alumno)).nota_quimica=nota;
        }
        else{
            console.log("No existe  esa materia");
        }
    }
}
//                          LISTAS Y PUSHEOS
//              ALUMNOS
let Alumnos=[];
let nuevo_alumno=new Alumno("Rafa","Gorgory",1,"./img/rafa.jpg",16,3,6,8,9);
Alumnos.push(nuevo_alumno);
nuevo_alumno=new Alumno("Bart","simpsons",2,"./img/bart.jpg",16,2,3,4,5);
Alumnos.push(nuevo_alumno);
nuevo_alumno=new Alumno("Nelson","Munts",3,"./img/nelson.jpg",16,4,4,4,4);
Alumnos.push(nuevo_alumno);
nuevo_alumno=new Alumno("Lisa","Simpsons",4,"./img/lisa.jpg",16,4,4,4,4);
Alumnos.push(nuevo_alumno);
nuevo_alumno=new Alumno("Erin","Summer",5,"./img/erin.jpg",17,4,4,4,4);
Alumnos.push(nuevo_alumno);
nuevo_alumno=new Alumno("Milhouse","Van Houten",6,"./img/milhouse.jpg",16,4,4,4,4);
Alumnos.push(nuevo_alumno);
nuevo_alumno=new Alumno("Maggie","Simpsons",7,"./img/magui.jpg",15,4,4,4,4);
Alumnos.push(nuevo_alumno);
nuevo_alumno=new Alumno("Homero","Simpsons",8,"./img/homero.jpg",16,4,4,4,4);
Alumnos.push(nuevo_alumno);


//              PROFESORES
let Profesores=[];
let nuevo_profesor=new Profesor(111,"Edna","Crabapell","./img/edna.jpg","Matematica",42,38766);
Profesores.push(nuevo_profesor);
nuevo_profesor=new Profesor(112,"Dewey","Largo","./img/deweylargo.jpg","Fisica",41,387512);
Profesores.push(nuevo_profesor);
nuevo_profesor=new Profesor(113,"Coach","Krupt","./img/krupt.jpg","Historia",38,012152);
Profesores.push(nuevo_profesor);
nuevo_profesor=new Profesor(114,"Elizabeth","Hoveer","./img/elizabeth.jpg","Qumica",41,023456);
Profesores.push(nuevo_profesor);
//            ADMINISTRADORES
let administradores=[];
let nuevo_administrador=new Administrador(15,"Seymour","Skinner",48,"./img/skinner.jpg",true,88855444);
administradores.push(nuevo_administrador);
nuevo_administrador=new Administrador(16,"Willi","ElConcerje",49,"./img/willie.jpg",false,99229292);
administradores.push(nuevo_administrador);
//              USUARIOS_REGISTRADOS
let usuarios_registrados=[];
//ALUMNOS REGISTRADOS

let nuevo_usuario=new Usuario(1,"elbarto","BartSimpsons@gmail.com",false,false);
    usuarios_registrados.push(nuevo_usuario);
    nuevo_usuario=new Usuario(2,"rafita","RafaGorgory@gmail.com",false,false);
//PROFESORES REGISTRADOS
    usuarios_registrados.push(nuevo_usuario);
    nuevo_usuario=new Usuario(111,"edna","crabapell@gmail.com",true,false);
    usuarios_registrados.push(nuevo_usuario);
    nuevo_usuario=new Usuario(112,"dewey","dewey_largo@gmail.com",true,false);
    usuarios_registrados.push(nuevo_usuario);
    nuevo_usuario=new Usuario(113,"coach","coach_krupt@gmail.com",true,false);
    usuarios_registrados.push(nuevo_usuario);
    nuevo_usuario=new Usuario(114,"eliza","elizabeth_hoveer@gmail.com",true,false);
    usuarios_registrados.push(nuevo_usuario);
    console.log(usuarios_registrados);
//ADMINISTRADORES REGISTRADOS
    nuevo_usuario=new Usuario(15,"skinner","skinner@gmail.com",false,true);
    usuarios_registrados.push(nuevo_usuario);
    nuevo_usuario=new Usuario(16,"jardinero","jardinero_willie@gmail.com",false,true);
    usuarios_registrados.push(nuevo_usuario);


// FUNCIONES
function esta_registrado(dni,contraseña,lista){
    return (lista.findIndex(objeto=>objeto.dni==dni) == lista.findIndex(objeto=>objeto.contraseña==contraseña)) && 
           ((lista.findIndex(objeto=>objeto.dni==dni) !== -1) &&( lista.findIndex(objeto=>objeto.contraseña==contraseña) !==-1))
}
function es_profesor(dni,lista){
return (lista.find(objeto=>objeto.dni==dni)).es_profesor
}
function es_administrador(dni,lista){
    return (lista.find(objeto=>objeto.dni==dni)).es_director
}
function identificar_usuario(dni,lista){
    return lista.find(objeto=>objeto.dni==dni);
}
// FUNCION QUE CREA LABEL CON INPUT RADIO
function label_radio(inner_html,input_value){
    let label_radio=document.createElement("LABEL");
    label_radio.classList.add("label__radio");
    label_radio.innerHTML=inner_html;
    let input_radio=document.createElement("INPUT");
    input_radio.classList.add("input__radio");
    input_radio.name="user";
    input_radio.type="radio";
    input_radio.setAttribute("id",input_value);
    input_radio.value=input_value;
    label_radio.appendChild(input_radio);
    formulario.appendChild(label_radio);
    
}

let usuario="";

let usuario_ingresado=document.getElementById("usuario");
let contraseña_ingresada=document.getElementById("contraseña");
let boton_entrar=document.getElementById("boton");
let registro=document.getElementById("registro");
let parrafo_login=document.getElementById("parrafo_login");
let body_login=document.getElementById("body");
let titulo=document.getElementById("titulo");
let div_contenedor=document.getElementById("contenedor");
let formulario=document.getElementById("formulario");
console.log(formulario);
console.log(Alumnos);
console.log(identificar_usuario(1,Alumnos));


// FUNCTION CREAR REGISTRO
function crear_registro(){
    formulario.removeChild(registro);
    formulario.removeChild(parrafo_login);
    formulario.removeChild(boton_entrar);

    let h2_lista=document.getElementsByTagName("h2");
    h2_lista[1].innerHTML="Formulario de Registro";
    h2_lista[1].style.fontSize="1.5em";
    let nuevo_label=document.createElement("LABEL");
    formulario.appendChild(nuevo_label);
    let nuevo_icono=document.createElement("I");
    nuevo_icono.classList.add("fa-regular","fa-envelope");
    nuevo_label.appendChild(nuevo_icono);
    let nuevo_input=document.createElement("INPUT");
    nuevo_input.type=("email");
    nuevo_input.placeholder=("Email");
    nuevo_input.setAttribute("id","email");
    nuevo_label.appendChild(nuevo_input);
    let parrafo_registro=document.createElement("p");
    parrafo_registro.innerHTML="¿Que tipo de usuario eres?";
    parrafo_registro.classList.add("botones");
    formulario.appendChild(parrafo_registro);

    label_radio("Administrador","administrador");
    label_radio("Profesor","profesor");
    label_radio("Alumno","alumno");

    let submit_registrarse=document.createElement("INPUT");
    submit_registrarse.setAttribute("id","enviar_registro");
    submit_registrarse.type="submit";
    submit_registrarse.value="Enviar registro"
    submit_registrarse.classList.add("botones");
    formulario.appendChild(submit_registrarse);
}
// ESTA FUNCION ME SIRVE PARA CHEQUEAR SI EL DNI EXISTE EN MI LISTA DE USUARIOS REGISTRADOS
function dni_check(dni){
    usuarios_registrados.findIndex(objeto=>objeto.dni==dni);
}
// ESTA FUNCION ME PERMITE SABER CUAL INPUT RADIO FUE SELECCIONADO
function verificar_input_radio(){
    if(document.getElementById("administrador").checked){
        return "administrador"
    }
    else if(document.getElementById("profesor").checked){
        return "profesor"
    }
    else if(document.getElementById("alumno").checked){
        return "alumno"
    }
}

// CLICK EN REGISTRARSE
registro.addEventListener("click",(e)=>{
    e.preventDefault();
    crear_registro(); // 
    let enviar_registro=document.getElementById("enviar_registro");
    let email_ingresado=document.getElementById("email");
    // CLICK EN ENVIAR REGISTRO
    enviar_registro.addEventListener("click",(e)=>{
        //GUARDO DATOS DEL REGISTRO
        e.preventDefault();
        const register_data={
            dni:usuario_ingresado.value,
            contraseña:contraseña_ingresada.value,
            email:email_ingresado.value,
            usuario:verificar_input_radio()
        }
        if(usuarios_registrados.findIndex(objeto=>objeto.dni==register_data.dni)!==-1){              // CHEQUEO QUE EL DNI NO SE ENCUENTRE YA REGISTRADO //  INTENTE HACER if(dni_check(register_data.dni)!==-1)
            console.log(dni_check(register_data.dni));      //                                                      CON LA FUNCION QUE HABIA CREADO,PERO ME DEVUELVE UNDEFINED 
            alert("Tu dni ya se encuentra registrado");
            console.log(dni_check(register_data.dni));
        }
        else{
            
            
            if(register_data.usuario=="alumno"){
                let dni_info=(Alumnos.findIndex(objeto=>objeto.dni==register_data.dni));
                if(dni_info==-1){
                    alert("Lo siento,al parecer no eres alumno de la institucion.Si esto es un error contactate con un administrador");
                }
                else{
                    alert("Tu cuenta de Alumno ha sido registrada,ya puedes ingresar");
                }
            }
            else if(register_data.usuario=="profesor"){
                let dni_info=(Profesores.findIndex(objeto=>objeto.dni==register_data.dni));
                if (dni_info==-1){
                    let nuevo_usuario=new Usuario(register_data.dni,register_data.contraseña,register_data.email,false,false);
                    usuarios_registrados.push(nuevo_usuario);
                    console.log(usuarios_registrados[5]);
                    let usuarios_registrados_json=JSON.stringify(usuarios_registrados);
                    localStorage.setItem("usuarios",usuarios_registrados_json);
                    alert("Lo siento,al parecer no eres Profesor de la institucion.Si esto es un error contactate con un administrador");
                }
                else{
                    let nuevo_usuario=new Usuario(register_data.dni,register_data.contraseña,register_data.email,true,false);
                    usuarios_registrados.push(nuevo_usuario);
                    console.log(usuarios_registrados[5]);
                    let usuarios_registrados_json=JSON.stringify(usuarios_registrados);
                    localStorage.setItem("usuarios",usuarios_registrados_json);
                    alert("Tu cuenta como Profesor ha sido registrada,ya puedes ingresar");
                }
            }
            else if(register_data.usuario=="administrador"){
                let dni_info=(administradores.findIndex(objeto=>objeto.dni==register_data.dni));
                if(dni_info==-1){
                    alert("Lo siento,al parecer no eres Administrador de la institucion.Si esto es un error contacta con otro administrador");
                }
                else{
                    let nuevo_usuario=new Usuario(register_data.dni,register_data.contraseña,register_data.email,false,true);
                    usuarios_registrados.push(nuevo_usuario);
                    console.log(usuarios_registrados[5]);
                    let usuarios_registrados_json=JSON.stringify(usuarios_registrados);
                    localStorage.setItem("usuarios",usuarios_registrados_json);
                    alert("Felicidades,tu cuenta como Administrador ha sido registrada");
                }
            }
        }
        
        //location.reload();
    })
}
)
//FUNCTION CREAR HEADER
function crear_header(nombre,apellido,ruta,edad,nro_contacto,dni){
    let header_login=document.createElement("HEADER");
    header_login.setAttribute("id","header_login");
    header_login.classList.add("header_login");
    
    //CREAR IMAGEN DE PERFIL
    let img=document.createElement("IMG");
    img.src=ruta;
    img.classList.add("header_img");
//CREO DIV DATOS
    let datos=document.createElement("DIV");
    datos.classList.add("datos");
    let datos_nombre=document.createElement("H2");
    datos_nombre.innerHTML=nombre+" "+apellido;
    datos_nombre.classList.add("datos_nombre");
//CREO UL Y LI
    let datos_lista=document.createElement("UL");
    let li_uno=document.createElement("LI");
    li_uno.classList.add("hedear_li");
    li_uno.innerHTML="DNI : "+dni;

    let li_dos=document.createElement("LI");
    li_dos.classList.add("hedear_li");
    li_dos.innerHTML="Numero de contacto: "+nro_contacto;

    let li_tres=document.createElement("LI");
    li_tres.classList.add("hedear_li");
    li_tres.innerHTML="Edad : "+edad;
    let li_cuatro=document.createElement("LI");
    li_cuatro.classList.add("hedear_li");
//CREO BOTON EDITAR DATOS
    let editar_datos=document.createElement("BUTTON");
    editar_datos.setAttribute("id","editar_datos")
    editar_datos.classList.add("button_alumno");
    editar_datos.innerHTML="Editar datos"

//PADRES E HIJOS
li_cuatro.appendChild(editar_datos);
datos_lista.appendChild(li_uno);
datos_lista.appendChild(li_dos);
datos_lista.appendChild(li_tres);
datos_lista.appendChild(li_cuatro);

datos.appendChild(datos_nombre);
datos.appendChild(datos_lista);

header_login.appendChild(img);
header_login.appendChild(datos);
body_login.appendChild(header_login);

}

//ANUNCIOS DEL DIRECTOR
function anuncios_director(){
    let caja_de_anuncios=document.createElement("DIV");
    caja_de_anuncios.classList.add("caja_de_anuncios");
    let h2_anuncios=document.createElement("H2");
    h2_anuncios.classList.add("h2_anuncios");
    h2_anuncios.innerHTML="ANUNCIOS DEL DIRECTOR";
    let caja_parrafo=document.createElement("DIV");
    caja_parrafo.classList.add("caja_p");
    let p_anuncios=document.createElement("p");
    p_anuncios.classList.add("p_anuncios");
    p_anuncios.innerHTML=anuncio_del_director;
    caja_parrafo.appendChild(p_anuncios);
    caja_de_anuncios.appendChild(h2_anuncios);
    caja_de_anuncios.appendChild(caja_parrafo);
    section_alumnos.appendChild(caja_de_anuncios);
}
// FUNCION ALUMNOS CARD
function card_alumnos(nombre,apellido,ruta){
    let card_alumno=document.createElement("DIV");
    card_alumno.classList.add("alumno");
    let h2_alumno=document.createElement("H2");
    h2_alumno.innerHTML=nombre+" "+apellido;
    h2_alumno.classList.add("alumno_h2");
    let img_alumno=document.createElement("img");
    img_alumno.src=(ruta);
    img_alumno.classList.add("alumno_img");
    let card_bot=document.createElement("DIV");
    card_bot.classList.add("card_bot");
    let button_alumno=document.createElement("BUTTON");
    button_alumno.classList.add("button_alumno");
    button_alumno.innerHTML="Mas info"
    caja_alumnos.appendChild(card_alumno);
    card_alumno.appendChild(h2_alumno);
    card_alumno.appendChild(img_alumno);
    card_alumno.appendChild(card_bot);
    card_bot.appendChild(button_alumno);
}
function buscar_objeto(lista,dni){
    lista.find(objeto=>objeto.dni=dni);
}

boton_entrar.addEventListener("click",(e)=>{
    e.preventDefault();
    const data={
        dni:usuario_ingresado.value,
        contraseña:contraseña_ingresada.value
    }
    let storage_check=JSON.parse(localStorage.getItem("usuarios"));   //CHEQUEO SI EXISTE MI ARRAY DE USUARIOS_REGISTRADOS EN EL LOCAL STORAGE
    if (storage_check !==null){                                        // SI EXISTE ACTUALIZO MI ARRAY DE USUARIOS_REGISTRADOS CON LOS DATOS NUEVOS DEL LOCAL STORAGE
        usuarios_registrados=storage_check;
    }
    if(esta_registrado(data.dni,data.contraseña,usuarios_registrados)){
        if(es_profesor(data.dni,usuarios_registrados)){                 //LOGIN USUARIO-PROFESOR
            usuario=identificar_usuario(data.dni,Profesores);
            body_login.removeChild(div_contenedor);
            body_login.classList.remove("body_login");
            body_login.classList.add("body_logeado");
            let user=Profesores.find(objeto=>objeto.dni==usuario.dni)
            crear_header(user.nombre,user.apellido,user.img,user.edad,user.nro_contacto,user.dni);
            let crear_section=document.createElement("SECTION");
            crear_section.classList.add("section_alumnos");
            crear_section.setAttribute("id","section_alumnos");
            body_login.appendChild(crear_section);
            section_alumnos=document.getElementById("section_alumnos");
            let lista_alumnos=document.createElement("H3");
            lista_alumnos.classList.add("h3_alumnos");
            lista_alumnos.innerHTML="Lista de Alumnos";
            section_alumnos.appendChild(lista_alumnos);
            let caja_alumnos=document.createElement("DIV");
            caja_alumnos.setAttribute("id","caja_alumnos");
            caja_alumnos.classList.add("caja_alumnos");
            section_alumnos.appendChild(caja_alumnos);
            console.log("Bienvenido/a Profesor : " +usuario.nombre+" "+usuario.apellido );
            
            Alumnos.forEach(element => {
                card_alumnos(element.nombre,element.apellido,element.img);
            });
        }
        else if(es_administrador(data.dni,usuarios_registrados)){       //LOGIN USUARIO ADMINISTRADOR
            usuario=identificar_usuario(data.dni,administradores)
            if(usuario.es_director){
                body_login.removeChild(div_contenedor);
                body_login.classList.remove("body_login");
                body_login.classList.add("body_logeado");
                let user=administradores.find(objetos=>objetos.dni==usuario.dni);
                crear_header(user.nombre,user.apellido,user.img,user.edad,user.nro_contacto,user.dni);
                let crear_section=document.createElement("SECTION");
                crear_section.classList.add("section_alumnos");
                crear_section.setAttribute("id","section_alumnos");
                body_login.appendChild(crear_section);
                section_alumnos=document.getElementById("section_alumnos");
                let lista_alumnos=document.createElement("H3");
                lista_alumnos.classList.add("h3_alumnos");
                lista_alumnos.innerHTML="Lista de Alumnos";
                section_alumnos.appendChild(lista_alumnos);
                let caja_alumnos=document.createElement("DIV");
                caja_alumnos.setAttribute("id","caja_alumnos");
                caja_alumnos.classList.add("caja_alumnos");
                section_alumnos.appendChild(caja_alumnos);
                console.log("Bienvenido/a Director/a : " +usuario.nombre+" "+usuario.apellido );
                Alumnos.forEach(element => {
                    card_alumnos(element.nombre,element.apellido,element.img);
                });
            }
            else{
                body_login.removeChild(div_contenedor);
                body_login.classList.remove("body_login");
                body_login.classList.add("body_logeado");
                let user=administradores.find(objetos=>objetos.dni==usuario.dni);
                crear_header(user.nombre,user.apellido,user.img,user.edad,user.nro_contacto,user.dni);
                let crear_section=document.createElement("SECTION");
                crear_section.classList.add("section_alumnos");
                crear_section.setAttribute("id","section_alumnos");
                body_login.appendChild(crear_section);
                section_alumnos=document.getElementById("section_alumnos");
                let lista_alumnos=document.createElement("H3");
                lista_alumnos.classList.add("h3_alumnos");
                lista_alumnos.innerHTML="Lista de Alumnos";
                section_alumnos.appendChild(lista_alumnos);
                let caja_alumnos=document.createElement("DIV");
                caja_alumnos.setAttribute("id","caja_alumnos");
                caja_alumnos.classList.add("caja_alumnos");
                section_alumnos.appendChild(caja_alumnos);
                console.log("Bienvenido/a Administrador/a : " +usuario.nombre+" "+usuario.apellido );
                Alumnos.forEach(element => {
                    card_alumnos(element.nombre,element.apellido,element.img);
                });
            }
        }   
        else{                                                   //LOGIN USUARIO-ALUMNO
            usuario=identificar_usuario(data.dni,Alumnos);
            console.log("Bienvenido/a Alumno/a : " +usuario.nombre+" "+usuario.apellido );
            body_login.removeChild(div_contenedor);
            crear_seccion_alumnos();
        }
    }
    else{                                           //USUARIO NO ESTA REGISTRADO
        parrafo_login.textContent="Usuario no registrado"
        parrafo_login.style.color="white";
        parrafo_login.style.backgroundColor="red";
        
    }
})



let anuncio_del_director="EL DIA 20 DEL CORRIENTE MES, SE CONOCERAN LAS FECHAS DEL TERCER EXAMEN TRIMESTRAL";//

function creando_card(){
    let card_tres=document.createElement("DIV");
    card_tres.classList.add("card");
    div_cards.appendChild(card_tres);
}
console.log(Profesores);
/*(Alumnos.find(Alumno=>Alumno.nombre=="rafa")).nota_musica=15;
console.log(rafa.nota_musica);*/


//FUNCIONES


/*
console.log(Profesores);
console.log(rafa.nota_musica);
rafa.get_notas("musica");
rafa.get_notas("matematicas");
rafa.get_notas("fisica");
*/






/*
function cambiar_nota(alumno,nota,materia){
    if (materia=="musica"){
        (Alumnos.find(Alumno=>Alumno.nombre==alumno)).nota_musica=nota;
    }
    else if (materia=="matematicas"){
        (Alumnos.find(Alumno=>Alumno.nombre==alumno)).nota_matematicas=nota;
    }
    else if (materia=="fisica"){
        (Alumnos.find(Alumno=>Alumno.nombre==alumno)).nota_fisica=nota;
    }
    else if (materia=="quimica"){
        (Alumnos.find(Alumno=>Alumno.nombre==alumno)).nota_quimica=nota;
    }
    else{
        console.log("No existe  esa materia");
    }
}*/

function crear_seccion_alumnos(){
    let section_contenedor=document.createElement("SECTION");
    section_contenedor.classList.add("section__contenedor");
            body_login.appendChild(section_contenedor);
            let alumno_h1=document.createElement("H1");
            alumno_h1.innerHTML="Bienvenido/a Alumno : "+usuario.nombre+" "+usuario.apellido;
            alumno_h1.classList.add("h1_bienvenida");
            section_contenedor.appendChild(alumno_h1);
            let div_cards=document.createElement("DIV");
            div_cards.classList.add("contenedor");
            section_contenedor.appendChild(div_cards);
            let card_uno=document.createElement('DIV');
            card_uno.classList.add("card");
            div_cards.appendChild(card_uno);
            let card_top=document.createElement("DIV");
            card_top.classList.add("card__top");
            card_uno.appendChild(card_top);
            let card_img=document.createElement("img");
            card_img.classList.add("card__img");
            card_img.src=("./img/notas.jpg");
            card_top.appendChild(card_img);
            let card_button=document.createElement("BUTTON");
            card_button.innerHTML="NOTAS"
            card_button.classList.add("card__boton");
            card_uno.appendChild(card_button);
            
            for (i=0;i<3;i++){
                card_uno.after(card_uno.cloneNode(true));
            }
            let imagenes=document.getElementsByTagName("img");
            imagenes[1].src=("./img/datos.jpg");
            imagenes[2].src=("./img/calendarios.jpg");
            imagenes[3].src=("/img/examenes.jpg");
            let botones=document.getElementsByTagName("button");
            botones[1].innerHTML="DATOS PERSONALES";
            botones[2].innerHTML="HORARIOS SEMANALES";
            botones[3].innerHTML="EXAMENES";
}