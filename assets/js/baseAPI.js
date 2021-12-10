
//无论发送post，get， ajax请求都会先调用这个函数，可以得到请求体，在这个函数中拼接请求的根路径
$.ajaxPrefilter(function(options) {
    options.url = "http://127.0.0.1" + options.url;

    //设置有权限的headers请求头

    if(options.url.indexOf("/my/") !== -1) {
        options.headers = {
            Authorization: localStorage.getItem("token") || ""
        }
    }
    //complete函数为无论请求成功或者失败都会调用的函数
    options.complete = function(res) {
        //如果身份认证失败,则强制跳回登陆界面
        if(res.responseJSON.status == 1) {

                
            localStorage.removeItem("token");

            location.href = "./login.html";
        }
    }
})