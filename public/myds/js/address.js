
$(function(){
    var resAddress;
    //接收数据并渲染到页面
    $.ajax({
        url: "/address/queryAddress",
        type: "get",
        success: function(res){
            //console.log(res);
            resAddress = res;
            var html = template("userAddressTpl",{data: res});
            $("#userAddress").html(html);
        }
    })

    //删除
    $("#userAddress").on("tap","#delAddress",function(){
        var id = $(this).data("id");
        var li = this.parentNode.parentNode;
        mui.confirm("确认删除吗?",function(e) {
            if (e.index == 1) {
                $.ajax({
                    url: "/address/deleteAddress",
                    type: "post",
                    data:{
                        id:id,
                    },
                    success:function(res){
                        if(res.success){
                            location.reload();
                        }
                    }
                })
            } else {
                setTimeout(function() {
                    mui.swipeoutClose(li);
                }, 0);
            }
        })
    });

    //编辑 addAddress.html?edit=1
    $("#userAddress").on("tap","#editAddress",function(){
        
        var id = $(this).data("id");
        // 遍历 匹配id
        for(var i = 0;i<resAddress.length;i++){
            if(resAddress[i].id == id){
                var str = JSON.stringify(resAddress[i]);
                //把数据存在 浏览器
                localStorage.setItem("addressInfo",str);
                break;
            }  
        }
        location.href = "addAddress.html?edit=1";
    })
})