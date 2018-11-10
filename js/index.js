/*
* @Author: sisi
* @Date:   2018-10-23 10:25:30
* @Last Modified by:   sisi
* @Last Modified time: 2018-10-26 11:23:45
*/
$(function(){
	//文字轮播
	var num=0;
	function goLeft(){
		if(num==-980){
			num=0;
		}
		num-=1;
		$('.carouselText').css({
			left:num
		})
	}
	var timer=setInterval(goLeft, 10);


	// 选项卡
	var num1=0;

	$('.navTabs>li').each(function(index,item){
		$(item).click(function(){
			$('.navTabs>li').removeClass('current');
			// $(item).css('border-bottom','3px solid #000');
			$(item).addClass('current');
			function move(){
				if(index==0){
					num1=-0;
				}else if(index==1){
					num1=-1280;
				}else if(index==2){
					num1=-2555;
				}
				$('.tabContent').css({
					'margin-left':num1
				});
				console.log(num1,index);
			}
			move();
			
		});
	});

	var long=0;
	$('.icon-arrow1').click(function(){
		if(long>=-2555){
			long=long-1280;
			$('.tabContent').css({
				'margin-left':long
			});
		}
	});
	$('.icon-arrow').click(function(){
		if(long<=-1280){
			long=long+1280;
			$('.tabContent').css({
				'margin-left':long
			});
		}
	});

})