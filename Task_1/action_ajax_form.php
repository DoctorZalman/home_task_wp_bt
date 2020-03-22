<?php

if (isset($_GET['name']) && isset($_GET['year']) ) {

 $name = $_GET['name'];
 $age = $_GET['year'];


 if ( $age >= 21) {
  $check =  'Привіт, '.$name.', доступ відкритий';
 }else{
  $check =  'Вибач,'.$name.', Тобі нема ще й 21';
 }

 echo json_encode($check, JSON_UNESCAPED_UNICODE);;
}
?>

