window.onload=function(){
	var ostgame=document.getElementById('stgame');
	ori_step=0;
	ostgame.onclick=function(){
		ostgame.disabled=true;
		var gamediv=document.getElementsByClassName('game');
		var map_step=[0,1,2,3,5,7,9,11,13,17,16,15,14,12,10,8,6,4];
		var total_step=parseInt(Math.random()*72) + 36;
//		var total_step=20;
		var step_count=0;
		var timer = null;
		if(timer == null){
			timer = setInterval(spin,100);
		}
		function spin(){
					step_count++;
					if (step_count<=total_step){
						var step=(ori_step+1)%18;
						var mstep=map_step[step];
						var mori_step=map_step[ori_step];
//						console.log(step);
						gamediv[mori_step].classList.remove("game-select");
						gamediv[mstep].classList.add("game-select");
						ori_step=step;
					}
					else{
						clearInterval(timer);
						timer = null;
						ostgame.disabled=false;
					}
					
				}
		
//		
		
	}














}