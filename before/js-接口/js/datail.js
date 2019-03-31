function islogin(){
	
	var obj = getCookie("username");
	if(obj){
		var obj = JSON.parse(obj);
		name = obj.name;
		token = obj.token;
		// console.log(name,token);
		var str = `<span>${name}</span><span id='tuichu'>退出</span>`;
		$("#header").html(str);
	}
	$("#tuichu").click(function(){
		$(this).parent().remove();
		removeCookie("username");
	})
}
islogin();



$(function(){
	var a=location.search;
	var spid = a.split("=");
	var id = spid[1];
	// console.log(id);
	
	$.get("http://47.104.244.134:8080/goodsbyid.do",{id:id},
	function(data){
		console.log(data);
		var str = `<li><h4>${data.name}</h4><img src='${data.picurl}'>
		<p>${data.info}</p><p>¥${data.price/100}</p>
		<input type='button' data-id='${data.id}' value='加入购物车' id="add" /></li>`
		$("#datail").html(str);
	})
});

$("#datail").click(function(event){
	if(event.target.id == "add"){
		var gid = $(event.target).attr("data-id");
		// console.log(gid);
		var cook_obj = JSON.parse(getCookie("username"))
		var token = cook_obj.token;
		
		// console.log(token);
		$.get("http://47.104.244.134:8080/cartsave.do",{gid:gid,token:1152},function(){
			location.href = 'cart.html';
		})
	}
});
