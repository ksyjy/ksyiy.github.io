//-----------------婚纱礼服dress.html---------------//
//第一行列表
$(".dress-main-nav-content").children("ul").children("li").click(function(){
	$(".yincang").children("div").eq($(this).index()).show().siblings().hide();
	$(this).css({"background":"#ebc3c5","color":"white"}).siblings().css({"background":"#f5f5f5","color":"#323232"});
});
//鼠标移上去 出现的两个黑块：快速查看和查看详情
$(".all").find("img").parent("div").mouseover(function(){
	$(".chakan").animate({"margin-top":"45%"},300);
	$(".xiangqing").animate({"margin-top":"15%"},300);
	$(this).find(".look").show();

})
//鼠标离开
$(".all").find("img").parent("div").mouseleave(function(){
	$(".chakan").finish().css({"margin-top":"25%"});
	//要在上面的移入事件完成之后再进行还原原位置，加个finish()方法
	$(".xiangqing").finish().css({"margin-top":"60%"});
	$(this).find(".look").css('display','none');	
})

//点击快速查看时出来的窗口
var i=0;
$(".chakan").click(function(){
	i=$(this).attr("index");//自定义属性的值赋给i
	$(".box").show();
	$(".buy").eq(i).show().siblings(".buy").hide();
	$("body,html").animate({"scrollTop":"0"},10);

	//右边按钮、下一个
	$("#next").click(function(){
		i++;
		if(i>14){
			i=0;
		}
		$(".buy").eq(i).show().siblings(".buy").hide();
	})
	//左边按钮、上一个
	$("#pre").click(function(){
		i--;
		if(i<0){
			i=14;
		}
		$(".buy").eq(i).show().siblings(".buy").hide();
	})

//左右箭头的样式
$("#pre").mouseover(function(){
	$("#pre").css({"left":0});
}).mouseleave(function(){
	$("#pre").css({"left":"12px"});
})

$("#next").mouseover(function(){
	$("#next").css({"right":0});
}).mouseleave(function(){
	$("#next").css({"right":"12px"});
})


	//数量的增减
	var num2=$(".num2").eq($(this).attr("index")).text();
	$(".jian").click(function(){
		num2=Number(num2)-1;
		if(num2<1){
			num2=1;
		}
		$(".num2").text(num2);
	})
	$(".add").click(function(){
		num2=Number(num2)+1;
		$(".num2").text(num2);
	})
		
	//关掉窗口
	$(".off").click(function(){
		$(".num2").text(1);
		$(".box").hide();
		
	})
})

// 元素上升
$(".yincang").find(".all").addClass("up");
	

//
//
//	 var Left,a,b;
//	 $(".dress-main-nav-content ul").mousedown(function(event){
//	 		a=event.pageX;//按键按下的位置
//	 		over();
//	 })
//	 function over(event){
//	 		$(this).mousemove(function(event){	
//	 			b=event.pageX;//鼠标移动后的位置
//	 			Left=a-b;
//	 			$(".dress-main-nav-content ul").css({"margin-left":-Left});
//	 		})
//	 	}
//	 $(".dress-main-nav-content ul").mouseup(function(event){
//	 	var w=over;
//	 	$(this).unbind('mousemove',w);
//	 })