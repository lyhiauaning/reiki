/*obj = document.getElementById("s");
localhost = obj.attributes["src"].nodeValue;
获取id为s的标签的src的值
*/
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
}
if(getUrlParam("type",localhost) == "lzy"){
  location.href="https://res.abeim.cn/api-lanzou_jx?url=http://gulanguage.lanzous.com/"+getUrlParam("url",location)+"&dow=true";
}
