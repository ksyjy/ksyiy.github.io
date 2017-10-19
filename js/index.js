// ---------------------主页index.html-----------------------//
// 鼠标滚动到指定位置时，元素上升
$(window).scroll(function(){
	if($("body,html").scrollTop()>0){
		if($("body,html").scrollTop()>$(".banner").offset().top){
			$(".mianXilie").find(".title").addClass("up");
		}
		if($("body,html").scrollTop()>$(".mianXilie").offset().top){
			$(".newsRight").addClass("up");
		}
		if($("body,html").scrollTop()>$(".news").offset().top){
			$(".introduced").addClass("up");
		}
		if($("body,html").scrollTop()>$(".about").offset().top){
			$(".touming ul").addClass("up");
		}
		if($("body,html").scrollTop()>$(".touming").offset().top-80){
			$(".boke").find(".title").addClass("up");
		}
		if($("body,html").scrollTop()>$(".touming").offset().top-100){
			$(".bokeLeft").addClass("up");
			$(".bokeRight").addClass("up");
		}
	}
	else{
		if($("body").scrollTop()>$(".banner").offset().top){
			$(".mianXilie").find(".title").addClass("up");
		}
		if($("body").scrollTop()>$(".mianXilie").offset().top){
			$(".newsRight").addClass("up");
		}
		if($("body").scrollTop()>$(".news").offset().top){
			$(".introduced").addClass("up");
		}
		if($("body").scrollTop()>$(".about").offset().top){
			$(".touming ul").addClass("up");
		}
		if($("body").scrollTop()>$(".touming").offset().top-80){
			$(".boke").find(".title").addClass("up");
		}
		if($("body").scrollTop()>$(".touming").offset().top-100){
			$(".bokeLeft").addClass("up");
			$(".bokeRight").addClass("up");
		}
	}
})	


//banner轮播图
	$(".banner").mouseover(function(){
		clearInterval(t);
	}).mouseout(function(){
		t=setInterval(fun,3000);
	})
	
	var n=0;
	$(".yuandian li").click(function(){
		clearInterval(t);
		n=$(this).index();
		$(this).addClass("current").siblings().removeClass("current");
		$(".banner img").eq(n).css("display","block").siblings("img").css("display","none");				
	})
	
	function fun(){
		n++;
		if(n>3){
			n=0;
		}
		$(".yuandian li").eq(n).addClass("current").siblings().removeClass("current");
		$(".banner img").eq(n).css("display","block").siblings("img").css("display","none");	
	}
	var t=setInterval(fun,3000);
		
//第一部分春夏系列 鼠标移上去需要显示的覆盖上去的over内容	
	$(".XiLie-img li").mouseenter(function(){
		$(this).find(".over").fadeIn();
		$(this).find(".overContent").animate({"margin-top":"12%"},400);

	}).mouseleave(function(){
		$(this).find(".over").fadeOut();
		$(this).find(".overContent").animate({"margin-top":"10%"},400);

	})

//透明部分的数字增加
	var timer;
	var a=0;
		$(window).scroll(function(){
			if($("body,html").scrollTop()>0){
				a=$("body,html").scrollTop();
			}
			else{
				a=$("body").scrollTop();
			}
			if(a>=$(".about").offset().top+50){
				timer=setInterval(jishu,50);
			}		
		})
		function jishu(){
			if(Number($(".num1").html())>=82){
				clearInterval(timer);
			}
			else{
				$(".num1").html(Number($(".num1").html())+1);
			}
			if(Number($(".num22").html())>=100){
				clearInterval(timer);
			}
			else{
				$(".num22").html(Number($(".num22").html())+1);
			}
			if(Number($(".num3").html())>=130){
				clearInterval(timer);
			}
			else{
				$(".num3").html(Number($(".num3").html())+1);
			}
			if(Number($(".num4").html())>=180){
				clearInterval(timer);
			}
			else{
				$(".num4").html(Number($(".num4").html())+1);
			}
		}
		
//进度条
$(".introduced").find("span").children("a").mouseover(function(){
	$(this).next(".jindu").animate({"width":"98%"},500);
	$(this).parent("span").animate({"margin-left":"40px"},500);
}).mouseleave(function(){
	$(this).next(".jindu").animate({"width":"0"},500);
	$(this).parent("span").animate({"margin-left":"35px"},500);

})

//滚到哪里 对应的小点变色
$(window).scroll(function(){
	//第一个点
	if($("body").scrollTop()>70 && $("body").scrollTop()<$(".mianXilie").outerHeight()+70){
		$(".li1").css({"font-size":"60px","color":"#323232"});
	}
	else{
		$(".li1").css({"font-size":"40px","color":"#c7cdd2"});
	}
	//第二个点
	if($("body").scrollTop()>$(".mianXilie").offset().top && $("body").scrollTop()<$(".news").outerHeight() + $(".mianXilie").offset().top){
		$(".li2").css({"font-size":"60px","color":"#323232"});
		
	}
	else{
		$(".li2").css({"font-size":"40px","color":"#c7cdd2"});
	}
	//第三个点
	if($("body").scrollTop()>$(".news").offset().top && $("body").scrollTop()<$(".about").outerHeight() + $(".news").offset().top -100){
		$(".li3").css({"font-size":"60px","color":"#323232"});
	}
	else{
		$(".li3").css({"font-size":"40px","color":"#c7cdd2"});
	}
	//第四个点
	if($("body").scrollTop()>$(".about").offset().top && $("body").scrollTop()<$(".touming").outerHeight() + $(".about").offset().top){
		$(".li4").css({"font-size":"60px","color":"#323232"});
	}
	else{
		$(".li4").css({"font-size":"40px","color":"#c7cdd2"});
	}
	//第五个点
	if($("body").scrollTop()>$(".touming").offset().top && $("body").scrollTop()<$(".boke").outerHeight() + $(".touming").offset().top){
		$(".li5").css({"font-size":"60px","color":"#323232"});
	}
	else{
		$(".li5").css({"font-size":"40px","color":"#c7cdd2"});
	}

})