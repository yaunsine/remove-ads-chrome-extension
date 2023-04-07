// var script=document.createElement("script");  
// script.type="text/javascript";  
// script.src="./jquery-3.6.4.min.js"; 
// document.getElementsByTagName('head')[0].appendChild(script);
// import("jquery-3.6.4.min.js")
// import 'jquery-3.6.4.min.js';
function start() {
	let rule2 = {
		conditions: [
		  new chrome.declarativeContent.PageStateMatcher({
			pageUrl: { hostSuffix: '.google.com', schemes: ['https'] },
			css: ["input[type='password']"]
		  }),
		  new chrome.declarativeContent.PageStateMatcher({
			css: ["video"]
		  })
		],
		actions: [ new chrome.declarativeContent.ShowAction() ]
	  };


	    
	if (chrome.app.window.location.href.indexOf("ys9000")!=-1) {
		alert(111)
	}
}

chrome.action.onClicked.addListener(tab => {
	start();
 });
