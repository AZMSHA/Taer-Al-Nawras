<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $phoneNumber = $_POST["phoneNumber"];

    $to = "hashirworks2@gmail.com";
    $subject = "New Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message\nPhone Number: $phoneNumber";

    mail($to, $subject, $body);
}
?>