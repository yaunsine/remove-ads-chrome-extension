$(function(){
    start();
});


function start() {
    $("#btn").click(function(){
        // $(location).attr('href', 'https://www.ys900.com');
        var html_url = 'https://www.ys900.com';
        chrome.windows.create({url: html_url}, function (win) {
            // document.querySelector("#HMcoupletDivleft").remove();
            // document.querySelector("#HMcoupletDivright").remove();
            // document.querySelector("#HMRichBox").remove();
          });
        // window.location.href="https://www.ys900.com";
    });
}