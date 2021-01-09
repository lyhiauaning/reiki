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
  } else {
    var style=`
      <style>
        .iv{
          width: 64vw;
          height: 36vw;
          margin-left: 3vw
        }
      </style>
    `;
  }
  var head = document.getElementsByTagName('head')[0];
  head.innerHTML += style;
  var video=`
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1KZ4y157xQ" id="iv" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="iv" style="margin-top: 55px;"></iframe>
    <!--<iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1Yh411Z78b" id="iv" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="iv"></iframe>-->
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV11K4y1Z7wP" id="iv" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="iv"></iframe>
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1TZ4y157m2" id="iv" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="iv"></iframe>
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1B54y1z7Qq" id="iv" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="iv"></iframe>
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1op4y1k79P" id="iv" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="iv"></iframe>
    <iframe src="http://player.bilibili.com/player.html?danmaku=0&high_quality=1&bvid=BV1Nv411r7yU" id="iv" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" class="iv" style="margin-bottom: 55px"></iframe>
  `;
  document.write(video);
}

/*
放到液面的<script>标签内,标题滚动
setInterval(function(){var oldTitle=document.title;var titleArr=oldTitle.split('');titleArr.push(titleArr.shift());document.title=titleArr.join('');},100);
*/