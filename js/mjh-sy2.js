$(document).ready(function(){
    // 就业展示hover
    $(".mjh-jyzs-yu").hover(function(){
        $(".mjh-jyzs-fl",this).css("color","#fe6e20")
        $(".mjh-jyzs-yuwk",this).attr("src","images/mjh/sy2_06.png")
    },function(){
        $(".mjh-jyzs-fl",this).css("color","#94d43b")
        $(".mjh-jyzs-yuwk",this).attr("src","images/mjh/sy2_08.png")
    })

    // 实训制度hover
    var r2,jd;
    $(".mjh-sxzd-dian").attr("jd",0)
    function xz(d){
        jd=parseInt(d.attr("jd")) ;
        function zhuan(){
            jd+=5;
            d.attr("jd",jd)
            var a=50*Math.sin(jd*Math.PI/180)+47+"px"
            var b=50*(1-Math.cos(jd*Math.PI/180))-3+"px"
            d.css({top:b,left:a})
            // r2=requestAnimationFrame(zhuan)
        }
        r2=setInterval(zhuan,30)
    }
    
    $(".mjh-sxzd-qy").hover(function(){
        $(".mjh-sxzd-wz",this).css("color","#479ffa")
        $(".mjh-sxzd-tb",this).css({border:"1px solid transparent",background:"url(images/mjh/syzdk.png) no-repeat",color:"#479ffa"})
        $(".mjh-sxzd-dian",this).css("background","#479ffa")
        xz.call(null,$(".mjh-sxzd-dian",this))
    },function(){
        $(".mjh-sxzd-wz",this).css("color","#646464")
        $(".mjh-sxzd-tb",this).css({border:"1px solid #646464",background:"",color:""})
        $(".mjh-sxzd-dian",this).css("background","#646464")
        clearInterval(r2)
    })

    // 热门问题 hover
    $(".mjh-wtfqu").hover(function(){
        $(".mjh-wtfqy-bt",this).css("color","#01b5ff")
        $(".mjh-wtfqx",this).show()
        $(this).toggleClass('active');
    },function(){
        $(".mjh-wtfqy-bt",this).css("color","#222")
        $(this).toggleClass('active');
        $(".mjh-wtfqx",this).hide()
    })


    // 选项卡
    function xxk2(zd,bd){
        zd.click(function() {
           var index=$(this).index()
           zd.removeClass('dangqian')
           $(this).toggleClass('dangqian');
           bd.removeClass('dangqian')
           .eq(index).toggleClass('dangqian')
        });
    }

    // 就业展示
    xxk2($(".mjh-jysj",".mjh-jyzsbt"),$(".mjh-jyzs"))
    // 学员作品
    xxk2($(".mjh-jysj",".mjh-xyzpbt"))
    // 优逸视频
    xxk2($(".mjh-jysj",".mjh-yyspbt"))
    // 优逸新闻
    xxk2($(".mjh-jysj",".mjh-yyxwbt"))
    // 热门问题
    xxk2($(".mjh-jysj",".mjh-rmwtbt"))
    // 荣誉证书
    xxk2($(".mjh-jysj",".mjh-ryzsbt"))
    // 合作企业
    xxk2($(".mjh-jysj",".mjh-hzqybt"))





});