$(function() {
    //调用getUserInfo 来获取用户的基本信息
    getUserInfo();


    //退出登陆操作
    $("#back_login").on("click",function() {
        localStorage.removeItem("token");

        location.href = "./login.html";


    })
})

//获取用户的基本信息函数
function getUserInfo() {
    $.ajax({
        type: "get",
        url: "/my/userinfo",
        success: function(res) {
           //渲染用户名以及头像的函数
           if(res.status != 0) {
               return alert(res.message);
           }
           setNameAndPic(res.data);
            
        }
    })
}

//渲染用户名以及头像
function setNameAndPic(data) {
    //1.渲染用户名
    var name = data.nickname || data.username;

    $("#welcome").html("欢迎&nbsp" + name).show();

    //2.渲染头像

    if(data.user_pic != null) {
        //2.1 渲染用户选择的头像

        $(".layui-nav-img").attr("src", data.user_pic).show();
        
        $(".text-avatar").hide();
    }
    else {
        //2.2 渲染用户注册账号时的首字母作为头像

        //获取注册的账号的第一个字母
        var first = name[0].toUpperCase();

        $(".layui-nav-img").hide();

        $(".text-avatar").html(first).show();

        
    }
}