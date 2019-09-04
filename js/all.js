window.onload=function(){
	var opgup=document.getElementById('pgup');
	var opgdown=document.getElementById('pgdown');
	var oimg=document.getElementsByClassName('image');
	var oimglink=document.getElementsByClassName('image-link');
	var pagenum=1;
	opgdown.onclick=function(){
		if(pagenum<9){
			pagenum++;
			var imgsrc=(pagenum-1)*6;
			for(i=1; i<=6 ; i++){
				imgsrc++;
				oimg[i-1].getAttributeNode('src').value="img/"+imgsrc+".jpg";
				oimglink[i-1].getAttributeNode('href').value="img/"+imgsrc+".jpg";
			}
//			if(pagenum==7){
//				oimglink[8].style.display="none";
//				oimglink[7].style.display="none";
//				oimglink[6].style.display="none";
//			}		
			
			
		}
			

	}
	
	opgup.onclick=function(){		
		if(pagenum>1){
//			oimglink[8].style.display="inline-block";
//			oimglink[7].style.display="inline-block";
//			oimglink[6].style.display="inline-block";
			pagenum--;
			var imgsrc=(pagenum-1)*6;
			for(i=1; i<=6 ; i++){
				imgsrc++;
				oimg[i-1].getAttributeNode('src').value="img/"+imgsrc+".jpg";
				oimglink[i-1].getAttributeNode('href').value="img/"+imgsrc+".jpg";
			}		
		}
	
	}
	
}
