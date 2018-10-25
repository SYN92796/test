     
var banner = document.getElementsByClassName("banner")[0];
var pics = banner.getElementsByClassName("pic");
var span= banner.getElementsByTagName("span");
var index = 0;
var timer = null;
for(var i = 0;i<pics.length;i++){
	pics[i].style.opacity = 0;
}
pics[index].style.opacity = 1;
function go(num){
	pics[index].style.opacity =0;
	pics[num].style.opacity =1;
	span[index].className = "";
	span[num].className = "now";
	index = num;
}
function auto(){
	timer = setInterval(function(){
		var n = index;
		n++;
		if(n>=pics.length){n=0};
		go(n);
	},2000)
}
banner.onmouseover = function(){
	clearInterval(timer)
}
banner.onmouseout = function(){
	auto()
}
auto();
for(var i = 0;i<span.length;i++){
	(function(j){
		span[j].onmouseover = function(){
			go(j)
		}
	}(i))
}			
//倒计时
var lo = document.getElementById("tm");
var lo1 = document.getElementById("tm1");
var lo2 = document.getElementById("tm2");
var lo3 = document.getElementById("tm3");
function shijian(sj,time){
	var d = new Date(sj);
	var t = d.getTime();
	var t2 = new Date();
	var d2 = t2.getTime();
	var d4 = (t-d2);
	var r=parseInt(d4/1000);
	var h = Math.floor(r/(3600*24));
	var x = Math.floor((r-(h*3600*24))/(60*60));
	var m =Math.floor((r-((h*3600*24)+(60*60*x)))/60);
	var c =Math.floor(r-((h*3600*24)+(60*60*x)+(60*m)));
	time.innerHTML = x+":"+m+":"+c;
}
setInterval(function() {
		shijian("2019,1,01",lo);
		},1000);	  	
						
setInterval(function(){	
		shijian("2019,1,01",lo1);
		},1000);	  	
setInterval(function(){	
		shijian("2019,1,01",lo2);
		},1000);	  	
setInterval(function(){	
		shijian("2019,1,01",lo3);
		},1000);		
//ajax
$("#ipt").keyup(function(){
	var $v = $(this).val();
	$.ajax({
		type:"get",
		url:"https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + $v + "&cb=?",
		async:true,
		dataType:"jsonp",
		success:function(res){
			var d = res.s;
			$(".lis1-1").empty();
			$.each(d,function(i,v){
				var $li = $("<li>");
				$li.html(v);
				$(".lis1-1").append($li);
			});
		}
	});
});		
$("#ipt").keyup(function(){
	$(".lis1-1").css("display","block")
}).blur(function(){
	$(".lis1-1").css("display","none")
})

$(function(){
	//广告轮播
	function move(){
		$(".note .conter ul").animate({"margin-top":"-30px"},800,function(){
			$(this).css("margin-top",0);
			$(".note ul li").first().appendTo($(".note ul"));
		});
	}
	setInterval(move,3000);

	/*左侧边栏回到顶部*/
	$('#toTop').click(function(){
		$('html,body').animate({scrollTop:0},'slow');//慢慢回到页面顶部
	});
	$(window).scroll(function(){
		if($(this).scrollTop() < 500) {
			$('#toTop').fadeOut('slow');//toTop按钮淡出
		} else {
			$('#toTop').fadeIn('slow');//反之按钮淡入
		}
	});

	/*右侧边栏*/
	$('#step1').click(function(){
		$('html,body').animate({scrollTop:730},'slow');
	});
	$('#step2').click(function(){
		$('html,body').animate({scrollTop:2200},'slow');
	});
	$('#step3').click(function(){
		$('html,body').animate({scrollTop:3910},'slow');
	});
	$('#step4').click(function(){
		$('html,body').animate({scrollTop:4600},'slow');
	});
	$('.toTop').click(function(){
		$('html,body').animate({scrollTop:0},'slow');
	});
	//点击按钮滚动到指定楼层
	$(window).scroll(function(){
		var height=$(window).scrollTop();
		if(height>600 && height<2200){
			$('#step1').addClass("active");
		}else{
			$('#step1').removeClass("active");
		}
		if(height>2200 && height<3900){
			$('#step2').addClass("active");
		}else{
			$('#step2').removeClass("active");
		}
		if(height>3900 && height<4600){
			$('#step3').addClass("active");
		}else{
			$('#step3').removeClass("active");
		}
		if(height>4600){
			$('#step4').addClass("active");
		}else{
			$('#step4').removeClass("active");
		}	
	});
});

