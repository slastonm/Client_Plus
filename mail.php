<?php
header("Content-Type: text/html; charset=utf-8"); //charset

$to = "example@gmail.com"; //несколько ящиков могут перечисляться через запятую
$from = "noreply@".($_SERVER["HTTP_HOST"]); //адрес, от которого придёт уведомление, можно не трогать


$title = "Заказ обратного звонка";

function gf($s){ // no shit
    $s = substr((htmlspecialchars($_GET[$s])), 0 , 500);
    if (strlen($s)>1) return $s;
}

$ip = $_SERVER['REMOTE_ADDR']; //что будем отправлять
$phone = gf("phone");
$name = gf("name");

$title = "CallMe - заказ обратного звонка";
$mess =  "<b>Телефон</b><br>".$phone."<br><br>
	<b>Имя</b><br>".$name."<br><br>";

@mail($to, $title, $mess);
?>
{
"to":"<?php echo $to?>",
"phone":"<?php echo $phone?>",
"name":"<?php echo $name?>"
}
