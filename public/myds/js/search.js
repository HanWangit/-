
$(function(){
    /**
     * 1.点击搜索,获取文本框内容
     * 2.保存在浏览器缓存中,以数组方式
     * 3.获取缓存数组
     * 4.动态添加在页面搜索历史中
     * 5.清空历史
     */
    $(".navSearch button").on("tap",function(){
        //获取文本关键字
        var keyword = $(".navSearch input").val();
        //验证文本
        if(!keyword){
            mui.alert('请输入关键字!') ;
            return;
        }else{
            console.log(keywords);
            keywords.unshift(keyword); //把新数据插入到数组前面
            //再把数组转成字符串存入浏览器
            localStorage.setItem('keywords',JSON.stringify(keywords));
            //跳转到搜索结果页面,带上关键字
            location.href = "search-list.html?key="+keyword;    
        }

        

        

    })

    var keywords = [];
    // 页面一加载,就执行获取历史
    if(localStorage.getItem('keywords')){
        keywords= JSON.parse(localStorage.getItem('keywords'));
        console.log(keywords);
        var html = template("getHistory",{data:keywords});
       $(".showHistory").html(html);
    }

    //清空历史
    $(".clearHistory").on("tap",function(){
        localStorage.removeItem('keywords');
        
       $(".showHistory").html("");
    })
})

