$(function(){
    /**
     * 1.给获取验证码绑定点击事件
     * 2.从后台获取验证码
     * 3.给注册按钮绑定点击事件
     * 4.获取表单内的value值,并进行验证
     * 5.把参数传递到服务器,并跳转到登录页面
     */
    //记录验证码
    var getcode;

    /* 获取验证码 */
    $("#getCode").on("tap",function(){
        $.ajax({
            url:"/user/vCode",
            type:"get",
            success:function(res){
                getcode = res.vCode;
                console.log(getcode);
            }
        })
    })
    /* 注册按钮事件 */
    $(".register-btn").on("tap",function(){

        var that = $(this);

        var username = $("#username").val().trim();
        var mobile = $("#mobile").val().trim();
        var password = $("#password").val().trim();
        var okpassword = $(".okpassword").val().trim();
        var vCode = $("#vCode").val().trim();
        //验证用户输入的表单信息
        if(!username || !mobile || !password || !okpassword || !vCode){
            alert("信息请输入完整!");
            return;
        }
        if(password != okpassword){
            alert("密码不一致!");
            return;
        }
        


        //发送ajax
        $.ajax({
            url: "/user/register",
            type: "post",
            data:{
                username : username,
                mobile : mobile,
                password : password,
                vCode : vCode,
            },
            beforeSend:function(){
				that.html('正在提交数据...');
			},
            success: function(res){
                // console.log(res);
                if(res.success){
                    location.href = "login.html";
                }else {
                    alert(res.message);
                    that.html('注册');
                }
            }
        })

        
    })


})