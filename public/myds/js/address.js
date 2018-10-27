$(function(){
    $.ajax({
        url: "/address/queryAddress",
        type: "get",
        success: function(res){
            console.log(res);
            var html = template("userAddressTpl",{data: res});
            $("#userAddress").html(html);
        }
    })
})