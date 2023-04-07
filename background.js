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

function sendMessageToContentScript(message, callback)
{
	getCurrentTabId((tabId) =>
	{
		chrome.tabs.sendMessage(tabId, message, function(response)
		{
			if(callback) callback(response);
		});
	});
}

function test() {
	alert(111)
}



function voiceChange(val) {
	alert("to")
	// 请求content-script去更改
	sendMessageToContentScript(
		{
			"type": "voice",
			"value": val
		}, 
		function(res) {
			// 收到content-script的来信
		})
}


