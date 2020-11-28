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
      B站引入视频参数:
      danmaku=0  (1=打开弹幕 0=关闭弹幕)
      high_quality=1  (1=最高画质 0=最低画质)
      小米内容中心播放视频api
      https://content.mcc.miui.com/bilibiliVideo?resource=https%3A%2F%2Fplayer.bilibili.com%2Fplayer.html%3Fbvid%3D<视频BV号>%26autoplay%3D1%26bsource%3Dxiaomi_cooperate&bizDocId=bilibili_<视频BV号>
      实例：https://content.mcc.miui.com/bilibiliVideo?resource=https%3A%2F%2Fplayer.bilibili.com%2Fplayer.html%3Fbvid%3DBV1Yh411Z78b%26autoplay%3D1%26bsource%3Dxiaomi_cooperate&bizDocId=bilibili_BV1Yh411Z78b
    */
  var video=`
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1KZ4y157xQ" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 56vw; margin-top: 60px;"></iframe>
    <!--<iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1Yh411Z78b" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 56vw;"></iframe>-->
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV11K4y1Z7wP" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 56vw;"></iframe>
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1TZ4y157m2" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 56vw;"></iframe>
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1B54y1z7Qq" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 56vw;"></iframe>
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1op4y1k79P" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 56vw;"></iframe>
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1Nv411r7yU" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="width: 100%; height: 56vw;"></iframe>
  `;
  document.write(video);
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
function contact(id){
  if(id == "qq"){
    if(ispc() == true){
      bullet('<img src="/img/qq.png">');
    } else if(ispc() == false){
      location.href="mqqwpa://im/chat?chat_type=wpa&uin=2185750134";
    }
  } else if(id == "mail"){
    if(ispc() == true){
      alert('邮箱：lyhiauaning@163.com');
    } else if(ispc() == false){
      location.href="mailto:lyhiauaning@163.com";
    }
  }
}
function test(){
  /*alert("艹泥马！");
  bullet("艹泥马！<img src='logo.gif'>");*/
  if(ispc() == true){
    alert('这是电脑');
  } else if(ispc() == false){
    alert("这是手机");
  }
}
