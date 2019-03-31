function islogin(){
	
	var obj = getCookie("username");
	if(obj){
		var obj = JSON.parse(obj);
		name = obj.name;
		token = obj.token;
		console.log(name,token);
		var str = `<span>${name}</span><span id='tuichu'>退出</span>`;
		$("#header").html(str);
	}
	$("#tuichu").click(function(){
		$(this).parent().remove();
		removeCookie("username");
	})
}
islogin();

$.get("http://47.104.244.134:8080/goodsbytid.do",{tid:13,page:1,limit:10},function(data){
	console.log(data.data);
	var data_two = data.data;
	for(let i = 0; i < data_two.length; i++){
		// console.log(i);
		// console.log(data_two[i].name);datail.html?id=${data_two[i].id}
		var str = `<a href='datail.html?id=${data_two[i].id}' target='_blank' ><li data-id='${data_two[i].id}'><h4>${data_two[i].name}</h4>
		<img src='${data_two[i].picurl}' /><p class='jiage'>${data_two[i].price/100}</p>
		<a href="cart.html"><input type='button' data-id='${data_two[i].id}' value='加入购物车' id="add" /></a>
		</li></a>`

		$("#list").append(str);
	}
})

$("#list").click(function(event){
	if(event.target.id == "add"){
		// console.log(event.target);  点击时候
		console.log(11);
		var gid = $(event.target).attr("data-id");
		// console.log(gid);
		var cook_obj = JSON.parse(getCookie("username"))
		var token = cook_obj.token;
		
		// console.log(token);
		$.get("http://47.104.244.134:8080/cartsave.do",{gid:gid,token:1152},function(){
			location.href = 'cart.html';
		});
	}
	
});