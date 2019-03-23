<?php

if(isset($_POST['submit'])){
    $subject =$_POST['subject'];
    $mailFrom =$_POST['email'];
    $message =$_POST['message'];

    $mailTo="ilijan91@hotmail.com";
    $headers= "From: " . $mailFrom;
    $txt= "You have received an e-mail \n\n" . $message;

    mail($mailTo,$subject,$txt,$headers);
    header("Location: index.php?mailsend");
}