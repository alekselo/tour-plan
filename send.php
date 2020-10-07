<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$mailto = $_POST['email'];

$defaultmailto = 'a.a.loktev@yandex.ru';


// Формирование самого письма
$title = "Новое обращение Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br>
<>Сообщение:</><br>$message
<b>Почта:</b><br>$email
";

$titleSubscribe = "BEST-TOUR-PLAN";
$bodySubscribe = "<h1>Благодарим Вас за подписку!</h1>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'loktev.web@gmail.com'; // Логин на почте
    $mail->Password   = 'AlexLoktev1993'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('loktev.web@gmail.com', 'Алексей Локтев'); // Адрес самой почты и имя отправителя

    if(!empty($name) || !empty($phone) || !empty($message))
        $mailto = $defaultmailto;
    else{
        $title = $titleSubscribe;
        $body = $bodySubscribe;
    }

    // Получатель письма
    $mail->addAddress($mailto);  
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    

    // Проверяем отравленность сообщения
    if ($mail->send()) {
        $result = "success";
    } 
    else {
        $result = "error";
    }

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('location: thankyou.html');