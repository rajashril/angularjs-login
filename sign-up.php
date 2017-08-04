<?php
/*
Developer:  Rajashri Lawande
File:       sign-up.php
*/

//include database connection file
require_once 'db_config.php';

// verifying user from database using PDO
$stmt = $DBcon->prepare("INSERT INTO user(user_fname,user_lname,user_email,user_password) VALUES ('".$_POST['user_fname']."','".$_POST['user_lname']."','".$_POST['user_email']."','".$_POST['user_password']."')");
$stmt->execute();
$row = $stmt->rowCount();
if ($row > 0){
    echo "correct";
} else{
    echo 'wrong';
}
?>