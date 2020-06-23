// JavaScript Document

var imgs=document.getElementById("ul1").children;
var botton=document.getElementById("ul2").children;
var leftbotton=document.getElementById("left-botton");
var rightbotton=document.getElementById("right-botton");
//找到我们需要操作的所有li标签
var index=0;

var dingshiqi;
congqi();
			function congqi(){
				dingshiqi=setInterval(function(){
					index++;
					if(index==imgs.length){
						index=0;
					}
					for(var i = 0;i<imgs.length;i++){
						imgs[i].style.cssText="z-index:0;";
						botton[i].style.cssText="background-color:#fff;color:#000;";
					}
					imgs[index].style.cssText="z-index:100;";
						botton[index].style.cssText="background-color:red;color:#fff;";
				},2000);
			}
 
leftbotton.onclick=function(){
	clearInterval(dingshiqi);
				index--;
				if(index<0){
					index=imgs.length-1;
				}
				for(var i = 0;i<imgs.length;i++){
					imgs[i].style.cssText="z-index:0;";
					botton[i].style.cssText="background-color:#fff;color:#000;";
				}
				imgs[index].style.cssText="z-index:100;";
				botton[index].style.cssText="background-color:red;color:#fff;";
				congqi();			
	}
rightbotton.onclick=function(){
	clearInterval(dingshiqi);
				index++;
				if(index>imgs.length-1){
					index=0;
				}
				for(var i = 0;i<imgs.length;i++){
					imgs[i].style.cssText="z-index:0;";
					botton[i].style.cssText="background-color:#fff;color:#000;";
				}
				imgs[index].style.cssText="z-index:100;";
				botton[index].style.cssText="background-color:red;color:#fff;";
				congqi();}	
botton[0].onclick=function(){
	clearInterval(dingshiqi);
	
	for(var i = 0;i<imgs.length;i++){
					imgs[i].style.cssText="z-index:0;";
				    botton[i].style.cssText="background-color:#fff;color:#000;";	
				}
	botton[0].style.cssText="background-color:red;color:#fff;";			
	imgs[0].style.cssText="z-index:100;";
	congqi();
				}	
botton[1].onclick=function(){
	clearInterval(dingshiqi);
	for(var i = 0;i<imgs.length;i++){
					imgs[i].style.cssText="z-index:0;";
					 botton[i].style.cssText="background-color:#fff;color:#000;";
				}
				botton[1].style.cssText="background-color:red;color:#fff;";	
	imgs[1].style.cssText="z-index:100;";
	congqi();
				}
botton[2].onclick=function(){
	clearInterval(dingshiqi);
	for(var i = 0;i<imgs.length;i++){
					imgs[i].style.cssText="z-index:0;";
					 botton[i].style.cssText="background-color:#fff;color:#000;";
				}
				botton[2].style.cssText="background-color:red;color:#fff;";	
	imgs[2].style.cssText="z-index:100;";
	congqi();
				}
botton[3].onclick=function(){
	clearInterval(dingshiqi);
	for(var i = 0;i<imgs.length;i++){
					imgs[i].style.cssText="z-index:0;";
					 botton[i].style.cssText="background-color:#fff;color:#000;";
				}
				botton[3].style.cssText="background-color:red;color:#fff;";	
	imgs[3].style.cssText="z-index:100;";
	congqi();
botton[4].onclick=function(){
	clearInterval(dingshiqi);
	
	for(var i = 0;i<imgs.length;i++){
					imgs[i].style.cssText="z-index:0;";
				    botton[i].style.cssText="background-color:#fff;color:#000;";	
				}
	botton[4].style.cssText="background-color:red;color:#fff;";			
	imgs[4].style.cssText="z-index:100;";
	congqi();
				}	
}