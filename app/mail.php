<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы

$recepient = "jakpanimag@gmail.com";
$sitename = "JakPani";
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Ім'я: $name \nТелефон: $phone";
$pagetitle = "Нова заявка з сайту \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1431710963:AAF2xNN0AOHmMWCzYq7nZTGMyw7wtGLCGfg";

//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-470689358";

//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
	'Ім`я: ' => $name,
	'Телефон: ' => $phone,
);

//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach ($arr as $key => $value) {
	$txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
	echo "Thank you";
} else {
	echo "Error";
}
