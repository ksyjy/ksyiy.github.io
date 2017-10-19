//-------------------第一篇博客的详情页boke2.html-------------------//

//点击图片，出来图片详情
var m=0;
$("#boke-content img").click(function(){
	m=$(this).attr("i");
	$(".boke-yincang").show();
	$(".ycimg").eq(m).show().siblings(".ycimg").hide();
	$(".boke-yincang-footer2 img").eq(m).css({"border-color":"pink"}).siblings("img").css({"border-color":"white"});
})

//点击×号
$(".yc").click(function(){
	$(".boke-yincang").hide();
})

//向前的按钮
$(".bo-pre").click(function(){
	m--;
	if(m<0){
		m=15;
	}
	$(".ycimg").eq(m).show().siblings(".ycimg").hide();
	$(".boke-yincang-footer2 img").eq(m).css({"border-color":"pink"}).siblings("img").css({"border-color":"white"});
})

//向后的按钮
$(".bo-next").click(function(){
	m++;
	if(m>15){
		m=0;
	}
	$(".ycimg").eq(m).show().siblings(".ycimg").hide();
	$(".boke-yincang-footer2 img").eq(m).css({"border-color":"pink"}).siblings("img").css({"border-color":"white"});
})
var ii=1;
$(".suoxiao").click(function(){
	$(".ycimg").eq(m).css({"transform":"scale("+ii+")"});
	ii=ii-0.1;
})
$(".fangda").click(function(){
	$(".ycimg").eq(m).css({"transform":"scale("+ii+")"});
	ii=ii+0.1;
})
$(".xiazai").click(function(){
	$(".ycimg").eq(m).download();
})



//底部
$(".boke-yincang-footer1").click(function(){
	$(".boke-yincang-footer2").toggleClass("xiangxia");
	$(".boke-yincang-footer1").toggleClass("bottom");
})