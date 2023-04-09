/**
 * @author: yaunsine
 * 这里是后台
 */

// 获取当前选项卡ID
function getCurrentTabId(callback)
{
	chrome.tabs.query({
		active: true, 
		currentWindow: true
	}, 
	function(tabs)
	{
		if(callback) callback(tabs.length ? tabs[0].id: null);
	});
}
  
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log("connect to popup")
	if (pp !== undefined) {
		if (request.req_url !== undefined) {
			pp.postMessage({req_url: request.req_url});
		}
		if (request.rate !== undefined) {
			console.log("Message received from popup: rate: ", request.rate);
			pp.postMessage({rate: request.rate, from: request.from});
		}
		if (request.cmd !== undefined) {
			pp.postMessage({req_cmd: request.cmd});
		}
	}
  });


// 建立连接
chrome.runtime.onConnect.addListener((port) => {
	console.log("Connected to content script:", port.sender.tab.id);
	chrome.storage.sync.set({'tabId': port.sender.tab.id, 'port': port}, function() {
		console.log('Value is set to port: ' + port.sender.tab.id);
	});
	pp = port;
	port.onMessage.addListener((message) => {
	  console.log("Message from content script: ", message);
	  port.postMessage({greeting: "hello from service worker!"});
	});
});





  