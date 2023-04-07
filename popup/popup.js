$(function(){
    start();
    $("#github-btn").onclick=requestToGithub();
});


function start() {
    $("#btn").click(function(){
        // $(location).attr('href', 'https://www.ys900.com');
        var html_url = 'https://www.ys900.com';
        chrome.windows.create({url: html_url}, function (res) {
            console.log(res);
          });
    });
}

function requestToGithub() {
    // alert(111);
    // var html_url = "https://www.github.com/yaunsine";
    // chrome.windows.create({
    //     url: html_url
    // }, function(res) {
    //     console.log(res);
    // });
    // return false;
}