<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $phoneNumber = $_POST["phoneNumber"];

    $headers = "From: quote@taeralnawras.com\r\n";

    $to = "alnawras.signdxb@gmail.com";
    $subject = "Quote Request from: $name";
    $body = "Name: $name\nEmail: $email\nPhone Number: $phoneNumber\nMessage: $message";

    try {
        // Send the email
        $success = mail($to, $subject, $body, $headers);

        if ($success) {
            echo 'Message has been sent';
        } else {
            throw new Exception('Error sending email');
        }
    } catch (Exception $e) {
        echo 'An error occurred: ' . $e->getMessage();
    }
}
?>