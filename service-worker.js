// var script=document.createElement("script");  
// script.type="text/javascript";  
// script.src="./jquery-3.6.4.min.js"; 
// document.getElementsByTagName('head')[0].appendChild(script);
// import("jquery-3.6.4.min.js")
// import 'jquery-3.6.4.min.js';
// function start() {
// 	let rule2 = {
// 		conditions: [
// 		  new chrome.declarativeContent.PageStateMatcher({
// 			pageUrl: { hostSuffix: '.google.com', schemes: ['https'] },
// 			css: ["input[type='password']"]
// 		  }),
// 		  new chrome.declarativeContent.PageStateMatcher({
// 			css: ["video"]
// 		  })
// 		],
// 		actions: [ new chrome.declarativeContent.ShowAction() ]
// 	  };


// 	  document.querySelector("#HMRichBox").remove();
// 	  document.querySelector("body > div.header").remove();
// 	  document.querySelector("body > div.menu").remove();
// 	  document.querySelector("body > div:nth-child(3) > div > div").remove();
// 	  document.querySelector("#HMcoupletDivleft > a").remove();
// 	  document.querySelector("#HMcoupletDivright > a").remove();
// 	  document.querySelector("body > div.playbox > div").style.maxWidth='100%';
// 	  document.querySelector("body > div.mikd.clearfix").remove();
// 	  document.querySelector("body > div.footer.wow.fadeInUp").remove();
// 	  document.querySelector("body > div.playbox").style.cssText="height:100%";	  
	
// }

// start();
//background.js
// chrome.action.onClicked.addListener(function(tab){  
// 	var newURL = "https://www.ys900.com/";
// 	chrome.tabs.create({ url: newURL });
//   });

chrome.runtime.onInstalled.addListener(function() {
	chrome.contextMenus.create({
	  id: 'fdddebpljhpcilaheedkhpbiokhlkeeb',
	  title: 'ys900抓取',
	  type: 'normal',
	  contexts: ['selection'],
	});
  });