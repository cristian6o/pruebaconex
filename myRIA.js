//Presenta una alerta 
alert("Bienvenido a la página RIA");
//funcion que envia la solicitud al servidor
function CalcularSiPuedoBeberRIA()
{
    //obtiene el valor del campo de texto
    var edad = document.getElementById("txtEdad").value;
    /*especifica el campo o div que contendrá el resultado para
	presentarlo y load realiza el proceso de peticion y captura
	solo especificando la location del archivo php y pasando
	los parametros de la forma ?variable= valor */
    $("#canasta").load("http://192.168.1.4/ensayo/calcularbebida.php?edad=" + edad);
}