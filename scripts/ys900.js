// var script=document.createElement("script");  
// script.type="text/javascript";  
// script.src="./jquery-3.6.4.min.js"; 
// document.getElementsByTagName('head')[0].appendChild(script);
// import("jquery-3.6.4.min.js")
// import 'jquery-3.6.4.min.js';
function start() {
	  document.querySelector("#HMRichBox").remove();
	  document.querySelector("body > div.header").remove();
	  document.querySelector("body > div.menu").remove();
	  document.querySelector("body > div:nth-child(3) > div > div").remove();
	  document.querySelector("#HMcoupletDivleft > a").remove();
	  document.querySelector("#HMcoupletDivright > a").remove();
	  document.querySelector("body > div.playbox > div").style.maxWidth='100%';
	  document.querySelector("body > div.mikd.clearfix").remove();
	  document.querySelector("body > div.footer.wow.fadeInUp").remove();
	  document.querySelector("body > div.playbox").style.cssText="height:100%";	  
}


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
	  // 收到请求
	  console.log(request)
  });
  
