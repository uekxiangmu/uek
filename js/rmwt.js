$(".fxl_js").click(function(){
    var num=$(this).index();
    num-=3;
    $(".fxl_right").css("display","none").eq(num).css("display","block");

})