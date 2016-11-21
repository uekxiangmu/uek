
$(".tcdPageCode").createPage({
    pageCount:100,
    current:1,
    backFn:function(p){
        //console.log(p);
    }
});

var wjfleft=$(".wjf-left-bottom-bottom li");
var wjfleft1=$(".wjf-li-aa");
var leftbox=$(".wjf-left-bottomBox");
console.log(leftbox);
wjfleft.click(function () {
    var index=$(this).index();
    leftbox.removeClass("wjf-active").eq(index).addClass("wjf-active");
    wjfleft1.removeClass("wjf-color").eq(index).addClass("wjf-color");
})
