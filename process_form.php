<?php
use PHPMailer\PHPMailer\{PHPMailer, SMTP, Exception};

require 'C:/wamp64/www/Lshop/PHPMailer/src/Exception.php';
require 'C:/wamp64/www/Lshop/PHPMailer/src/PHPMailer.php';
require 'C:/wamp64/www/Lshop/PHPMailer/src/SMTP.php';

$nombre = $_POST['nombre'];
$provincia = $_POST['provincia'];
$localidad = $_POST['localidad'];
$codigo_postal = $_POST['codigo_postal'];
$direccion = $_POST['direccion'];
$telefono = $_POST['telefono'];
$carritoJSON = $_POST['carrito'];
$carrito = json_decode($carritoJSON, true);

$mail = new PHPMailer(true);

try {
    // Configuración del servidor
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'noreplycrrazyshop@gmail.com';
    $mail->Password = 'tnybhlqchgvkcvyr';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Destinatario
    $mail->setFrom('nuevopedido@gmail.com', 'Nuevo Pedido');
    $mail->addAddress('Crrazyshop@gmail.com', 'Crrazyshop');

    // Contenido
    $mail->isHTML(true);
    $mail->Subject = 'Nuevo Pedido';

    $contenidoCarrito = "\nProductos en el carrito:\n";
    foreach ($carrito as $producto) {
        $contenidoCarrito .= "Nombre: " . $producto['nombre'] . ", ";
        $contenidoCarrito .= "Talla: " . $producto['talla'] . ", ";
        $contenidoCarrito .= "Cantidad: " . $producto['cantidad'] . ", ";
        $contenidoCarrito .= "Precio: " . $producto['precio'] . "\n";
    }

    $mail->Body = "Se ha recibido un nuevo pedido desde la tienda en línea.<br><br>
              Nombre Completo: $nombre<br>
              Provincia: $provincia<br>
              Localidad: $localidad<br>
              Código Postal: $codigo_postal<br>
              Dirección: $direccion<br>
              Número de Teléfono: $telefono<br>" . nl2br($contenidoCarrito);

    $mail->send();
    echo 'El pedido se ha enviado con éxito.';
} catch (Exception $e) {
    echo "El pedido no pudo ser enviado. Error: {$mail->ErrorInfo}";
}
?>