<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $comments = $_POST['comments'];

    $to = "saleheen.shafiq100@gmail.com";
    $subject = "New Message from Contact Form";
    $body = "Name: $name\nEmail: $email\n\nComments:\n$comments";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
}
?>
