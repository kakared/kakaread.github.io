
// 正式版和测试版判断，1位正式版，0为测试版
function stable($var) {
    $('#type').fadeOut(0);
    if ($var == 1) {
        $('#stable').fadeIn(0);
    } else {
        $('#beta').fadeIn(0);
        beta_device();
    }
}
// 第一层
// 找到id为step1里面class为step1_iphone的按钮,点击隐藏id为step1的div,显示id为shape的div
$("#step1").on("click",'.step1_iphone',function () {
    // id为step1隐藏
    $("#step1").hide();
    // id为shape显示
    $("#shape").show();
    //从id为shape里面找到class为shape_iphone 的div显示
    $("#shape").find(".shape_iphone").show();
    //class为shape_iphone 的div的同级兄弟元素全部隐藏；
    $("#shape").find(".shape_iphone").siblings().hide();
});
$("#step1").on("click",'.step1_iPad',function () {
    $("#step1").hide();
    $("#shape").show();
    $("#shape").find(".shape_iPad").show();
    $("#shape").find(".shape_iPad").siblings().hide();
});
$("#step1").on("click",'.step1_iPod',function () {
    $("#step1").hide();
    $("#shape").show();
    $("#shape").find(".shape_iPod").show();
    $("#shape").find(".shape_iPod").siblings().hide();
});
$("#step1").on("click",'.step1_atv',function () {
    $("#step1").hide();
    $("#shape").show();
    $("#shape").find(".shape_atv").show();
    $("#shape").find(".shape_atv").siblings().hide();
});

// 第二层

// ipx部分
$("#shape").on("click",'.iPx_gsm_shape',function () {
    $("#shape").hide();
    $("#update").show();
    $("#update").find(".update_iPx").show();
    $("#update").find(".update_iPx").siblings().hide();
});

$("#shape").on("click",'.iPxg_global_shape',function () {
    $("#shape").hide();
    $("#update").show();
    $("#update").find(".update_iPxg").show();
    $("#update").find(".update_iPxg").siblings().hide();
});

$("#shape").on("click",'.iPxe_global_shape',function () {
    $("#shape").hide();
    $("#update").show();
    $("#update").find(".update_iPxg").show();
    $("#update").find(".update_iPxg").siblings().hide();
});

$("#shape").on("click",'.iP8p_global_shape',function () {
    $("#shape").hide();
    $("#update").show();
    $("#update").find(".update_iPxg").show();
    $("#update").find(".update_iPxg").siblings().hide();
});

// ipad部分
$("#shape").on("click",'.iPad_shape_97',function () {
    $("#shape").hide();
    $("#update").show();
    $("#update").find(".update_iPad").show();
    $("#update").find(".update_iPad").siblings().hide();
});

// ipod部分
$("#shape").on("click",'.iPod_shape_touch6',function () {
    $("#shape").hide();
    $("#update").show();
    $("#update").find(".update_iPod").show();
    $("#update").find(".update_iPod").siblings().hide();
});

// Apple TV部分
$("#shape").on("click",'.atv_shape_tv3',function () {
    $("#shape").hide();
    $("#update").show();
    $("#update").find(".update_atv").show();
    $("#update").find(".update_atv").siblings().hide();
});



// 第三层

// ipx固件信息部分
$("#update").on("click",'.iPx_update_1141',function () {
    $("#update").hide();
    $("#information").show();
    $("#information").find(".ipx_info_1141").show();
    $("#stable").find(".kk-p").hide();
    $("#information").find(".ipx_info_1141").siblings().hide();
});
$("#update").on("click",'.iPx_update_114',function () {
    $("#update").hide();
    $("#information").show();
    $("#information").find(".ipx_info_114").show();
    // 找到隐藏class为kk-p "请选择您的设备"
    $("#stable").find(".kk-p").hide();
    $("#information").find(".ipx_info_114").siblings().hide();
});


// ios测试版

// 找到id为test里面class为step_iPad_129的按钮,点击隐藏id为test的div,显示id为test_information的div
$("#test").on("click",'.step_iPad_129',function () {
    // id为test隐藏
    $("#test").hide();
    // id为shape显示
    $("#test_information").show();
    //从id为test_information里面找到class为text-iPad_Pro 的div显示
    $("#test_information").find(".text-iPad_Pro").show();
    //class为text-iPad_Pro 的div的同级兄弟元素全部隐藏；
    $("#test_information").find(".text-iPad_Pro").siblings().hide();
});






















