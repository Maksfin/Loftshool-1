<?php
session_start();
require_once 'data.php';
$captcha = $_POST['g-recaptcha-response'];
$ip = $_SERVER['REMOTE_ADDR'];
$message = null;

if (!check_captcha($sekret_key, $captcha, $ip)){
    $_SESSION['message'] = "Вы не верно заполнили капчу";
    header("HTTP/1.1 302 Moved Temporarily");
    header("Location: contact.html");
  } else {
  	$_SESSION['message'] = "Вы успешно залогинены";
  	header("HTTP/1.1 302 Moved Temporarily");
    header("Location: contact.html");
  }

function check_captcha($key, $catpcha, $ip){

    $url_to_send = "https://www.google.com/recaptcha/api/siteverify?secret=".$key.'&response='.$catpcha.'&ip='.$ip;
    $data_request = file_get_contents($url_to_send);
    $data =  json_decode($data_request, true);

    if(isset($data['success']) && $data['success'] == 1){
        return true;
    } else {
        return false;
    }

}    
?>