/*配置*/
var website = true;//网站总开关
var skip = false;//跳转机制
var title = "曦灵";//网站名称

/*机制*/
if(location.host != "gulanguage.cn" && skip == true && website == true){
  alert("警告，你在访问假的网站！");
  location.href="https://gulanguage.cn/";
} else if(location.host != "gulanguage.cn" && skip == true && website == false){
  location.href="/page/off.html";
}

if(website == false){
  location.href="/page/off.html";
}
