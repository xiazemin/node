//基于commonjs的require方法引入的用
const Spinner= require('spin.js');
var left=$(window).width();
//opts 可从网站在线制作
var opts = {
    lines: 13, // 花瓣数目
    length: 20, // 花瓣长度
    width: 10, // 花瓣宽度
    radius: 30, // 花瓣距中心半径
    corners: 1, // 花瓣圆滑度 (0-1)
    rotate: 0, // 花瓣旋转角度
    direction: 1, // 花瓣旋转方向 1: 顺时针, -1: 逆时针
    color: '#5882FA', // 花瓣颜色
    speed: 1, // 花瓣旋转速度
    trail: 60, // 花瓣旋转时的拖影(百分比)
    shadow: false, // 花瓣是否显示阴影
    hwaccel: false, //spinner 是否启用硬件加速及高速旋转
    className: 'spinner', // spinner css 样式名称
    zIndex: 2e9, // spinner的z轴 (默认是2000000000)
    top: '300'+'px', // spinner 相对父容器Top定位 单位 px
    left: left/2+'px'// spinner 相对父容器Left定位 单位 px
};

var spinner = new Spinner(opts);

$(document).ready(function () {
    $("#btnRequest").bind("click", function () {
        ajaxRequestData();
    })
});

function ajaxRequestData(){
    $.ajax({
        type: "POST",
        timeout: 100000,
        dataType: "text",
        url: "123",
        beforeSend: function () {
            //异步请求时spinner出现
            $("#firstDiv").text("");
            var target = $("#firstDiv").get(0);
            spinner.spin(target);//这里是spin的容器
            //最好用这样的容器spinner.spin($('body').get(0));
        },
        success: function (msg) {
            $("#firstDiv").text(msg);
            spinner.spin()
            alert('success');
        },
        error: function (e, jqxhr, settings, exception) {
            $("#firstDiv").text("请求发生错误...");
            spinner.spin()
            alert('false')
        }
    })
}