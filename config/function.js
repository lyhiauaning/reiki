function Substitution(id,url,text,type){
	x=document.getElementById(id);  // 找到元素
	if(type == "a"){
	    x.innerHTML='<a href="' + url + '">' + text + '</a>';    // 改变内容
	} else {
	    x.innterHTML="<p>没有这个类型</p>"
	}
}
function menu(){
  var menu=`
    <li class="active"><a href="/"><discoloration>本站主页</discoloration></a></li>
    <li class="active"><a href="/page/video.html"><discoloration>B站视频</discoloration></a></li>
    <li class="active"><a href="/page/code.html"><discoloration>代码页面</discoloration></a></li>
    <li class="active"><a href="/page/a-z.html"><discoloration>A-Z站</discoloration></a></li>
  `;
    document.write(menu);
}
function video(){
  /*
    哔哩哔哩html引入视频api：
      API：http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=<视频BV号>
      参数:
        danmaku=0  (1=打开弹幕 0=关闭弹幕)
        high_quality=1  (1=最高画质 0=最低画质)
    小米内容中心播放视频api：
      API：https://content.mcc.miui.com/bilibiliVideo?resource=https%3A%2F%2Fplayer.bilibili.com%2Fplayer.html%3Fbvid%3D<视频BV号>%26autoplay%3D1%26bsource%3Dxiaomi_cooperate&bizDocId=bilibili_<视频BV号>
      实例：https://content.mcc.miui.com/bilibiliVideo?resource=https%3A%2F%2Fplayer.bilibili.com%2Fplayer.html%3Fbvid%3DBV1Yh411Z78b%26autoplay%3D1%26bsource%3Dxiaomi_cooperate&bizDocId=bilibili_BV1Yh411Z78b
  */
  if(ispc() == false){
    var style=`
      <style>
        .iv{
          width: 100%;
          height: 56vw;
        }
      </style>
    `;
  } else if(ispc() == true){
    var style=`
      <style>
        .iv{
          width: 64vw;
          height: 36vw;
          margin-left: 3vw;
        }
      </style>
    `;
  }
  var head = document.getElementsByTagName('head')[0];
  head.innerHTML += style;
  var bvid = [
    "BV1KZ4y157xQ",
    "BV11K4y1Z7wP",
    "BV1TZ4y157m2",
    "BV1B54y1z7Qq",
    "BV1op4y1k79P",
    "BV1Nv411r7yU",
    "BV1ua4y1n785"
  ];
  var number = 0;
  document.write('<div style="height:55px;width:100%;"></div>');
  while (bvid[number]) {
    var video = "<iframe src=\"http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid="+bvid[number]+"\" id=\"iv\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" class=\"iv\"></iframe>";
    document.write(video);
    number++;
  }
  document.write('<div style="height:55px;width:100%;"></div>');
}
function ispc(){
    var userAgentInfo = navigator.userAgent;
    var Agents = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
}
function isllq(){
var ua = navigator.userAgent.toLowerCase();
if(ua.match(/MicroMessenger/i)=="micromessenger"){
  return "weixin";
} else if (ua.match(/QQ/i) == "qq"){
  return "QQ";
} else if (ua.match(/alipay/i) == "alipay"){
  return "alipay";
}
return false;
}
function contact(id){
  if(id == "qq"){
    if(ispc() == true){
      if(isllq() == "QQ"){
        location.href="https://qm.qq.com/cgi-bin/qm/qr?k=q7keB45HI7su0vVuSUQx6KBtz9STSymr&noverify=0";
      } else {
        bullet('扫描以下二维码加我好友或者在QQ中打开本页<img src="/img/qq.png">');
      }
    } else if(ispc() == false){
      if (isllq() == "QQ"){
        location.href="https://qm.qq.com/cgi-bin/qm/qr?k=q7keB45HI7su0vVuSUQx6KBtz9STSymr&noverify=0";
      } else {
        location.href="mqqwpa://im/chat?chat_type=wpa&uin=2185750134";
        sleep(3000);
        location.href="https://qm.qq.com/cgi-bin/qm/qr?k=q7keB45HI7su0vVuSUQx6KBtz9STSymr&noverify=0";
      }
    }
  } else if(id == "mail"){
    if(ispc() == true){
      alert('邮箱：lyhiauaning@163.com');
    } else if(ispc() == false){
      location.href="mailto:lyhiauaning@163.com";
      sleep(3000);
      alert('邮箱：lyhiauaning@163.com');
    }
  } else if(id == "qun"){
    if(ispc() == true){
      alert('群号码：821096499');
    } else if(ispc() == false){
      location.href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=821096499&card_type=group&source=qrcode";
      sleep(3000);
      alert('群号码：821096499');
    }
  } else if(id == "qun2"){
    if(ispc() == true){
      alert('群号码：624953187');
    } else if(ispc() == false){
      location.href="mqqapi://card/show_pslcard?src_type=internal&version=1&uin=624953187&card_type=group&source=qrcode";
      sleep(3000);
      alert('群号码：624953187');
    }
  } else if(id == "bili"){
    if(ispc() == true){
      location.href="https://space.bilibili.com/507050386";
    } else if(ispc() == false){
      location.href="bilibili://space/507050386";
      sleep(3000);
      location.href="https://space.bilibili.com/507050386";
    }
  }
}
function update(){
  if(ispc() == true){
    location.href="";
  } else if(ifpc() == false){
    location.href="";
  }
}
function sponsor(){
  if(ispc() == true){
    bullet('手机扫码：<br /><img src="/img/pay.png">');
  } else {
    if(isllq() == "weixin"){
      bullet('请保存图片，然后在扫一扫中打开<br /><img src="/img/wxsponsor.png">');
      /*location.href="wxp://f2f0849aCf7Jr8dy2dWhFEkJNzQf2-0YO1HZ";*/
    } else if(isllq() == "QQ"){
      bullet('请保存图片，然后在扫一扫中打开<br /><img src="/img/qqsponsor.png">');
      /*location.href="https://i.qianbao.qq.com/wallet/sqrcode.htm?m=tenpay&f=wallet&a=1&ac=CAEQ9syfkggYgYfO_gU%3D_xxx_sign&u=2185750134&n=Gulanguage";*/
    } else if(isllq() == "alipay"){
      location.href="https://qr.alipay.com/fkx14736rwmc3qspfq3hlf7";
    } else {
      bullet('手机扫码，如果是在QQ、微信、支付宝中打开，那么请点击<a href="/page/sponsor.html">我</a><br /><img src="/img/pay.png">');
    }
  }
}
function getUrlParam(name,url){
  if (!url) url = window.location.href;
  url = url;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results)
      return null;
  if (!results[2])
      return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}//获取/接收URL参数
