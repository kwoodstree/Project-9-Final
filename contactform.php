<?php
// get variables from contact page using the POST METHOD ($_POST global variable)
$name= $_POST['fullname'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$message= $_POST['message'];

//Mail function parameters
$recipient ='wkeith@live.com';

$subject = 'New Message from Contact Form';
$message_string = $name.'<br>'.$phone.'<br>'.$message;
// Always set content-type when sending HTML email
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// More headers
$headers .= 'From: $email' . "\r\n";

//Send mail function
mail($recipient, $subject,$message_string, $headers);

?>