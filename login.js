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
    constructor(nombre,apellido,dni,img,edad,nota_historia,nota_matematicas,nota_fisica,nota_quimica,nro_contacto){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.img=img;
        this.edad=edad,
        this.nota_fisica=nota_fisica;
        this.nota_matematicas=nota_matematicas;
        this.nota_quimica=nota_quimica;
        this.nota_historia=nota_historia;
        this.nro_contacto=nro_contacto
    }
    get_notas_matematica(examen){
        if (examen=="primer"){
            if(this.nota_matematicas.primer==undefined){
                return "1er examen : s/nota"
            }
            else{
            return"1er examen : "+this.nota_matematicas.primer
        }
        }
        else if (examen=="segundo"){
            if(this.nota_matematicas.segundo==undefined){
                return "2do examen :  s/nota"
            }
            else{
                return"2do examen : "+ this.nota_matematicas.segundo
            }
            
        }
        else if (examen="tercer"){
            if(this.nota_matematicas.tercer==undefined){
                return "3er examen : s/nota"
            }
            else{
                return "3er examen: "+ this.nota_matematicas.tercer
            }
            
        }
    }
    get_notas_fisica(examen){
        if (examen=="primer"){
            if(this.nota_fisica.primer==undefined){
                return "1er examen : s/nota"
            }
            else{
            return"1er examen : "+this.nota_fisica.primer
        }
        }
        else if (examen=="segundo"){
            if(this.nota_fisica.segundo==undefined){
                return "2do examen : s/nota"
            }
            else{
            return"2do examen : "+this.nota_fisica.segundo
        }
        }
        else if (examen=="tercer"){
            if(this.nota_fisica.tercer==undefined){
                return "3er examen : s/nota"
            }
            else{
            return"3er examen : "+this.nota_fisica.tercer
        }
        }
    }
    get_notas_quimica(examen){
        if (examen=="primer"){
            if(this.nota_quimica.primer==undefined){
                return "!er examen : s/nota"
            }
            else{
                return "1er examen : "+this.nota_quimica.primer
            }
            
        }
        else if (examen=="segundo"){
            if(this.nota_quimica.segundo==undefined){
                return "2do examen : s/nota"
            }
            else{
                return "2do examen : "+ this.nota_quimica.segundo
            }
            
        }
        else if (examen=="tercer"){
            if(this.nota_quimica.tercer==undefined){
                return "3er examen : s/nota"
            }
            else{
                return "3er examen: "+ this.nota_quimica.tercer;
            }
        }
    }
    get_notas_historia(examen){
        if (examen=="primer"){
            if(this.nota_historia.primer==undefined){
                return "1er examen : s/nota"
            }
            else{
                return "1er examen : "+this.nota_historia.primer
            }
            
        }
        else if (examen=="segundo"){
            if(this.nota_historia.segundo==undefined){
                return "2do examen : s/nota"
            }
            else{
                return "2do examen : "+ this.nota_historia.segundo
            }
            
        }
        else if (examen=="tercer"){
            if(this.nota_historia.tercer){
                return "3er examen : s/nota"
            }
            else{
                return "3er examen: "+ this.nota_historia.tercer
            }
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
class Materia{
    constructor( area,proximo_examen,temas,material_estudio){
        this.area=area,
        this.proximo_examen=proximo_examen,
        this.temas=temas,
        this.material_estudio=material_estudio
    }

}
//                          LISTAS Y PUSHEOS


let temas_examen={tema_uno:"Funciones",tema_dos:"Ecuaciones",tema_tres:"--"};
let material_estudio={libro_uno:"Libro : 'X' ",libro_dos:"Libro : x+2",libro_tres:"Libro: Inteligencia Math"};
let Materias=[];

//              MATERIAS
let nueva_materia=new Materia("matematica","22 Diciembre",temas_examen,material_estudio);
Materias.push(nueva_materia);

temas_examen={tema_uno:"Revolucion Francesa",tema_dos:"Rev industrial",tema_tres:"Guerra fria"};
material_estudio={libro_uno:"Historiadores ",libro_dos:"Historia de 4th",libro_tres:"Historia 3"};
nueva_materia=new Materia("historia","23 Diciembre",temas_examen,material_estudio);
Materias.push(nueva_materia);

temas_examen={tema_uno:"Fenomenos fisicos",tema_dos:"Fenomenos quimicos",tema_tres:"Ramas"};
material_estudio={libro_uno:" Quimica 1 ",libro_dos:"Quimica 2",libro_tres:"Quimica 3"};
nueva_materia=new Materia("quimica","20 Diciembre",temas_examen,material_estudio);
Materias.push(nueva_materia);

temas_examen={tema_uno:"optica",tema_dos:"acustica",tema_3:"potencia"};
material_estudio={libro_uno:" Fisica 1 ",libro_dos:"Fisica 2",libro_tres:"Fisica 3"};
nueva_materia=new Materia("fisica","18 Diciembre",temas_examen,material_estudio);
Materias.push(nueva_materia);


//              ALUMNOS
let Alumnos=[];
//NOTAS
let notas_matematica={primer:3,segundo:4,tercer:5};
let notas_fisica={primer:2,segundo:3,tercer:4};
let notas_historia={primer:1,segundo:2,tercer:3};
let notas_quimica={primer:4,segundo:5,tercer:6};
//CREO ALUMNO
let nuevo_alumno=new Alumno("Rafa","Gorgory",2,"./img/rafa.jpg",16,notas_historia,notas_matematica,notas_fisica,notas_quimica,4222324);
//AGREGO A LISTA
Alumnos.push(nuevo_alumno);
// SE REPITE EL PROCESO PARA AGREGAR ALUMNOS AL ARRAY

notas_matematica={primer:5,segundo:8,tercer:undefined};
notas_fisica={primer:6,segundo:7,tercer:undefined};
notas_historia={primer:5,segundo:6,tercer:undefined};
notas_quimica={primer:3,segundo:6,tercer:undefined};
nuevo_alumno=new Alumno("Bart","simpsons",1,"./img/bart.jpg",16,notas_historia,notas_matematica,notas_fisica,notas_quimica,4222244);
Alumnos.push(nuevo_alumno);

notas_matematica={primer:7,segundo:7,tercer:undefined};
notas_fisica={primer:7,segundo:7,tercer:undefined};
notas_historia={primer:7,segundo:7,tercer:undefined};
notas_quimica={primer:7,segundo:7,tercer:undefined};
nuevo_alumno=new Alumno("Nelson","Munts",3,"./img/nelson.jpg",16,notas_historia,notas_matematica,notas_fisica,notas_quimica,4996633);
Alumnos.push(nuevo_alumno);

notas_matematica={primer:10,segundo:10,tercer:undefined};
notas_fisica={primer:10,segundo:10,tercer:undefined};
notas_historia={primer:10,segundo:10,tercer:undefined};
notas_quimica={primer:10,segundo:10,tercer:undefined};
nuevo_alumno=new Alumno("Lisa","Simpsons",4,"./img/lisa.jpg",16,notas_historia,notas_matematica,notas_fisica,notas_quimica,4433221);
Alumnos.push(nuevo_alumno);

notas_matematica={primer:5,segundo:8,tercer:undefined};
notas_fisica={primer:6,segundo:7,tercer:undefined};
notas_historia={primer:5,segundo:6,tercer:undefined};
notas_quimica={primer:3,segundo:6,tercer:undefined};
nuevo_alumno=new Alumno("Erin","Summer",5,"./img/erin.jpg",17,notas_historia,notas_matematica,notas_fisica,notas_quimica,4212121);
Alumnos.push(nuevo_alumno);

notas_matematica={primer:5,segundo:5,tercer:undefined};
notas_fisica={primer:5,segundo:5,tercer:undefined};
notas_historia={primer:5,segundo:6,tercer:undefined};
notas_quimica={primer:5,segundo:6,tercer:undefined};
nuevo_alumno=new Alumno("Milhouse","Van Houten",6,"./img/milhouse.jpg",16,notas_historia,notas_matematica,notas_fisica,notas_quimica,4998877);
Alumnos.push(nuevo_alumno);

notas_matematica={primer:8,segundo:8,tercer:undefined};
notas_fisica={primer:8,segundo:8,tercer:undefined};
notas_historia={primer:8,segundo:8,tercer:undefined};
notas_quimica={primer:8,segundo:8,tercer:undefined};
nuevo_alumno=new Alumno("Maggie","Simpsons",7,"./img/magui.jpg",15,notas_historia,notas_matematica,notas_fisica,notas_quimica,4665544);
Alumnos.push(nuevo_alumno);

notas_matematica={primer:3,segundo:3,tercer:undefined};
notas_fisica={primer:3,segundo:3,tercer:undefined};
notas_historia={primer:3,segundo:3,tercer:undefined};
notas_quimica={primer:3,segundo:3,tercer:undefined};
nuevo_alumno=new Alumno("Homero","Simpsons",8,"./img/homero.jpg",16,notas_historia,notas_matematica,notas_fisica,notas_quimica,4332211);
Alumnos.push(nuevo_alumno);


//              PROFESORES
let Profesores=[];
let nuevo_profesor=new Profesor(111,"Edna","Crabapell","./img/edna.jpg","Matematica",42,38766);
Profesores.push(nuevo_profesor);
nuevo_profesor=new Profesor(112,"Dewey","Largo","./img/deweylargo.jpg","Fisica",41,387512);
Profesores.push(nuevo_profesor);
nuevo_profesor=new Profesor(113,"Coach","Krupt","./img/krupt.jpg","Historia",38,012152);
Profesores.push(nuevo_profesor);
nuevo_profesor=new Profesor(114,"Elizabeth","Hoveer","./img/elizabeth.jpg","Quimica",41,023456);
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
    //                                                                                                   CON LA FUNCION QUE HABIA CREADO,PERO ME DEVUELVE UNDEFINED 
            alert("Tu dni ya se encuentra registrado");
        }
        else{
            if(register_data.usuario=="alumno"){
                let dni_info=(Alumnos.findIndex(objeto=>objeto.dni==register_data.dni));
                if(dni_info==-1){
                    alert("Lo siento,al parecer no eres alumno de la institucion.Si esto es un error contactate con un administrador");
                }
                else{
                    let nuevo_usuario=new Usuario(register_data.dni,register_data.contraseña,register_data.email,false,false);
                    usuarios_registrados.push(nuevo_usuario);
                    let usuarios_registrados_json=JSON.stringify(usuarios_registrados);
                    localStorage.setItem("usuarios",usuarios_registrados_json);
                    alert("Tu cuenta de Alumno ha sido registrada,ya puedes ingresar");
                }
            }
            else if(register_data.usuario=="profesor"){
                let dni_info=(Profesores.findIndex(objeto=>objeto.dni==register_data.dni));
                if (dni_info==-1){
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
    header_login.classList.add(nombre);
    
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
// FUNCION EVENTO ALUMNOS, VER MAS
function evento(e){

        if(e.target.tagName=="BUTTON" && e.target.classList[1] !== undefined){
            let alumno=Alumnos.find(objeto=>objeto.nombre==e.target.classList[1]);
            console.log(alumno);
            let caja=document.getElementById(alumno.nombre);
            let user=Profesores.find(objeto=>objeto.nombre==((e.target.parentNode).parentNode.parentNode.parentNode.parentNode.children[2].classList[1]));
            caja.removeChild(caja.lastChild);
            caja.removeChild(caja.lastChild);
            let h3_dni=document.createElement("H3")
    h3_dni.classList.add("alumno_dni");
    h3_dni.innerHTML= "DNI : "+alumno.dni
    let h3_nro_contacto=document.createElement("H3");
    h3_nro_contacto.classList.add("alumno_nro_contacto");
    h3_nro_contacto.innerHTML= "Tell : "+alumno.nro_contacto;

    let notas_ul=document.createElement("UL");
    notas_ul.classList.add("alumno_lista");

    let uno_ul=document.createElement("LI");
    uno_ul.classList.add("alumno_ul");
    let dos_ul=document.createElement("LI");
    dos_ul.classList.add("alumno_ul");
    let tres_ul=document.createElement("LI");
    tres_ul.classList.add("alumno_ul");

    if (user.asignatura=="Matematica"){
        console.log(alumno);
        console.log(alumno.nota_matematicas);
        console.log(alumno.get_notas_matematica("primer"));
        uno_ul.innerHTML=alumno.get_notas_matematica("primer");
        dos_ul.innerHTML=alumno.get_notas_matematica("segundo");
        tres_ul.innerHTML=alumno.get_notas_matematica("tercer");
    }
    else if(user.asignatura=="Fisica"){
        uno_ul.innerHTML=alumno.get_notas_fisica("primer");
        dos_ul.innerHTML=alumno.get_notas_fisica("segundo");
        tres_ul.innerHTML=alumno.get_notas_fisica("tercer");
    }
    else if(user.asignatura=="Quimica"){
        uno_ul.innerHTML=alumno.get_notas_quimica("primer");
        dos_ul.innerHTML=alumno.get_notas_quimica("segundo");
        tres_ul.innerHTML=alumno.get_notas_quimica("tercer");
    }
    else{
        uno_ul.innerHTML=alumno.get_notas_historia("primer");
        dos_ul.innerHTML=alumno.get_notas_historia("segundo");
        tres_ul.innerHTML=alumno.get_notas_historia("tercer");
    }
    let asignar_notas=document.createElement("BUTTON");
    asignar_notas.classList.add(alumno.dni)
    asignar_notas.setAttribute("id","asignar_notas");
    asignar_notas.innerHTML="Asignar Notas";
    caja.appendChild(h3_dni);
    caja.appendChild(h3_nro_contacto);
    notas_ul.appendChild(uno_ul);
    notas_ul.appendChild(dos_ul);
    notas_ul.appendChild(tres_ul);
    caja.appendChild(notas_ul);
    caja.appendChild(asignar_notas);
        }
    }
// FUNCION EVENTO MODIFICAR NOTAS
function modifcar_notas(e){
    
    if(e.target.tagName=="BUTTON"&&e.target.id=="asignar_notas"){
        let alumno= Alumnos.find(alumno=>alumno.dni==e.target.classList[0]);
        let caja=document.getElementById(alumno.nombre);
        caja.removeChild(caja.lastChild);
        caja.removeChild(caja.lastChild);
        caja.removeChild(caja.lastChild);
        caja.removeChild(caja.lastChild);
        let h3_notas=document.createElement("H3");
        h3_notas.innerHTML="NOTAS";
        h3_notas.classList.add("h3_notas");
        let form_notas=document.createElement("FORM");
        form_notas.classList.add("form_notas");
        let label_nota_uno=document.createElement("LABEL");
        label_nota_uno.classList.add("label_notas");
        let label_nota_dos=document.createElement("LABEL");
        label_nota_dos.classList.add("label_notas");
        let label_nota_tres=document.createElement("LABEL");
        label_nota_tres.classList.add("label_notas");
        let icon_uno=document.createElement("I");
        icon_uno.classList.add("fa-solid");
        icon_uno.classList.add("fa-square-check");
        let icon_dos=document.createElement("I");
        icon_dos.classList.add("fa-solid");
        icon_dos.classList.add("fa-square-check");
        let icon_tres=document.createElement("I");
        icon_tres.classList.add("fa-solid");
        icon_tres.classList.add("fa-square-check");
        let input_uno=document.createElement("INPUT");
        input_uno.classList.add("input_notas");
        input_uno.type="number";
        input_uno.min="0";
        input_uno.max="10";
        let input_dos=document.createElement("INPUT");
        input_dos.classList.add("input_notas");
        input_dos.type="number";
        input_dos.min="0";
        input_dos.max="10";
        let input_tres=document.createElement("INPUT");
        input_tres.classList.add("input_notas");
        input_tres.type="number";
        input_tres.min="0";
        input_tres.max="10";
        let enviar_notas=document.createElement("INPUT");
        enviar_notas.type="submit"
        enviar_notas.setAttribute("id","enviar_notas");
        enviar_notas.innerHTML="Enviar";
        enviar_notas.classList.add("enviar_notas");
        let icon_segundo=document.createElement("I");
        icon_segundo.classList.add("fa-solid");
        icon_segundo.classList.add("fa-2");
        
        let icon_tercero=document.createElement("I");
        icon_tercero.classList.add("fa-solid");
        icon_tercero.classList.add("fa-3");
        let icon_primer=document.createElement("I");
        icon_primer.classList.add("fa-solid");
        icon_primer.classList.add("fa-1");
        
        label_nota_uno.appendChild(icon_primer);
        label_nota_uno.appendChild(input_uno);
        label_nota_uno.appendChild(icon_uno);
        label_nota_dos.appendChild(icon_segundo);
        label_nota_dos.appendChild(input_dos);
        label_nota_dos.appendChild(icon_dos);
        label_nota_tres.appendChild(icon_tercero);
        label_nota_tres.appendChild(input_tres);
        label_nota_tres.appendChild(icon_tres);
        

        form_notas.appendChild(h3_notas);
        form_notas.appendChild(label_nota_uno);
        form_notas.appendChild(label_nota_dos);
        form_notas.appendChild(label_nota_tres);
        form_notas.appendChild(enviar_notas);
        caja.appendChild(form_notas);
    }
}
//FUNCION EVENTO ENVIAR_NOTAS
function enviar_notas(e){
    if(e.target.tagName=="INPUT" && e.target.type=="submit"){
        e.preventDefault();
        let caja=e.target.parentNode.parentNode;
        let alumno=Alumnos.find(object=>object.nombre==caja.id);
        console.log(caja.children);
        let inputs=caja.getElementsByClassName("input_notas");
        console.log(inputs[0].value);
        console.log(inputs[1].value);
        console.log(inputs[2].value);
    //               =>   section =>  Body
        let user=body_login.getElementsByClassName("header_login")[0];
        
        let profesor=Profesores.find(object=>object.nombre==user.classList[1]);
        
        if (profesor.asignatura=="Matematica"){
            alumno.nota_matematicas.primer=inputs[0].value
            alumno.nota_matematicas.segundo=inputs[1].value
            alumno.nota_matematicas.tercer=inputs[2].value
            let alumnos_json=JSON.stringify(Alumnos);
            localStorage.setItem("alumnos",alumnos_json);
            console.log(alumno.nota_matematicas);
        }
        else if(profesor.asignatura=="Fisica"){
            alumno.nota_fisica.primer=inputs[0].value
            alumno.nota_fisica.segundo=inputs[1].value
            alumno.nota_fisica.tercer=inputs[2].value
        }
        else if(profesor.asignatura=="Quimica"){
            alumno.nota_quimica.primer=inputs[0].value
            alumno.nota_quimica.segundo=inputs[1].value
            alumno.nota_quimica.tercer=inputs[2].value
        }
        else{
            alumno.nota_historia.primer=inputs[0].value
            alumno.nota_historia.segundo=inputs[1].value
            alumno.nota_historia.tercer=inputs[2].value
        }
    }
}
// FUNCION ALUMNOS CARD
function card_alumnos(nombre,apellido,ruta){
    let card_alumno=document.createElement("DIV");
    card_alumno.classList.add("alumno");
    card_alumno.setAttribute("id",nombre)
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
    button_alumno.classList.add(nombre);
    caja_alumnos.appendChild(card_alumno);
    card_alumno.appendChild(h2_alumno);
    card_alumno.appendChild(img_alumno);
    card_alumno.appendChild(card_bot);
    card_bot.appendChild(button_alumno);
}
function buscar_objeto(lista,dni){
    lista.find(objeto=>objeto.dni=dni);
}
let storage_alumnos=JSON.parse(localStorage.getItem("alumnos"));
if(storage_alumnos!==null){
    Alumnos=storage_alumnos;
}
console.log(storage_alumnos);
console.log(Alumnos);

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
            let user=Profesores.find(objeto=>objeto.dni==usuario.dni);
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
                let boton_mas_info=document.getElementById(element.nombre);
                let modificar_notas=document.getElementById(element.nombre);
            });
            caja_alumnos.addEventListener("click",evento);
            caja_alumnos.addEventListener("click",modifcar_notas);
            caja_alumnos.addEventListener("click",enviar_notas);
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
            body_login.classList.remove("body_login");
            body_login.classList.add("body_logeado");
            let user=Alumnos.find(objeto=>objeto.dni==usuario.dni);
            crear_header(user.nombre,user.apellido,user.img,user.edad,user.nro_contacto,user.dni);
            crear_seccion_alumnos();
            let matematica=document.getElementById("matematica");
            matematica.addEventListener("click",(e)=>{
                // CAPTURO INFORMACION DEL PROFESOR DE MATEMATICA
                let profesor_matematica=Profesores.find(profesor=>profesor.asignatura=="Matematica");
                //CAPTURO INFORMACION DEL OBJETO MATERIA MATEMATICA
                let materia=Materias.find(materia=>materia.area=="matematica");
                //LIMPIO ETIQUETA BODY
                body_login.removeChild(body_login.lastChild);
                // ETIQUETAS HTML
                let section_asignatura=document.createElement("SECTION");
                section_asignatura.classList.add("section_asignatura");
                let h1_asignatura=document.createElement("H1");
                h1_asignatura.classList.add("h1_asignatura")
                h1_asignatura.innerHTML="MATEMATICAS";
                let primer_contenedor=document.createElement("DIV");
                primer_contenedor.classList.add("primer_contenedor");
                // LLAMO FUNCION CAJA DE H2
                caja_h2("Profesor","TUS NOTAS",primer_contenedor);

                // CREO FUNCION CAJA  => CREA MIS DIV DE INFORMACIONES
                function caja(ruta,info_uno,info_dos,info_tres,titulo){
                    let caja=document.createElement("DIV");
                    caja.classList.add("caja_contenedora");
                    let caja_img=document.createElement("IMG");
                    caja_img.src=ruta;
                    caja_img.classList.add("img");
                    let caja_info=document.createElement("DIV");
                    caja_info.classList.add("caja_info");
                    
                
                    let h3_info=document.createElement("H3");
                    h3_info.classList.add("h3_info");
                    h3_info.innerHTML=titulo
                    
                    let ul_info=document.createElement("UL");
                    ul_info.classList.add("ul_info");
                    
                    let li_uno=document.createElement("LI");
                    li_uno.classList.add("li_info");
                    li_uno.innerHTML=info_uno
                
                    let li_dos=document.createElement("LI");
                    li_dos.classList.add("li_info");
                    li_dos.innerHTML=info_dos
                
                    let li_tres=document.createElement("LI");
                    li_tres.classList.add("li_info");
                    li_tres.innerHTML=info_tres
                
                    ul_info.appendChild(li_uno);
                    ul_info.appendChild(li_dos);
                    ul_info.appendChild(li_tres);
                
                    caja_info.appendChild(h3_info);
                    caja_info.appendChild(ul_info);
                
                    caja.appendChild(caja_img);
                    caja.appendChild(caja_info);
                    if(cajas!==undefined){
                        cajas.appendChild(caja);
                    }
                    else{
                        cajas2.appendChild(caja);
                    }

                }
                //ETIQUETA HTML
                let  cajas=document.createElement("DIV");
                cajas.classList.add("cajas");
                //LLAMO FUNCION PARA CREA CAJA DE INFORMACION ===> DATOS DEL PROFESOR
                caja(profesor_matematica.img,"Dni :"+profesor_matematica.dni,"Edad: "+profesor_matematica.edad,"Contacto : "+profesor_matematica.nro_contacto,profesor_matematica.nombre+" "+profesor_matematica.apellido,);
                //LLAMO FUNCION PARA CREAR CAJA DE INFORMACION ==> NOTAS DE EXAMENES
                caja("./img/notas.jpg",user.get_notas_matematica("primer"),user.get_notas_matematica("segundo"),user.get_notas_matematica("tercer"),"Trimestres");
                //AGREGO CAJAS AL PRIMER CONTENEDOR
                primer_contenedor.appendChild(cajas);
                cajas=undefined; //CAMBIO EL VALOR A UNDEFINED PARA PODER USAR LA 2DA CONDICION DE MI FUNCION CAJA
                let segundo_contenedor=document.createElement("DIV");// CREO EL SEGUNDO CONTENEDOR
                segundo_contenedor.classList.add("primer_contenedor");
                let cajas2=document.createElement("DIV");
                cajas2.classList.add("cajas");
                // FUNCION CAJA DE H2 PARA EL SEGUNDO CONTENEDOR
                caja_h2("Proximo Examen","Material de Estudio",segundo_contenedor);
                // FUNCION CAJA PARA CREAR INFORMACION ===> PROXIMO EXAMEN
                caja("./img/calendarios.jpg",materia.temas.tema_uno,materia.temas.tema_dos,materia.temas.tema_tres,materia.proximo_examen);
                //FUNCION CAJA PARA CREAR INFORMACION ===> MATERIAL DE ESTUDIO
                caja("./img/libros.jpg",materia.material_estudio.libro_uno,materia.material_estudio.libro_dos,materia.material_estudio.libro_tres,"LIBROS");
                // ASIGNO PADRES E HIJOS
                segundo_contenedor.appendChild(cajas2)
                section_asignatura.appendChild(h1_asignatura);
                section_asignatura.appendChild(primer_contenedor);
                section_asignatura.appendChild(segundo_contenedor);
                body_login.appendChild(section_asignatura);
                
            })
            let fisica=document.getElementById("fisica");
            fisica.addEventListener("click",(e)=>{
                // CAPTURO INFORMACION DEL PROFESOR DE FISICA
                let profesor_fisica=Profesores.find(profesor=>profesor.asignatura=="Fisica");
                //CAPTURO INFORMACION DEL OBJETO MATERIA MATEMATICA
                let materia=Materias.find(materia=>materia.area=="fisica");
                //LIMPIO ETIQUETA BODY
                body_login.removeChild(body_login.lastChild);
                // ETIQUETAS HTML
                let section_asignatura=document.createElement("SECTION");
                section_asignatura.classList.add("section_asignatura");
                let h1_asignatura=document.createElement("H1");
                h1_asignatura.classList.add("h1_asignatura")
                h1_asignatura.innerHTML="FISICA";
                let primer_contenedor=document.createElement("DIV");
                primer_contenedor.classList.add("primer_contenedor");
                // LLAMO FUNCION CAJA DE H2
                caja_h2("Profesor","TUS NOTAS",primer_contenedor);

                // CREO FUNCION CAJA  => CREA MIS DIV DE INFORMACIONES
                function caja(ruta,info_uno,info_dos,info_tres,titulo){
                    let caja=document.createElement("DIV");
                    caja.classList.add("caja_contenedora");
                    let caja_img=document.createElement("IMG");
                    caja_img.src=ruta;
                    caja_img.classList.add("img");
                    let caja_info=document.createElement("DIV");
                    caja_info.classList.add("caja_info");
                    
                
                    let h3_info=document.createElement("H3");
                    h3_info.classList.add("h3_info");
                    h3_info.innerHTML=titulo
                    
                    let ul_info=document.createElement("UL");
                    ul_info.classList.add("ul_info");
                    
                    let li_uno=document.createElement("LI");
                    li_uno.classList.add("li_info");
                    li_uno.innerHTML=info_uno
                
                    let li_dos=document.createElement("LI");
                    li_dos.classList.add("li_info");
                    li_dos.innerHTML=info_dos
                
                    let li_tres=document.createElement("LI");
                    li_tres.classList.add("li_info");
                    li_tres.innerHTML=info_tres
                
                    ul_info.appendChild(li_uno);
                    ul_info.appendChild(li_dos);
                    ul_info.appendChild(li_tres);
                
                    caja_info.appendChild(h3_info);
                    caja_info.appendChild(ul_info);
                
                    caja.appendChild(caja_img);
                    caja.appendChild(caja_info);
                    if(cajas!==undefined){
                        cajas.appendChild(caja);
                    }
                    else{
                        cajas2.appendChild(caja);
                    }

                }
                //ETIQUETA HTML
                let  cajas=document.createElement("DIV");
                cajas.classList.add("cajas");
                //LLAMO FUNCION PARA CREA CAJA DE INFORMACION ===> DATOS DEL PROFESOR
                caja(profesor_fisica.img,"Dni :"+profesor_fisica.dni,"Edad: "+profesor_fisica.edad,"Contacto : "+profesor_fisica.nro_contacto,profesor_fisica.nombre+" "+profesor_fisica.apellido,);
                //LLAMO FUNCION PARA CREAR CAJA DE INFORMACION ==> NOTAS DE EXAMENES
                caja("./img/notas.jpg",user.get_notas_fisica("primer"),user.get_notas_fisica("segundo"),user.get_notas_fisica("tercer"),"Trimestres");
                //AGREGO CAJAS AL PRIMER CONTENEDOR
                primer_contenedor.appendChild(cajas);
                cajas=undefined; //CAMBIO EL VALOR A UNDEFINED PARA PODER USAR LA 2DA CONDICION DE MI FUNCION CAJA
                let segundo_contenedor=document.createElement("DIV");// CREO EL SEGUNDO CONTENEDOR
                segundo_contenedor.classList.add("primer_contenedor");
                let cajas2=document.createElement("DIV");
                cajas2.classList.add("cajas");
                // FUNCION CAJA DE H2 PARA EL SEGUNDO CONTENEDOR
                caja_h2("Proximo Examen","Material de Estudio",segundo_contenedor);
                // FUNCION CAJA PARA CREAR INFORMACION ===> PROXIMO EXAMEN
                caja("./img/calendarios.jpg",materia.temas.tema_uno,materia.temas.tema_dos,materia.temas.tema_tres,materia.proximo_examen);
                //FUNCION CAJA PARA CREAR INFORMACION ===> MATERIAL DE ESTUDIO
                caja("./img/libros.jpg",materia.material_estudio.libro_uno,materia.material_estudio.libro_dos,materia.material_estudio.libro_tres,"LIBROS");
                // ASIGNO PADRES E HIJOS
                segundo_contenedor.appendChild(cajas2)
                section_asignatura.appendChild(h1_asignatura);
                section_asignatura.appendChild(primer_contenedor);
                section_asignatura.appendChild(segundo_contenedor);
                body_login.appendChild(section_asignatura);
                
            })
            let quimica=document.getElementById("quimica");
            quimica.addEventListener("click",(e)=>{
                // CAPTURO INFORMACION DEL PROFESOR DE QUIMICA
                let profesor_quimica=Profesores.find(profesor=>profesor.asignatura=="Quimica");
                //CAPTURO INFORMACION DEL OBJETO MATERIA QUIMICA
                let materia=Materias.find(materia=>materia.area=="quimica");
                //LIMPIO ETIQUETA BODY
                body_login.removeChild(body_login.lastChild);
                // ETIQUETAS HTML
                let section_asignatura=document.createElement("SECTION");
                section_asignatura.classList.add("section_asignatura");
                let h1_asignatura=document.createElement("H1");
                h1_asignatura.classList.add("h1_asignatura")
                h1_asignatura.innerHTML="QUIMICA";
                let primer_contenedor=document.createElement("DIV");
                primer_contenedor.classList.add("primer_contenedor");
                // LLAMO FUNCION CAJA DE H2
                caja_h2("Profesor","TUS NOTAS",primer_contenedor);

                // CREO FUNCION CAJA  => CREA MIS DIV DE INFORMACIONES
                function caja(ruta,info_uno,info_dos,info_tres,titulo){
                    let caja=document.createElement("DIV");
                    caja.classList.add("caja_contenedora");
                    let caja_img=document.createElement("IMG");
                    caja_img.src=ruta;
                    caja_img.classList.add("img");
                    let caja_info=document.createElement("DIV");
                    caja_info.classList.add("caja_info");
                    
                
                    let h3_info=document.createElement("H3");
                    h3_info.classList.add("h3_info");
                    h3_info.innerHTML=titulo
                    
                    let ul_info=document.createElement("UL");
                    ul_info.classList.add("ul_info");
                    
                    let li_uno=document.createElement("LI");
                    li_uno.classList.add("li_info");
                    li_uno.innerHTML=info_uno
                
                    let li_dos=document.createElement("LI");
                    li_dos.classList.add("li_info");
                    li_dos.innerHTML=info_dos
                
                    let li_tres=document.createElement("LI");
                    li_tres.classList.add("li_info");
                    li_tres.innerHTML=info_tres
                
                    ul_info.appendChild(li_uno);
                    ul_info.appendChild(li_dos);
                    ul_info.appendChild(li_tres);
                
                    caja_info.appendChild(h3_info);
                    caja_info.appendChild(ul_info);
                
                    caja.appendChild(caja_img);
                    caja.appendChild(caja_info);
                    if(cajas!==undefined){
                        cajas.appendChild(caja);
                    }
                    else{
                        cajas2.appendChild(caja);
                    }

                }
                //ETIQUETA HTML
                let  cajas=document.createElement("DIV");
                cajas.classList.add("cajas");
                //LLAMO FUNCION PARA CREA CAJA DE INFORMACION ===> DATOS DEL PROFESOR
                caja(profesor_quimica.img,"Dni :"+profesor_quimica.dni,"Edad: "+profesor_quimica.edad,"Contacto : "+profesor_quimica.nro_contacto,profesor_quimica.nombre+" "+profesor_quimica.apellido,);
                //LLAMO FUNCION PARA CREAR CAJA DE INFORMACION ==> NOTAS DE EXAMENES
                caja("./img/notas.jpg",user.get_notas_quimica("primer"),user.get_notas_quimica("segundo"),user.get_notas_quimica("tercer"),"Trimestres");
                //AGREGO CAJAS AL PRIMER CONTENEDOR
                primer_contenedor.appendChild(cajas);
                cajas=undefined; //CAMBIO EL VALOR A UNDEFINED PARA PODER USAR LA 2DA CONDICION DE MI FUNCION CAJA
                let segundo_contenedor=document.createElement("DIV");// CREO EL SEGUNDO CONTENEDOR
                segundo_contenedor.classList.add("primer_contenedor");
                let cajas2=document.createElement("DIV");
                cajas2.classList.add("cajas");
                // FUNCION CAJA DE H2 PARA EL SEGUNDO CONTENEDOR
                caja_h2("Proximo Examen","Material de Estudio",segundo_contenedor);
                // FUNCION CAJA PARA CREAR INFORMACION ===> PROXIMO EXAMEN
                caja("./img/calendarios.jpg",materia.temas.tema_uno,materia.temas.tema_dos,materia.temas.tema_tres,materia.proximo_examen);
                //FUNCION CAJA PARA CREAR INFORMACION ===> MATERIAL DE ESTUDIO
                caja("./img/libros.jpg",materia.material_estudio.libro_uno,materia.material_estudio.libro_dos,materia.material_estudio.libro_tres,"LIBROS");
                // ASIGNO PADRES E HIJOS
                segundo_contenedor.appendChild(cajas2)
                section_asignatura.appendChild(h1_asignatura);
                section_asignatura.appendChild(primer_contenedor);
                section_asignatura.appendChild(segundo_contenedor);
                body_login.appendChild(section_asignatura);
                
            })
            let historia=document.getElementById("historia");
            historia.addEventListener("click",(e)=>{
                // CAPTURO INFORMACION DEL PROFESOR DE QUIMICA
                let profesor_historia=Profesores.find(profesor=>profesor.asignatura=="Historia");
                //CAPTURO INFORMACION DEL OBJETO MATERIA QUIMICA
                let materia=Materias.find(materia=>materia.area=="historia");
                //LIMPIO ETIQUETA BODY
                body_login.removeChild(body_login.lastChild);
                // ETIQUETAS HTML
                let section_asignatura=document.createElement("SECTION");
                section_asignatura.classList.add("section_asignatura");
                let h1_asignatura=document.createElement("H1");
                h1_asignatura.classList.add("h1_asignatura")
                h1_asignatura.innerHTML="HISTORIA";
                let primer_contenedor=document.createElement("DIV");
                primer_contenedor.classList.add("primer_contenedor");
                // LLAMO FUNCION CAJA DE H2
                caja_h2("Profesor","TUS NOTAS",primer_contenedor);

                // CREO FUNCION CAJA  => CREA MIS DIV DE INFORMACIONES
                function caja(ruta,info_uno,info_dos,info_tres,titulo){
                    let caja=document.createElement("DIV");
                    caja.classList.add("caja_contenedora");
                    let caja_img=document.createElement("IMG");
                    caja_img.src=ruta;
                    caja_img.classList.add("img");
                    let caja_info=document.createElement("DIV");
                    caja_info.classList.add("caja_info");
                    
                
                    let h3_info=document.createElement("H3");
                    h3_info.classList.add("h3_info");
                    h3_info.innerHTML=titulo
                    
                    let ul_info=document.createElement("UL");
                    ul_info.classList.add("ul_info");
                    
                    let li_uno=document.createElement("LI");
                    li_uno.classList.add("li_info");
                    li_uno.innerHTML=info_uno
                
                    let li_dos=document.createElement("LI");
                    li_dos.classList.add("li_info");
                    li_dos.innerHTML=info_dos
                
                    let li_tres=document.createElement("LI");
                    li_tres.classList.add("li_info");
                    li_tres.innerHTML=info_tres
                
                    ul_info.appendChild(li_uno);
                    ul_info.appendChild(li_dos);
                    ul_info.appendChild(li_tres);
                
                    caja_info.appendChild(h3_info);
                    caja_info.appendChild(ul_info);
                
                    caja.appendChild(caja_img);
                    caja.appendChild(caja_info);
                    if(cajas!==undefined){
                        cajas.appendChild(caja);
                    }
                    else{
                        cajas2.appendChild(caja);
                    }

                }
                //ETIQUETA HTML
                let  cajas=document.createElement("DIV");
                cajas.classList.add("cajas");
                //LLAMO FUNCION PARA CREA CAJA DE INFORMACION ===> DATOS DEL PROFESOR
                caja(profesor_historia.img,"Dni :"+profesor_historia.dni,"Edad: "+profesor_historia.edad,"Contacto : "+profesor_historia.nro_contacto,profesor_historia.nombre+" "+profesor_historia.apellido,);
                //LLAMO FUNCION PARA CREAR CAJA DE INFORMACION ==> NOTAS DE EXAMENES
                caja("./img/notas.jpg",user.get_notas_historia("primer"),user.get_notas_historia("segundo"),user.get_notas_historia("tercer"),"Trimestres");
                //AGREGO CAJAS AL PRIMER CONTENEDOR
                primer_contenedor.appendChild(cajas);
                cajas=undefined; //CAMBIO EL VALOR A UNDEFINED PARA PODER USAR LA 2DA CONDICION DE MI FUNCION CAJA
                let segundo_contenedor=document.createElement("DIV");// CREO EL SEGUNDO CONTENEDOR
                segundo_contenedor.classList.add("primer_contenedor");
                let cajas2=document.createElement("DIV");
                cajas2.classList.add("cajas");
                // FUNCION CAJA DE H2 PARA EL SEGUNDO CONTENEDOR
                caja_h2("Proximo Examen","Material de Estudio",segundo_contenedor);
                // FUNCION CAJA PARA CREAR INFORMACION ===> PROXIMO EXAMEN
                caja("./img/calendarios.jpg",materia.temas.tema_uno,materia.temas.tema_dos,materia.temas.tema_tres,materia.proximo_examen);
                //FUNCION CAJA PARA CREAR INFORMACION ===> MATERIAL DE ESTUDIO
                caja("./img/libros.jpg",materia.material_estudio.libro_uno,materia.material_estudio.libro_dos,materia.material_estudio.libro_tres,"LIBROS");
                // ASIGNO PADRES E HIJOS
                segundo_contenedor.appendChild(cajas2)
                section_asignatura.appendChild(h1_asignatura);
                section_asignatura.appendChild(primer_contenedor);
                section_asignatura.appendChild(segundo_contenedor);
                body_login.appendChild(section_asignatura);
                
            })
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


//FUNCION CAJA DE LA SECCION ALUMNOS/MATERIAS

function caja(ruta,info_uno,info_dos,info_tres,titulo){
    let caja=document.createElement("DIV");
    caja.classList.add("caja_contenedora");
    let caja_img=document.createElement("IMG");
    caja_img.src=ruta;
    caja_img.classList.add("img");
    let caja_info=document.createElement("DIV");
    caja_info.classList.add("caja_info");
    

    let h3_info=document.createElement("H3");
    h3_info.classList.add("h3_info");
    h3_info.innerHTML=titulo
    
    let ul_info=document.createElement("UL");
    ul_info.classList.add("ul_info");
    
    let li_uno=document.createElement("LI");
    li_uno.classList.add("li_info");
    li_uno.innerHTML=info_uno

    let li_dos=document.createElement("LI");
    li_dos.classList.add("li_info");
    li_dos.innerHTML=info_dos

    let li_tres=document.createElement("LI");
    li_tres.classList.add("li_info");
    li_tres.innerHTML=info_tres

    ul_info.appendChild(li_uno);
    ul_info.appendChild(li_dos);
    ul_info.appendChild(li_tres);

    caja_info.appendChild(h3_info);
    caja_info.appendChild(ul_info);

    caja.appendChild(caja_img);
    caja.appendChild(caja_info);
    
    cajas.appendChild(caja);
}
function caja_h2(primer_titulo,segundo_titulo,contenedor){
    let caja_h2=document.createElement("DIV");
    caja_h2.classList.add("caja_h2");
    let h2_izq=document.createElement("H2");
        h2_izq.classList.add("h2_");
        h2_izq.classList.add("h2_izq");
        h2_izq.innerHTML=primer_titulo;
    let h2_der=document.createElement("H2");
        h2_der.classList.add("h2_");
        h2_der.classList.add("h2_der");
        h2_der.innerHTML=segundo_titulo;
        caja_h2.appendChild(h2_izq);
        caja_h2.appendChild(h2_der);
        contenedor.appendChild(caja_h2);
}

function crear_seccion_alumnos(){
    let section_contenedor=document.createElement("SECTION");
    section_contenedor.classList.add("section__contenedor");
            body_login.appendChild(section_contenedor);
            let alumno_h1=document.createElement("H1");
            alumno_h1.innerHTML="TUS ASIGNATURAS"
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
            card_img.src=("./img/matematica.jpg");
            card_top.appendChild(card_img);
            let card_button=document.createElement("BUTTON");
            card_button.innerHTML="Matematica"
            card_button.classList.add("card__boton");
            card_uno.appendChild(card_button);
            
            for (i=0;i<3;i++){
                card_uno.after(card_uno.cloneNode(true));
            }
            let imagenes=document.getElementsByTagName("img");
            imagenes[1].src=("./img/fisica.jpg");
            imagenes[2].src=("./img/quimica.jpg");
            imagenes[3].src=("/img/historia.jpg");
            let botones=document.getElementsByTagName("button");
            botones[1].innerHTML="Fisica";
            botones[2].innerHTML="Quimica";
            botones[3].innerHTML="Historia";

            botones[4].setAttribute("id","matematica");
            botones[1].setAttribute("id","fisica");
            botones[2].setAttribute("id","quimica");
            botones[3].setAttribute("id","historia");
}