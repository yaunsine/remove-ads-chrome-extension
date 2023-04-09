console.log("content-script");
const port = chrome.runtime.connect({name: "contentScript"});

port.postMessage({greeting: "connect success. hello from content script!"});

port.onMessage.addListener((message) => {
  console.log("Message from service worker: ", message);

  if (message.from !== undefined && message.from === "ys900") {
	console.warn("change rate")
	var ifrm = document.querySelector(".videoplay>iframe").contentWindow;
	console.log(ifrm)
	console.log(ifrm.document.getElementsByTagName('video')[0])
	ifrm.document.getElementsByTagName('video')[0].playbackRate=message.rate;
  }
  if (message.req_url !== undefined) {
	window.location.href=message.req_url;
  }
  if (message.req_cmd !== undefined) {
	var cmd = message.req_cmd;
	if (cmd == 1) {
		start();
	}
  }
});

  