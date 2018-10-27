$(function(){
    var getCode = null;
    /* 获取修改密码的验证码 */
    $("#getCode").on("tap",function(){
        $.ajax({
            url: "/user/vCodeForUpdatePassword",
            type: "get",
            success: function(res){
                if(res.vCode){
                    getCode = res.vCode;
                    console.log(getCode);
                }else{
                    alert(res.message);
                }
                
            }
        })
    })
    /* 修改密码 */
    $(".modify-btn").on("tap",function(){
        var oldPassword = $("#oldPassword").val().trim();
        var newPassword = $("#newPassword").val().trim();
        var oknewPassword = $("#oknewPassword").val().trim();
        var vCode = $("#vCode").val().trim();


        if(!oldPassword || !newPassword || !oknewPassword || !vCode){
            alert("请把信息填写完整");
            return;
        }
        if(newPassword !== oknewPassword){
            alert("两次密码不一致");
            return;
        }


        $.ajax({
            url:"/user/updatePassword",
            type: "post",
            data: {
                oldPassword: oldPassword,
                newPassword: newPassword,
                vCode: vCode
            },
            success: function(res){
                if(res.success){
                    location.href = "user.html";
                }else{
                    alert(res.message);
                }
            }
        })
    })
})