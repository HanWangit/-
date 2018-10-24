$(function(){
	// 滑块
    mui('.category_left').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	mui('.category_right').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    
    //动态一级分类获取数据并渲染
    $.ajax({
        url:"/category/queryTopCategory",
        type:"get",
        success:function(result){
            var html = template('category-frist',result);
            $('.category-frist-l').html(html);

            //页面一加载就获取第一个数据渲染到页面
            $('.category-frist-l li').eq(0).addClass("active");
            clickAjax(1);
        }
    })
    
    // 点击事件获取二级分类数据并渲染
    //事件代理
    $(".category-frist-l").on("tap","li",function(){
        // 通过自定义属性 获取id
        var id = $(this).data("id");
        //加类名
        $(this).addClass("active").siblings().removeClass("active");
        // console.log(id);
        clickAjax(id)
    })

    function clickAjax (id){
        $.ajax({
            url:"/category/querySecondCategory",
            type:"get",
            data:{
                id:id
            },
            success:function(result){
                // console.log(result);
                var html = template('category-second',result);
                // console.log(html);
                $('.category-frist-r').html(html);
            }
        })
    }
})
