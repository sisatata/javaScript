var target=document.getElementById("check");
var ok=0;
var now;
var first=0;
var second=0;

target.addEventListener("change",function(){
	  
 document.getElementById("target").innerHTML=this.value;
 now=this.value;

});

var playerOne= document.getElementById("p-1");
playerOne.addEventListener("click",function(){
	
	first++;
	check(first,1);
   document.getElementById("first").innerHTML=first;



});

var playerTwo= document.getElementById("p-2");
playerTwo.addEventListener("click",function(){
	
	second++;
	check(second,2);
   document.getElementById("second").innerHTML=second;


});

function check(number,id){
	

	if(number>=now  && id==1)
	{
           document.getElementById("first").style.color="green";
         
	}
	else if(number>=now && id==2)
	{
	    document.getElementById("second").style.color="green";
	}
}

var reset=document.getElementById("reset");
reset.addEventListener("click",function(){
	document.getElementById("first").innerHTML=0;
	document.getElementById("second").innerHTML=0;
	document.getElementById("check").value=0;
	first=0,second=0;
	 document.getElementById("first").style.color="unset";
	 document.getElementById("second").style.color="unset";
	

	


  
});