// -------------------博客文章页面article.html-----------------//

// 页面初加载的时候，上升的元素
$(".a").addClass("up");
$(".aa").addClass("up");
$(".aaa").addClass("up");

// 鼠标滚动时，元素上升
$(window).scroll(function(){
	if($("body,html").scrollTop()>0){
		if($("body,html").scrollTop()>$(".recommend ").offset().top-10){
			$(".products").addClass("goleft");
		}
		if($("body,html").scrollTop()>$(".a").offset().top-150){
			$(".b").addClass("up");
		}
		if($("body,html").scrollTop()>$(".aa").offset().top-160){
			$(".bb").addClass("up");
		}
		if($("body,html").scrollTop()>$(".b").offset().top-10){
			$(".c").addClass("up");
		}
		if($("body,html").scrollTop()>$(".bb").offset().top){
			$(".cc").addClass("up");
		}
		if($("body,html").scrollTop()>$(".c").offset().top){
			$(".d").addClass("up");
		}
		if($("body,html").scrollTop()>$(".cc").offset().top){
			$(".dd").addClass("up");
		}
		if($("body,html").scrollTop()>$(".d").offset().top){
			$(".e").addClass("up");
		}
		if($("body,html").scrollTop()>$(".dd").offset().top){
			$(".ee").addClass("up");
		}
		if($("body,html").scrollTop()>$(".author").offset().top){
			$(".boke1").addClass("goleft");
		}
		if($("body,html").scrollTop()>$(".author").offset().top+10){
			$(".boke2").addClass("goleft");
		}
		if($("body,html").scrollTop()>$(".author").offset().top+50){
			$(".boke3").addClass("goleft");
		}
		if($("body,html").scrollTop()>$(".author").offset().top+100){
			$(".boke4").addClass("goleft");
		}
		if($("body,html").scrollTop()>$(".author").offset().top+150){
			$(".boke5").addClass("goleft");
		}
		if($("body,html").scrollTop()>$(".author").offset().top+200){
			$(".boke6").addClass("goleft");
		}
	}
	else{
		if($("body").scrollTop()>$(".recommend ").offset().top-10){
			$(".products").addClass("goleft");
		}
		if($("body").scrollTop()>$(".a").offset().top-150){
			$(".b").addClass("up");
		}
		if($("body").scrollTop()>$(".aa").offset().top-160){
			$(".bb").addClass("up");
		}
		if($("body").scrollTop()>$(".b").offset().top-10){
			$(".c").addClass("up");
		}
		if($("body").scrollTop()>$(".bb").offset().top){
			$(".cc").addClass("up");
		}
		if($("body").scrollTop()>$(".c").offset().top){
			$(".d").addClass("up");
		}
		if($("body").scrollTop()>$(".cc").offset().top){
			$(".dd").addClass("up");
		}
		if($("body").scrollTop()>$(".d").offset().top){
			$(".e").addClass("up");
		}
		if($("body").scrollTop()>$(".dd").offset().top){
			$(".ee").addClass("up");
		}
		if($("body").scrollTop()>$(".author").offset().top){
			$(".boke1").addClass("goleft");
		}
		if($("body").scrollTop()>$(".author").offset().top+10){
			$(".boke2").addClass("goleft");
		}
		if($("body").scrollTop()>$(".author").offset().top+50){
			$(".boke3").addClass("goleft");
		}
		if($("body").scrollTop()>$(".author").offset().top+100){
			$(".boke4").addClass("goleft");
		}
		if($("body").scrollTop()>$(".author").offset().top+150){
			$(".boke5").addClass("goleft");
		}
		if($("body").scrollTop()>$(".author").offset().top+200){
			$(".boke6").addClass("goleft");
		}
	}

	
})	

