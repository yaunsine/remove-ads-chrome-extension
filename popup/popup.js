$(function(){
    start();
    $("#github-btn").onclick=requestToGithub();
    $("input[name='voice']").onclick=changeRate();
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

function changeRate() {
    var bg = chrome.extension.getBackgroundPage();      // 调用后台脚本
    bg.test();
    // bg.voiceChange(1);
    
    // var radioList = $("input[name='voice']");
    // for (var i = 0; i < radioList.length; i++) {
    //     if (radioList[i].checked) {
    //         var rate = radioList[i].value;
            
    //         $("video").playbackRate=rate;
    //     }
    // }
    
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