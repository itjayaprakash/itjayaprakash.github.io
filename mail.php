<?php
    session_start();
    $name=$_POST['name'];
    $email=$_POST['email'];
    $mobile=$_POST['phone'];
    $message=$_POST['message'];
    if($name!=="" && $email!=="" && $mobile!=="" && $message!=="")
    {
    
    $subject="Enquiry Info";
    $to= "jprakashrpm@gmail.com";
    /*
    $headers .= 'MIME-Version: 1.0'."\r\n"; 
    $headers .= 'Content-type: text/html; charset=iso-8859-1'."\r\n"; 
    $headers .= "From:".$name."<".$email.">"."\r\n";
    */
    $headers = 'From:info@vengatakrishnan.com' . "\r\n" ;
    $headers .='Reply-To: '. $to . "\r\n" ;
    $headers .='X-Mailer: PHP/' . phpversion();
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

    $message = '<HTML><BODY><TABLE width=650 align=center cellpadding=0 cellspacing=0 border=0>
                <TR><TD align=center height=30 align=right>Name : </TD><TD height=30>&nbsp;&nbsp;'.$name.'</TD></TR>			
                <TR><TD align=center height=30 align=right>Email : </TD><TD height=30>&nbsp;&nbsp;'.$email.'</TD></TR>
                <TR><TD align=center height=30 align=right>Phone : </TD><TD height=30>&nbsp;&nbsp;'.$mobile.'</TD></TR>					
                <TR><TD align=center height=30 align=right>Message : </TD><TD height=30>&nbsp;&nbsp;'.$message.'</TD></TR>	
                </table>
                </CENTER></BODY>
                </HTML>';
                
    echo "Mail successfully sent. You will be redirected shortly...";
    mail($to,$subject,$message,$headers);

    }
    
    else
    {
        echo "OOPS! We are sorry for the inconvenience. Please try again. You will be redirected shortly...";
        
        echo "<META HTTP-EQUIV='Refresh' CONTENT='3; URL=http://www.google.com'>";
    }
?>