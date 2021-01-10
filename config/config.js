/*配置*/
var website = true;//网站总开关
var skip = false;//跳转机制
var title = "曦灵";//网站名称
var skip2 = true;//跳转、加速机制2

/*机制*/
if(location.host != "gulanguage.cn" && skip == true && website == true){
  alert("警告，你在访问假的网站！");
  location.href="https://gulanguage.cn/";
} else if(location.host != "gulanguage.cn" && skip == true && website == false){
  location.href="/page/off.html";
}

if(location.host == "gulanguage.cn" && skip2 == true){
  if(navigator.language == "zh-CN"){
    location.href = "https://elythy.gitee.io/";
  } else if(navigator.language == "en-US"){
    location.href = "https://www.gulanguage.cn/";
  } else {
    location.href = "https://gulanguage.cn/"
  }
}

if(website == false){
  location.href="/page/off.html";
}
