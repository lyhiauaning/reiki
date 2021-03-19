<?php
$now = new DateTime();
$year = $now->format("Y");
header("Location: ./".$year."/");
?>