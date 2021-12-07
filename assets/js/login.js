$(function() {




    //点击链接转换到注册盒子
    $("#link_reg").on("click", function() {
        $(".login_box").hide();
        $(".reg_box").show();
    })

    //点击链接转换到登陆盒子
    $("#link_login").on("click", function() {
        $(".login_box").show();
        $(".reg_box").hide();
    })


    //注册的post请求
    $("#regbtn").on("click", function() {
        var username1 = $(".reguser").val();

        var password1 = $(".regpsw").val();

        

        $.post("/api/reguser",{
            username: username1,
            password: password1
        },function(res) {
            if(res.status != 0) {
                return alert(res.message);
            }
            alert(res.message);
            $("#link_login").click();
        })
    })

    //登陆的ajax请求
    $("#logbtn").on("click", function() {
        var username2 = $(".loguse").val();

        var password2 = $(".logpsw").val();

        $.ajax({
            type: "post",
            url: "/api/login",
            data: {username: username2, password: password2},
            success: function(res) {
                if(res.status != 0) {
                    return alert(res.message)
                }

                // console.log(res.message);
                // console.log(res.token);
                alert(res.message);
                location.href = "./index.html"

                //访问有权限的接口需要token字符串
                localStorage.setItem("token", res.token)
            }
        })
    })
})