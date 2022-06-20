<?php

$recepient = "jakpanimag@gmail.com";
$sitename = "Передзвонити";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Ім'я: $name \nТелефон: $phone";
$pagetitle = "Нова заявка JakPani: \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
if (!empty($_POST)) {
	$domain_url = (isset($_SERVER['HTTPS']) ? "https" : "http") .      "://$_SERVER[HTTP_HOST]";
	header("Content-type: application/json");
	header("AMP-Access-Control-Allow-Source-Origin: " . $domain_url);
	header("Access-Control-Expose-Headers: AMP-Access-Control-Allow-Source-Origin");
	$myJSON = json_encode($_POST);
	echo $myJSON;
}
