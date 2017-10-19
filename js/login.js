//------------登录页面的正则验证-----------//

	//验证会员名
	function user(){
		if($("#username").val()==""){
			$("#username").siblings(".panduan").text("*请输入会员名");
			return false;
		}
		else if($("#username").val().search(/^\w{4,12}$/)===-1){
			$("#username").siblings(".panduan").text("*会员名格式是4~12位数字、字母、下划线");
			return false;
		}
		else{
			$("#username").siblings(".panduan").text(" ");
			return true;
		}
	}

	//验证密码
	function pwds(){
		if($("#pwd").val()==""){
			$("#pwd").siblings(".panduan").text("*请输入密码");
			return false;
		}
		else if($("#pwd").val().match(/^[\w]{6,18}$/) === null){
			$("#pwd").siblings(".panduan").text("*密码长度应是6~18位");
			return false;
		}
		else{
			$("#pwd").siblings(".panduan").text(" ");
			return true;
		}
	} 

	function denglu(){
		return user()&&pwds();
	}

	//获得焦点时，input框的样式
	$(".form-group").find("input").focus(function(){
		$(this).css({"border":"1.5px solid #ebc3c5"})
	}).blur(function(){
		$(this).css({"border":"1.5px solid #ccc"})
	})

