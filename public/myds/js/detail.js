


$(function(){
    
    // 初始化滑动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    var size = 35;
    $("#getDetail").on("tap",".detail_size span",function(){
        $(this).addClass("active").siblings().removeClass("active");
        size = $(this).text();
    })

    //获取id ,查询到产品信息
    var id = getParamsByUrl(location.href,"id");
            
    $.ajax({
        url: "/product/queryProductDetail",
        type: "get",
        data: {
            id: id
        },
        success: function(res){
            var html = template("getDetailTpl",res);
            $("#getDetail").html(html);
            console.log(res.num);
            $("#numMax").data("numboxMax",res.num);
            $(".detail_num span").text(res.num);
        }
    })
})