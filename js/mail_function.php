<?php

$frm_name=$_POST['name'];

$frm_mail=$_POST['email'];

$frm_mobile=$_POST['mobile'];

$frm_subject=$_POST['subject'];

$frm_message=$_POST['message'];


$to = "jprakashrpm@gmail.com";

$subject = "$frm_subject";

$message = '<html><head>

<title>Jayaprakash Enquiry Form</title>

</head>

<body>

<div style="width:650px; margin:0 auto; padding:0px 10px 0px 10px; font-family:verdana; text-align: justify;" class="wrapper">

<div style="padding:2%; text-align:center;"> <p>you feedback from</p><span style="margin-right:5%;">Name:</span>'.$frm_name.'</div>

<div  style="padding:2%; text-align:center;"> <span style="margin-right:5%;">Mail:</span>'.$frm_mail.'</div>

<div  style="padding:2%; text-align:center;"> <span style="margin-right:5%;">Mail:</span>'.$frm_subject.'</div>

<div  style="padding:2%; text-align:center;"> <span style="margin-right:5%;">Mail:</span>'.$frm_mobile.'</div>

<div  style="padding:2%; text-align:center;"> <span style="margin-right:2%;">Message:</span>'.$frm_message.'</div>



</div>

</body>

</html>

';

// Always set content-type when sending HTML email

$headers = "MIME-Version: 1.0" . "\r\n";

$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";


// More headers

$headers .= 'From: '.$frm_mail.'';

mail($to,$subject,$message,$headers);

?>

