$(function(){
    // 接口地址
    var url = "";
    var id = null;
    if(parseInt(getParamsByUrl(location.href,"edit"))){
        //编辑
        console.log("编辑");
        $("#addressTle").text("编辑收货地址");
        url = "/address/updateAddress";
        var addressInfo = JSON.parse(localStorage.getItem("addressInfo"));
        //设置用户默认值

        id = addressInfo.id; //id
        $("#address").val(addressInfo.address); //地址
        $("#addressDetail").val(addressInfo.addressDetail); //详细地址
        $("#recipients").val(addressInfo.recipients); //收货人
        $("#postCode").val(addressInfo.postCode); //邮编
        // console.log(addressInfo);
        //移除
        localStorage.removeItem("addressInfo");
    }else{
        //添加
        console.log("添加");
        url = "/address/addAddress";
    }



    /* 显示三级联动默认设置 */
    
    var picker = new mui.PopPicker({
        layer: 3
    });
    //city中的城市数据
    picker.setData(cityData);
    
    //点击事件
    $("#address").on("tap",function(){
        picker.show(function(SelectedItem) {
            // console.log(SelectedItem);
            // 将用户选择的内容显示在文本框中
			$('#address').val(SelectedItem[0].text + SelectedItem[1].text + SelectedItem[2].text);
        })
    })


    /* 添加功能 */
    $(".addAddress-btn").on("tap",function(){
        //获取表单数据
        var address = $("#address").val().trim();
        var addressDetail = $("#addressDetail").val().trim();
        var recipients = $("#recipients").val().trim();
        var postcode = $("#postCode").val().trim();

        // 验证信息
        if(!address || !addressDetail || !recipients || !postcode){
            alert("请填写完整");
            return;
        } 
        $.ajax({
            url: url,
            type:"post",
            data:{
                address: address ,
                addressDetail: addressDetail ,
                recipients: recipients,
                postcode : postcode,
                id: id  
            },
            success: function(res){
                if(res.success){
                    location.href="address.html";
                }else{
                    alert(res.message);
                }
            }
        })
    })

})