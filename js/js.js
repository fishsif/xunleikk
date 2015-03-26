$(function(){

	// 定时器
	var timer='';
	// 索引
	var i=0;

	// input表单获得焦点
	$('.search_text').focus(function(){
		$(this).attr('value','');
		$(this).removeClass().addClass('blue');

	})

	// 表单失去焦点
	$('.search_text').blur(function(){
		$(this).removeClass('blue').addClass('search_text');
	})

// 头部右边隐藏盒子
// hide相当于display:none
	$('.user_r').hover(function(){
		$('.hidden_r').show();
	},function(){
		$('.hidden_r').hide();
	})

	// 中间隐藏盒子文字样式
	// 也可以合到下面写
	$('.hidden_m_top span').mouseover(function(){
		// 去除样式不能用$(this)
		$('.hidden_m_top span').removeClass("span_style");
		$(this).addClass('span_style');
	})
	// 用hover：
// $('.hidden_m_top span').hover(function(){
// 	$(this).addClass('span_style');
// },function(){
// 	$(this).removeClass('span_style');
// })
	

	// 头部右侧中间隐藏盒子移入
	$('.user_m').hover(function(){
		$('.hidden_m').show();
	},function(){
		$('.hidden_m').hide();
	})
	// 中间隐藏盒子切换效果
	// 不设置mouseout
	$('span.history').mouseover(function(){
		$('.history_box').show();
	})
	$('span.update').mouseover(function(){
		$('.history_box').hide();
		$('.user_m .hidden_m').show();

	})

	// !!!轮换版
	$('.smal_pic li').mouseover(function(){
		clearInterval(timer);
		var backImg=$(this).find('img').attr('backImg');
		var backColor=$(this).find('img').attr('backColor');
		var background='url('+backImg+') '+'no-repeat center '+backColor;
		$('#focus_background').css({background:background});
		$(this).addClass('hover').siblings().removeClass('hover');
		i=$(this).index();
		$('.focus_title a').eq(i).show().siblings('a').hide();
	})

	// 移出小图片开启定时器
	$('.smal_pic li').mouseout(function(){
		timer=setInterval(move,5000);
	})


	timer=setInterval(move,5000);

	function move(){
		if(i>11){
			i=0;
		}
		var backImg=$('.smal_pic li').eq(i).find('img').attr('backImg');
		var backColor=$('.smal_pic li').eq(i).find('img').attr('backColor');
		var background='url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		$('#focus_background').css({background:background});
		$('.smal_pic li').eq(i).addClass('hover').siblings().removeClass('hover');
		$('.focus_title a').eq(i).show().siblings('a').hide();
		i++;

	}
})