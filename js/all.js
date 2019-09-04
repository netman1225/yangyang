window.onload=function(){
	var opgup=document.getElementById('pgup');
	var opgdown=document.getElementById('pgdown');
	var oimg=document.getElementsByClassName('image');
	var oimglink=document.getElementsByClassName('image-link');
	var ocpage=document.getElementById('cpage');
	var pagenum=1;
	opgdown.onclick=function(){
		if(pagenum<10){
			pagenum++;
			var imgsrc=(pagenum-1)*6;
			for(i=1; i<=6 ; i++){
				imgsrc++;
				oimg[i-1].getAttributeNode('src').value="img/"+imgsrc+".jpg";
				oimglink[i-1].getAttributeNode('href').value="img/"+imgsrc+".jpg";
			}
			ocpage.innerHTML=pagenum+"/10";

		}
			

	}
	
	opgup.onclick=function(){		
		if(pagenum>1){
			pagenum--;
			var imgsrc=(pagenum-1)*6;
			for(i=1; i<=6 ; i++){
				imgsrc++;
				oimg[i-1].getAttributeNode('src').value="img/"+imgsrc+".jpg";
				oimglink[i-1].getAttributeNode('href').value="img/"+imgsrc+".jpg";
			}
			ocpage.innerHTML=pagenum+"/10";
		
		}
	
	}
	
}
