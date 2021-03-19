<?php
include("config.php");
if($Control==false){
  include('./page/off.html');
  exit;
}
if($_GET && !$_POST){
  if(isset($_GET['page'])){
    if(file_exists("./page/".$_GET['page'].".php") == true){
      include("./page/".$_GET['page'].".php");
    } else if(file_exists("./page/".$_GET['page'].".html") == true){
      include("./page/".$_GET['page'].".html");
    } else {
      include("./404.html");
    }
  } else if(isset($_GET['down'])){//下载小文件
    $file = $_GET['down'];
    if(file_exists($file)){
      header("Content-type:application/octet-stream");
      $filename = basename($file);
      header("Content-Disposition:attachment;filename = ".$filename);
      header("Accept-ranges:bytes");
      header("Accept-length:".filesize($file));
      readfile($file);
    }else{
      echo "<script>alert('文件不存在')</script><title>404! Not found!</title>";
      include("404.html");
      exit;
    }
  } else if(isset($_GET['download'])){//下载大文件
    $filename = basename($_GET['download']);
    $filepath = $_GET['download'];
    if(!file_exists($filepath)){
      echo "<script>alert('文件不存在')</script><title>404! Not found!</title>";
      include("404.html");
      exit;
    }
    $fp=fopen($filepath,"r");
    $filesize=filesize($filepath);
    header("Content-type:application/octet-stream");
    header("Accept-Ranges:bytes");
    header("Accept-Length:".$filesize);
    header("Content-Disposition: attachment; filename=".$filename);
    $buffer=1024;
    $buffer_count=0;
    while(!feof($fp)&&$filesize-$buffer_count>0){
      $data=fread($fp,$buffer);
      $buffer_count+=$buffer;
      echo $data;
    }
    fclose($fp);
  } else if(isset($_GET['user']) && isset($_GET['passwd'])){
    echo "你的用户名是：".$_GET['user']."，你的密码是：".$_GET['passwd'];
  }
} else if($_POST && !$_GET){
  if(isset($_POST['file'])){//上传文件-接收文件
    
  }
} else if($_POST && $_GET){

} else if(!$_GET && !$_POST){
  include("index.html");
}
?>