$(function () {


    //调用InitUserInfo函数渲染用户信息

    InitUserInfo();


    //渲染用户的初始信息
    function InitUserInfo() {
        $.ajax({
            type: "get",
            url: "/my/userinfo",
            success: function (res) {
                if (res.status != 0) {
                    return alert("渲染失败");
                }


                $("#username").val(res.data.username);

                $("#nickname").val(res.data.nickname);

                $("#email").val(res.data.email);

                $("#id").val(res.data.id);

            }
        })
    }


    //重置用户信息

    $("#reset").on("click", function(e) {
        //阻止充值按钮的默认重置行为
        e.preventDefault;
        // alert(11)
        //重置用户的原来的信息，调用 InitUserInfo函数即可
        InitUserInfo();
    })

    //用户的更新

    $("#btninfo").on("click", function (e) {

        e.preventDefault;
        
        var nickname = $("#nickname").val();

        var email = $("#email").val();

        var id = $("#id").val();

        //向服务器传数据进行更新

        $.ajax({
            type: "post",
            url: "/my/userinfo",
            data: {
                id: id,
                email: email,
                nickname: nickname
            },
            success: function (res) {
                if(res.status != 0) {
                    return alert(res.message);
                }
                // alert(11);
                //调用父业面的方法重新渲染用户名和头像
                window.parent.getUserInfo();
                // console.log("ok");
                
            }
        })
    })
})