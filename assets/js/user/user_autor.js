$(function() {
    var $image = $('#image')
    const options = {
        aspectRatio: 1,
         preview: '.img-preview' 
    }
    $image.cropper(options)
    $(".upfile").on("click", function() {
        
        $("#file").click();
        $("#file").on("change",function(e) {
            
            var file = e.target.files[0]
            var newImgURL = URL.createObjectURL(file)
            // console.log(newImgURL);
            $image   .cropper('destroy')      // 销毁旧的裁剪区域
               .attr('src', newImgURL)  // 重新设置图片路径   
             .cropper(options)        // 重新初始化裁剪区域
        })
        
        
        
    })
    //为确定按钮添加点击事件
    $("#loadfile").on("click", function() {
        var dataURL = $image.cropper('getCroppedCanvas', { // 创建一个 Canvas 画布 
                   width: 100,       
             height: 100     }).toDataURL('image/png')       // 将 Canvas 画布上的内容，转化为 base64 格式的字符串
            //调用接口
            $.ajax({
                type: "post",
                url: "/my/update/avatar",
                data: {
                    avatar:dataURL
                },
                success: function(res) {
                    if(res.status !== 0) {
                        return alert(res.message)
                    }
                    //调用父业面的方法渲染头像
                    window.parent.getUserInfo();
                }
            })
        })
})