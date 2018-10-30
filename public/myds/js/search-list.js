//参数
var keyword;
//页面的数据
var html = "";
//第几页
var page = 1;
//记录this指向
var that;
//记录总共的页数
var totalPage;
//价格排序
var priceSort = 1;
//销量排序
var numSort = 1;
$(function(){
    /**
     * 1.获取url上的参数
     * 2.通过ajax 获取对应数据渲染到页面
     * 3.价格\销量等排序 重新渲染到页面
     */
    // 用自己封装的函数获取参数
    keyword = getParamsByUrl(location.search,'key');
    // console.log(keyword);
    if(!keyword){
        return;
    }
    mui.init({
        pullRefresh : {
          container:".refresh",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
          up : {
            height:50,//可选.默认50.触发上拉加载拖动距离
            auto:true,//可选,默认false.自动上拉加载一次
            contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback :pullfresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
          }
        }
      });
      //价格
      $(".price-Sort").on("tap",function(){
        priceSort = priceSort == 1?2:1;
        //对之前的设置初始化
        page = 1;
        html = "";
        //重置上拉加载
        mui('.refresh').pullRefresh().refresh(true);
        pullfresh();
      })
      //销量
      $(".num-Sort").on("tap",function(){
        numSort = numSort == 1?2:1;
        //对之前的设置初始化
        page = 1;
        html = "";
        mui('.refresh').pullRefresh().refresh(true);
        pullfresh();
      })



})

function pullfresh (){
    
    if(!that){
        that = this; 
    }
    $.ajax ({
        url:'/product/queryProduct',
        type:'get',
        data: {
            proName:keyword,
            page: page,
            pageSize: 4,
            price: priceSort,
            num: numSort
        },
        success: function(res){
            html += template("showSearchlist",res);
            $(".product ul").html(html);
            page++;
            //判断获取的数据是否为空 禁用下滑操作
            that.endPullupToRefresh(res.data.length == 0);
            // console.log(res.data.length == 0);
        }

    })
}