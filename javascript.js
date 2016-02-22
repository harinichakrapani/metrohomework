function metroCalc(){

var frequency= document.getElementById("frequency").value; 
var cost = frequency*2.75; 
alert("The metro ride costs you"+ " $"+ cost+ "per month");  

rightCard(); 
} 

function rightCard(){
	var cost= frequency*2.75; 

if (cost> 116.50) {
	alert("Buy a monthly metro card pronto"); 
	}else {

		alert("You are better off buying a single ride card"); 
	}


}