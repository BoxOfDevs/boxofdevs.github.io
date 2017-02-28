<?php 
if(isset($_POST['submit'])){
    $to = "BoxOfDevs@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "An email sent from our website";
    // $subject2 = "Copy of your form submission";
    $message = "To write a reply, email" . $from . "\n\n" . $name . " wrote the following:" . "\n\n" . $_POST['message'];
    // $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    // $headers = "From:" . $from;
    // $headers2 = "From:" . $to;
    mail($to,$subject,$message);
  //   mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>