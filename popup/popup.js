$(function(){
    start();

});


function start() {
    chrome.storage.sync.get(['rate'], function(result) {
		var radioList = $("input[name='voice']");
        
        for (var i = 0; i < radioList.length; i++) {
            if (radioList[i].value === result.rate) {
                radioList[i].checked = true;
            }
        }
	});
    // 点击扩展执行
    document.addEventListener('click', function(event) {
        if (event.target.classList.contains('requestMovieUrlBtn')) {
            requestUrl("https://www.ys900.com");
          // 处理按钮 1 的点击事件
        } else if (event.target.classList.contains('githubBtn')) {
            requestUrl("https://www.github.com/yaunsine");
          // 处理按钮 2 的点击事件
        } else if (event.target.classList.contains('voice')) {
          // 处理按钮 3 的点击事件
          var selectedValue = document.querySelector('input[name="voice"]:checked').value;
          changeRate(selectedValue);
        } else if (event.target.classList.contains("bingSearchBtn")) {
            requestUrl("https://www.bing.com");
        } else if (event.target.classList.contains("clearAdBtn")) {
            sendCommand(1);
        }
      });
}

function sendCommand(cmd) {
    if (cmd === 1) {
        chrome.runtime.sendMessage({ data: "hello from popup", cmd: 1}, function(response) {
            console.log("Response from service worker:", response);
        });
    }
}

function requestUrl(request_url) {
    chrome.runtime.sendMessage({ data: "hello from popup", req_url: request_url}, function(response) {
        console.log("Response from service worker:", response);
    });
}

function changeRate(rate) {
    chrome.storage.sync.set({'rate': rate}, function() {
        console.log("save it.");
    });
    // Send a message to the service worker
    chrome.runtime.sendMessage({ data: "hello from popup", rate: rate, from: "ys900"}, function(response) {
        console.log("Response from service worker:", response);
    });
    
}
