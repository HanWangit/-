$(function(){
    $(".login-btn").on("tap",function(){
        var username = $("#username").val().trim();
        var password = $("#password").val().trim();

        $.ajax ({
            url: "/user/login",
            type: "post",
            data: {
                username: username,
                password: password
            },
            success:function(res){
                if(res.success){
                    if(localStorage.getItem("returnUrl")){
                        //返回上次的页面
                        localStorage.href = localStorage.getItem("returnUrl");
                        localStorage.removeItem("returnUrl");
                    }else{
                        location.href = "user.html";
                    }
                    
                }else {
                    alert(res.message);
                }
            }
        })
    })
})