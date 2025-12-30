<?php 
	if(isset($_POST['name']) && $_POST['name']!="") {
		$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000); 
		$name_bl = '<div style="padding: 5px 0px 0px 0px; margin: 0px 0px 0px 0px; font-size: 14px; font-weight: 700;">Имя: <span style="font-style: italic; font-weight: 400;">'.$name.'</span></div>';
	} else {
		$name = '';
		$name_bl = '';
	}	
	if(isset($_POST['tel']) && $_POST['tel']!="") {
		$phone = substr(htmlspecialchars(trim($_POST['tel'])), 0, 1000); 
		$phone_bl = '<div style="padding: 5px 0px 0px 0px; margin: 0px 0px 0px 0px; font-size: 14px; font-weight: 700;">Телефон: <span style="font-style: italic; font-weight: 400;">'.$phone.'</span></div>';
	} else {
		$phone = '';
		$phone_bl = '';
	}
	$to  = '6678333@gmail.com';

	// Тема сообщения
	$subject = 'Заявка (Натяжные потолки)';
	
	// Сообщение в виде HTML-формате
		$message =  '
			<html>
			<head>
			<title>'.$subject.'</title>
			</head>
			<body>
			'.$name_bl.'
			'.$phone_bl.'
			</body>
			</html>
			';
				
    // Указываем правильный MIME-тип сообщения:
	$headers  =  'MIME-Version: 1.0' . "\r\n";
	$headers .=  'Content-type: text/html; charset=UTF-8'."\r\n";

	// Добавляем необходимые заголовки
	$headers .= 'To: <'.$to.'>, '."\r\n";
	$headers .= 'From: <6678333@gmail.com>' . "\r\n";
    mail($to, $subject,   $message, $headers);	
	echo 'Спасибо! Ваше письмо отправлено.'; 
	header("Location: ".$_SERVER['HTTP_REFERER']);
?>