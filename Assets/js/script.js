//Mostrar formulario contacto al hacer click en el título
let tituloformularioContacto = document.getElementById("tituloFormC");
tituloformularioContacto.addEventListener("click", function () {
    document.getElementById("formContacto").style.display = "block";
})

//Mostrar formulario reservas al hacer click en el título
let tituloformularioReserva = document.getElementById("tituloFormR");
tituloformularioReserva.addEventListener("click", function () {
    document.getElementById("formReserva").style.display = "block";
})
//Formulario Contacto.
//Variables vacias.
let nombre1;
let correo1;
let telefono1;
let motivo;
let mensaje;
//1. Capturar formulario contacto
let formularioContacto = document.getElementById("formContacto");
//2. Asignarle el evento submit al formulario contacto y la función a gatillar cuando suceda el evento
//Función call back, se gatilla sólo cuando sucede el evento.
formularioContacto.addEventListener("submit", function (event) {
    //evita que al enviar el formulario la página se recarge y se borren los datos ingresados.
    event.preventDefault();
    //Crear variable para llamar a la función.
    var resultadoValidacion1 = validarFormContacto();
    if (resultadoValidacion1 == true) {
        //Alerta que se dispara al presionar el boton enviar.
        alert("Muchas gracias " + nombre1 + ", hemos recibido su " + motivo + " y enviaremos una pronta respuesta al correo " + correo1)
    }
});

//Función para validar el formulario contacto
function validarFormContacto() {
    //Capturar datos.
    nombre1 = document.getElementById("nombre1").value;
    correo1 = document.getElementById("correo1").value;
    telefono1 = document.getElementById("telefono1").value;
    motivo = document.getElementById("motivo").value;
    mensaje = document.getElementById("FormControlTextarea1").value;
    //Se crea la variable formContactoValido como boleano
    let formContactoValido = true;
    //Condición para validar que se ingresaron los datos
    if (nombre1 == "") {
        formContactoValido = false;
        alert("El campo 'Nombre' es obligatorio");
    }
    if (correo1 == "") {
        formContactoValido = false;
        alert("El campo 'Correo' es obligatorio");
    }
    if (telefono1 == "") {
        formContactoValido = false;
        alert("El campo 'Telefono' es obligatorio");
    }
    if (motivo == "") {
        formContactoValido = false;
        alert("El campo 'Motivo' es obligatorio");
    }
    if (mensaje == "") {
        formContactoValido = false;
        alert("El campo 'Mensaje' es obligatorio");
    }
    return formContactoValido;

}

//Formulario Reserva
$(document).ready(function () {
    //Capturar datos ingresados al formulario y mostrar un mensaje
    $("#formReserva").submit(function (event) {
        event.preventDefault();
        var nombre = $("#nombre2").val();
        var asistentes = $("#asistentes1").val();
        var correo = $("#correo2").val();
        alert("Estimad@: " + nombre + " agradecemos por reservar con nosotros. Hemos registrado " + asistentes + " asistentes. Se ha enviado el código de confirmación al correo " + correo + "\n Gracias por preferirnos.")
    })

    //Agrandar tarjetas y posicionarlas por sobre toda la página web.
    //Relleno la plantilla de modal que esta en html.
    $(".tarjetas").click(function () {
        //capturar datos de cada tarjeta, su imagen, titulo y texto.
        //parentNode: Llego al padre del elemento.
        var imgTarjetas = this.parentNode.querySelector(".imgTarjetas").src;
        var tituloTarjetas = this.parentNode.querySelector(".tituloTarjetas").innerHTML;
        var textoTarjetas = this.parentNode.querySelector(".pTarjetas").innerHTML;
        //Inyectar info de las tarjetas a la plantilla model
        $("#imgModal").attr("src", imgTarjetas);
        $("#tituloModal").text(tituloTarjetas);
        $("#pModal").text(textoTarjetas);
        //Mostrar el model
        $(".myModal1").show();
        //Cerrar la ventana al presionar la x
        $("#modal_close1").click(function () {
            $(".myModal1").hide();
        })
    })
    //Mostrar carrusel y posicionarlas por sobre toda la página web.
    //Evento click en la narra de navegación "Sobre Nosotros"
    $(".navSobreNosotros").click(function () {
        //Mostrar el model
        $(".myModal2").show();
        //Cerrar la ventana al presionar la x
        $("#modal_close2").click(function () {
            $(".myModal2").hide();
        })

    })
})