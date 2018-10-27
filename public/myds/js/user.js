

$(function(){
    //不让页面错位
    $("#userMessage").html(template("userMessageTpl",{}));
    
    /* 获取用户信息,如果未登录跳转到登录页面 */
    $.ajax({
        url: "/user/queryUserMessage",
        type: "get",
        success: function(res){
            console.log(res);
            if(res.error && res.error == 400){
                location.href = "login.html";
                return;
            }
            var html = template("userMessageTpl",res);
            $("#userMessage").html(html);
        }
    })

    /* 退出登录 */

    $(".logout").on("tap",function(){
        $.ajax({
            url: "/user/logout",
            type: "get",
            success: function(res){
                if(res.success){
                    mui.toast("退出登录成功");
                    location.href = "index.html";
                }else{
                    alert(res.message);
                }
            }
        })
    })
    
    
})