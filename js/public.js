//头部固定
	// $(window).scroll(function(){
	// 	if($("body").scrollTop()<=70){
	// 		$(".header").removeClass("headerScroll");
	// 	}else{
	// 		$(".header").addClass("headerScroll").css({
	// 		     height:'0px',
	// 		}).animate({
	// 			height:'70px',
	// 		},1000).delay(1000).css({
	// 			height:'70px',
	// 		});
	// 	}

	// })	


//左侧导航栏的展开
	var kuan;
	$("#show").click(function(){
		$("#bannerLeft").animate({"left":0},500);
		$("#cha").css({"visibility":"visible"});
		// kuan=$("#bannerLeft").outerWidth();
		
		
	})
		
//左侧导航栏的叉号
	$("#cha").click(function(event){
		var ev=ev||window.event;
		if ( ev && ev.preventDefault ){
     			ev.preventDefault();
     		} 
	     	else{
	        	ev.returnValue = false;  
	     	}
		kuan=$("#bannerLeft").outerWidth();
		console.log(kuan);
	$("#bannerLeft").animate({"left":'-'+(kuan-60)},500);
	$("#cha").css({"visibility":"hidden"});

	})

//头部右侧图标
	$(".header-icon").click(function(ev){
		ev=ev||window.event;
		$("#bannerLeft").css({"display":"block"}).animate({"left":"0",width:'100%'},500);
		$("#cha").css({"visibility":"visible"}).click(function(){
			window.location.href=$('.load').attr('href');
			$("#bannerLeft").animate({"left":'-'+kuan-60,width:kuan+60},500);
			$("#cha").css({"visibility":"hidden"});
		});

		

	})



//搜索框
	$("input").focus(function(){
		$(".search").css("border","1px solid pink");
	}).blur(function(){
		$(".search").css("border","1px solid #76838f");
	})
//导航列表加号 //加号变减号
	$(".List span").click(function(){
		$(this).siblings(".List li ul").slideToggle();
		var t=$(this).text();
		t=="+"?t="–":t="+";
		$(this).text("+");
		$(this).text(t).css("font-size","30px");
	})
//右侧导航
	// console.log($(".dian"));
	$(".dian li span").hover(function(){
		$(this).parent("li").find(".zhiyin").toggle();
	})


//右侧导航
$(".banner-right ul li").click(function(){
	var n=$(this).index();//每个li的索引
	console.log($(".one").eq(n).offset().top);//获取div距离顶部的距离
	var juLi=$(".one").eq(n).offset().top-70;//让div距离顶部有70px
	if(n==0){
		$("body,html").animate({"scrollTop":"0"},600);//返回顶部的按钮，scrollTop=0
		//写body,html为了兼容火狐谷歌
	}
	else{
		$("body,html").animate({"scrollTop":juLi+"px"},600);//body的scrollTop==div与顶部的距离
	}
	return false;
})

//去顶部

$(window).scroll(function(){
	if($("body,html").scrollTop()>0){
		if($("body,html").scrollTop()>400){
			$(".gotoTop").fadeIn(1000);
		}
		else{
			$(".gotoTop").fadeOut(1000);
		}
	}
	else{
		if($("body").scrollTop()>400){
			$(".gotoTop").fadeIn(1000);
		}
		else{
			$(".gotoTop").fadeOut(1000);
		}
	}
	
})
$(".gotoTop").click(function(){
	$("body,html").animate({"scrollTop":"0"},600);
})