function time(){
  var date=new Date();
  var dtime=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
  var div1 = document.getElementById("times");
  div1.innerHTML = "<p class=\"time\">"+dtime+"</p>";
}
function pp(tp){
  alertBtnClick();
  PFunction(tp);
}
function PFunction(){
  bullet(`
    <h1>功能区</h1>
    <iframe src="/page/pfunction.html" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="pfunction"></iframe>
  `);
}
function PFT(){
  bullet(`
    <a href="/page/video.html"><p class="pt" style="text-align:center;">B站视频</p></a>
    <a href="/page/code.html"><p class="pt" style="text-align:center;">代码源码</p></a>
    <a href="/page/a-z.html"><p class="pt" style="text-align:center;">A-Z站</p></a>
    <a href="JavaScript:contact('qq');"><p class="pt" style="text-align:center;">QQ联系</p></a>
    <a href="JavaScript:contact('mail');"><p class="pt" style="text-align:center;">邮箱反馈</p></a>
    <a href="JavaScript:contact('qun');"><p class="pt" style="text-align:center;">加入Q群</p></a>
    <a href="JavaScript:Change_Background(prompt('请输入链接\n您可以输入网址或者：background.jpg、background2.jpg、background.png'))"><p class="pt" style="text-align:center;">更换壁纸</p></a>
    <a href="JavaScript:player(prompt('请输入音乐链接'));"><p class="pt" style="text-align:center;">播放音乐</p></a>
  `);
}
function Change_Background(url){
  if(url != null){
    if(url.substr(0,4) != "http"){
      url = "/img/" + url;
    }
    var style=`
      <style>
        html{
          background-image: url(`+url+`);
          background-color: #aaa;
          background-size: cover;
          -webkit-background-size: cover 100%;
          -o-background-size: cover 100%;
          background-position: center center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          width: 100vw;
          height: 100vh;
        }
      </style>
    `;
    var head = document.getElementsByTagName('head')[0];
    head.innerHTML += style;
  }
}
function sleep(d){
  for(var t = Date.now();Date.now() - t <= d;);
}
function player(url){
  if(url != null){
    var audio= new Audio(url);
    audio.play();
  }
}