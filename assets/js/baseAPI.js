
//无论发送post，get， ajax请求都会先调用这个函数，可以得到请求体，在这个函数中拼接请求的根路径
$.ajaxPrefilter(function(options) {
    options.url = "http://api-breakingnews-web.itheima.net" + options.url;
})