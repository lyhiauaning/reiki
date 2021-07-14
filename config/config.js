/*配置*/
var website = true;//网站总开关
var skip = false;//跳转机制
var title = "曦灵";//网站名称
var skip2 = false;//跳转、加速机制2

/*机制*/
if(location.host != "xireiki.com" && skip == true && website == true){
  alert("警告，你在访问假的网站！");
  location.href="https://xireiki.com/";
} else if(location.host != "xireiki.com" && skip == true && website == false){
  location.href="/page/off.html";
}

if(isllq() == "QQ"){
  if(location != "https://xireiki.com/404.html" && location != "https://www.xireiki.com/404.html" && location != "https://elythy.gitee.io/404.html"){
    if(navigator.language == "en-US"){
      location.href = "https://xireiki.com/404.html";
    } else if(navigator.language == "zh-CN"){
      location.href = "https://elythy.gitee.io/404.html";
    }
  }
} else if(isllq() == "weixin"){
  if(location != "https://xireiki.com/404.html" && location != "https://www.xireiki.com/404.html" && location != "https://elythy.gitee.io/404.html"){
    if(navigator.language == "en-US"){
      location.href = "https://xireiki.com/404.html";
    } else if(navigator.language == "zh-CN"){
      location.href = "https://elythy.gitee.io/404.html";
    }
  }
} else {
  if(location.host == "xireiki.com" && skip2 == true && isllq() == false){
    if(navigator.language == "zh-CN"){
      location.href = "https://elythy.gitee.io/";
    } else if(navigator.language == "en-US"){
      location.href = "https://www.xireiki.com/";
    }
  } else if(location.host == "elythy.gitee.io" && skip2 == true && isllq() == false){
    if(navigator.language == "en-US"){
      location.href = "https://www.xireiki.com/";
    }
  } else if(location.host == "www.xireiki.com" && skip2 == true && isllq() == false){
    if(navigator.language == "zh-CN"){
      location.href = "https://elythy.gitee.io/";
    }
  } else if(location.host == "www.xireiki.com" && skip2 == true && isllq() != false){
    if(navigator.language == "zh-CN"){
      location.href = "https://elythy.gitee.io/";
    }
  }
}

if(website == false){
  location.href="/page/off.html";
}

/*
function OnBtnClick(type) {
  var content = {
    title: "公告" ,
    content: "1.没有公告"
  };
  zi_notify.showNotify(type, content);
}
window.onload = function(){
  OnBtnClick("");
}
*/
