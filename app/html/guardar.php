<?php
// Código para guardar los datos del formulario
$servidor = "localhost";
$usuario = "root";
$clave = "";
$baseDeDatos = "ada4";

$conexion = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $nombres = $_POST["nombres"];
    $apellidos = $_POST["apellidos"];
    $numero = $_POST["tel"];
    $correo = $_POST["email"];
    $animales = $_POST["numeroAnimales"];

    $sql = "INSERT INTO usuario (nombres, apellidos, numero_tel, correo, num_animales) VALUES ('$nombres', '$apellidos', '$numero', '$correo', '$animales')";
}

if (mysqli_query($conexion, $sql)) {
        echo "<h2 style='color: green; text-align: center;'>¡Registro guardado con éxito desde el servidor local!</h2>";
        echo "<p style='text-align: center;'><a href='contacto.html'>Volver al formulario</a></p>";
    } else {
        echo "Error al guardar: " . mysqli_error($conexion);
    }

mysqli_close($conexion);

?>