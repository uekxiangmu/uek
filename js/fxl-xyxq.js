


$(function(){
    var nowtiao=$(".fxl-taio:first");

    var alllj=$(".fxl-lj");
    var allzhanshi=$(".fxl-zhanshi");

    alllj.click(function(){
       nowtiao=$(this).index();
        alllj.css("borderTop","2px solid transparent");
       $(this).css("borderTop","2px solid #01b5ff");
        allzhanshi.css("display","none").eq(nowtiao).css("display","block");
    })


});