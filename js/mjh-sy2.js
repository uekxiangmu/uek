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
        $(".mjh-wtfqy-xh",this).css("color","transparent")
        $(".mjh-wtfqx",this).show()
        $(this).toggleClass('active');
    },function(){
        $(".mjh-wtfqy-bt",this).css("color","#222")
        $(".mjh-wtfqy-xh",this).css("color","#ccc")
        $(this).toggleClass('active');
        $(".mjh-wtfqx",this).hide()
    })

    // 优逸新闻 中间选项卡
    $(".mjh-yyxw-zhxwbt").click(function(){
        var index=$(this).index()
        $(".mjh-yyxw-zhxwbt").css("color","#ccc").eq(index).css("color","transparent")
        $("img",".mjh-yyxw-zhxwbt").attr("src","images/mjh/syxw_12.png").eq(index).attr("src","images/mjh/syxw_05.png")
    })

    // 选项卡
    function xxk2(zd,bd){
        zd.mouseover(function() {
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
    xxk2($(".mjh-jysj",".mjh-xyzpbt"),$(".mjh-xyzp"))
    // 优逸视频
    xxk2($(".mjh-jysj",".mjh-yyspbt"))
    // 优逸新闻
    xxk2($(".mjh-jysj",".mjh-yyxwbt"),$(".mjh-yyxw-ybxw"))
    // 热门问题
    xxk2($(".mjh-jysj",".mjh-rmwtbt"),$(".mjh-rmwt"))
    // 荣誉证书
    xxk2($(".mjh-jysj",".mjh-ryzsbt"),$(".mjh-ryzs"))
    // 合作企业
    xxk2($(".mjh-jysj",".mjh-hzqybt"),$(".mjh-hzqy"))


    // 滚动条
    function gdt(nk,wk,dt,bn){
        var nkw=parseInt(nk.css("width")) 
        var wkw=parseInt(wk.css("width")) 
        var dtw=parseInt(dt.css("width"))
        bn.css("width",wkw/nkw*dtw)
        var bnw=parseInt(bn.css("width"))
        bn.css("left",parseInt(nk.css("margin-left"))/nkw*dtw)

        dt.click(function(e) {
            var ox=e.offsetX-bnw/2
            if(ox<=0){ox=0}
            if(ox>=dtw-bnw){ox=dtw-bnw}
            bn.css("left",ox)
            nk.css("margin-left",-ox/dtw*nkw)
            // wk.scrollLeft(ox/dtw*nkw)
        });
        bn.click(function(e){e.stopPropagation()})

        bn.mousedown(function(e) {
            var lenx=e.clientX-bn[0].offsetLeft
            $(document).mousemove(function(e) {
                var gy=e.clientX-lenx
                // console.log(e.clientX,lenx)
                if(gy<=0){gy=0}
                if(gy>=dtw-bnw){gy=dtw-bnw}
                bn.css("left",gy)
                nk.css("margin-left",-gy/dtw*nkw)
            });
            e.preventDefault()
            $(document).mouseup(function() {
                $(document).unbind("mousemove")
                $(document).unbind("mouseup")
            });
        });
    }

    // 学员作品滚动条
    gdt($(".mjh-zpzs-zpk").eq(0),$(".mjh-zpzs-zpl").eq(0),$(".mjh-zpzs-xian").eq(0),$(".mjh-zp-dhbnt").eq(0))
     gdt($(".mjh-zpzs-zpk").eq(1),$(".mjh-zpzs-zpl").eq(1),$(".mjh-zpzs-xian").eq(1),$(".mjh-zp-dhbnt").eq(1))
      gdt($(".mjh-zpzs-zpk").eq(2),$(".mjh-zpzs-zpl").eq(2),$(".mjh-zpzs-xian").eq(2),$(".mjh-zp-dhbnt").eq(2))
       gdt($(".mjh-zpzs-zpk").eq(3),$(".mjh-zpzs-zpl").eq(3),$(".mjh-zpzs-xian").eq(3),$(".mjh-zp-dhbnt").eq(3))



    // 热门问题滚动条
    gdt($(".mjh-wtqy").eq(0),$(".mjh-rmwt").eq(0),$(".mjh-wt-dhx").eq(0),$(".mjh-wt-dhbnt").eq(0))
    gdt($(".mjh-wtqy").eq(1),$(".mjh-rmwt").eq(1),$(".mjh-wt-dhx").eq(1),$(".mjh-wt-dhbnt").eq(1))
    gdt($(".mjh-wtqy").eq(2),$(".mjh-rmwt").eq(2),$(".mjh-wt-dhx").eq(2),$(".mjh-wt-dhbnt").eq(2))

});