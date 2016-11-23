$(function () {

    //banner
    $(".ljt-btn").click(function(){

            $(".ljt-btn").removeClass("ljt-j1");


        $(this).toggleClass("ljt-j1");

       })

var n=0;
    var ss=setInterval(bo,3000)
    function bo() {
        n++;
        if(n>= $(".ljt-banner-btn1").length){
            n=0
        };
        $(".ljt-banner-btn1").css("background","transparent").eq(n).css("background","#2691fd")
        $(".ljt-banner0").css({"display":"none",opacity:0,scale:0.7}).eq(n).css("display","block").transition({opacity:1,scale:1},800);
    }

$(".ljt-banner-btn1").mouseover(function () {

    var index=$(this).index();
    console.log(index)
    $(".ljt-banner-btn1").css("background","transparent").eq(index).css("background","#2691fd")
    $(".ljt-banner0").css({"display":"none",opacity:0,scale:0.7}).eq(index).css("display","block").transition({opacity:1,scale:1},500);

})
    $(".ljt-banner").hover(function () {
        clearInterval(ss)
    },function () {
        ss=setInterval(bo,3000)
    })

   var jia=$(".ljt-ccv");
    jia. click(function () {
        $(".ljt-jia").slideDown(600);
        $(".ljt-hj").css("display","block");

    })
    jia.mouseout(function () {
        $(".ljt-jia").slideUp(200);
        $(".ljt-hj").css("display","none");

    })


  function ccf(zd,bd){
        zd.mouseover(function() {
           var index=$(this).index()
           zd.removeClass('qian')
           $(this).toggleClass('qian');
           bd.removeClass('qian').css("display","none")
           .eq(index).css("display","block")
        });
    }
    function bp(zd,bd){
        zd.mouseover(function() {
           var index=$(this).index()
           bd.css("opacity","0").eq(index).css("opacity","1")
        });
    }
ccf($(".mjh-jysj"),$(".ljt-shibao"));

bp($(".ljt-bt1"),$(".ljt-cv"));

})