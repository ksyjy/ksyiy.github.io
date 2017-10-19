//----------------注册表单验证-------------//
	
	//获取焦点时的input边框样式
	$(".form-group").find("input").focus(function(){
		$(this).css({"border":"1.5px solid #ebc3c5"})
	}).blur(function(){
		$(this).css({"border":"1.5px solid #ccc"})
	})

	//会员名
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

	//邮箱
	function emails(){
		if($("#email").val()==""){
			$("#email").siblings(".panduan").text("*请输入邮箱");
			return false;
		}
		else if($("#email").val().match(/^[\w-]+@[\w-]+(\.\w+){1,3}$/) === null){
			$("#email").siblings(".panduan").text("*邮箱格式不正确");
			return false;
		}
		else{
			$("#email").siblings(".panduan").text(" ");
			return true;
		}
	}

	//密码
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

	//重复密码
	function repwds(){
		if($("#repwd").val()==""){
			$("#repwd").siblings(".panduan").text("*请再一次输入密码");
			return false;
		}
		else if($("#repwd").val()!=$("#pwd").val()){
			$("#repwd").siblings(".panduan").text("*两次密码不一致");
			return false;
		}
		else{
			$("#repwd").siblings(".panduan").text(" ");
			return true;
		}
	}

	//验证码
	var shuzi=0;
	$(".yanzhengma").find("img").click(function(){
		$(this).next("img").show().siblings("img").hide();
		shuzi=Number($(this).index())+1;
	})	
	var anum=[["RACK"],["R75G"],["iPKQ"],["Q96Q"],["55BJ"],["NIPM"],["22KB"],["S2MA"],["5AM7"],["P2LL"],["RQR4"]];
	function yanzhengs(){
		if($("#yanzheng").val()==""){
			$("#yanzheng").siblings(".panduan").text("*请输入验证码");
			return false;
		}
		else if($("#yanzheng").val().toString().toLowerCase()!=anum[shuzi].toString().toLowerCase()){
			$("#yanzheng").siblings(".panduan").text("*验证码错误");
			return false;
		}
		else if($("#yanzheng").val().toString().toLowerCase()==anum[shuzi].toString().toLowerCase()){
			$("#yanzheng").siblings(".panduan").text(" ");
			return true;
		}
	}

	function zhuce(){
		return user()&&emails()&&pwds()&&repwds()&&yanzhengs();
	}