$(function() {
    $("#btnpsw").on("click", function() {
        let oldpsw = $("#oldpsw").val()
        let newpsw = $("#newpsw").val()
        let renewpsw = $("#renewpsw").val();
        //如果两次输入的密码不一样，则需要重新输入
        if(newpsw !== renewpsw) {
            return alert("两次输入的密码不一样")
        }
        //向服务器发送请求来重置密码
        $.ajax({
            type: "post",
            url: "/my/updatepwd",
            data: {
                oldPwd: oldpsw,
                newPwd: newpsw
            },
            success: function(res) {
                if(res.status != 0) {
                    return alert(res.message);
                }
                alert(res.message);
                //清空表单,先获取表单并转化为原生的dom对象，调用reset()方法
                $("#info_form")[0].reset();
            }
        })
    })
})