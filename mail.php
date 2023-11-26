<?php
$destino="bryanguevara38@gmail.com";
$fullname= $_POST['fullName'];
$phonenumber= $_POST['phonenumber'];
$email= $_POST['email'];
$reason= $_POST['Reason_for_contact'];
$message= $_POST['message'];
$contenido= 'Name: ' . $fullname . '\nPhone_Numbre: ' . $phonenumber . '\nEmail: ' . $email . '\nReason for contact: ' . $reason . '\nMessage: ' . $message;
mail($destino, "Contacto", $contenido);
header("Location:index.html")
?>