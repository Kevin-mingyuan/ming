$(function(){
	var cook_obj = JSON.parse(getCookie("username"))
	var token = cook_obj.token;
	$.get("http://47.104.244.134:8080/cartlist.do",{token:token},
	function(data){
		console.log(data);
		for(var i = 0; i < data.length; i++){
			// console.log(data[i]);
			var str = `<li data-id='${data[i].id}' sp-id='${data[i].gid}'><h4>${data[i].goods.name}</h4><img src='${data[i].goods.picurl}'>
			<p>${data[i].goods.price}</p>
			<input type='button' value='-' class='jian' />
			<span>${data[i].count}</span>
			<input type='button' value='+' class='jia' />
			<span id='del'>删除</span>
			</li>`;
			$("#cart").append(str);
		}
	});
	
	$("#cart").on("click",".jian",function(){
		// 购物车中商品编号
		var shopid = $(this).parent().attr("sp-id");
		// 商品编号
		var id = $(this).parent().attr("data-id");
		
		$(this).next().text(function(index,text){
			if(Number(text) == 0){
				$(".jian").attr("disabled","disabled");
				$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:shopid,num:0,token:1152},
					function(data){
						console.log(data);
					}
				)
				return 0;
			}
			return text-1;
		})
		
		console.log(id,shopid);
		$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:shopid,num:-1,token:1152},
			function(data){
				console.log(data);
			}
		)
	});
	
	$("#cart").on("click",".jia",function(){
			
			$(this).prev().text(function(index,text){
				return Number(text) + Number(1);
			})
			
			// 购物车中商品编号
			var shopid = $(this).parent().attr("sp-id");
			// 商品编号
			var id = $(this).parent().attr("data-id");
			
			console.log(id,shopid);
			$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:shopid,num:1,token:1152},
				function(data){
					console.log(data);
				}
			)
		});
		
		$("#cart").on("click","#del",function(){
			var shopid = $(this).parent().attr("sp-id");
			// 商品编号
			var id = $(this).parent().attr("data-id");
			
			$.get("http://47.104.244.134:8080/cartupdate.do",{id:id,gid:shopid,num:0,token:1152},
				function(data){
					console.log(data);
				}
			);
			$(this).parent().remove();
		})
})
