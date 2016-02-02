	 
document.getElementById("btn").onclick = function()
{
	//document.getElementById("first").innerHTML = "2+2=4";
	var numArray = prompt("Δώσε νούμερα χωρισμένα με κόμμα:").split(",").map(Number);
	var ans = 0;
	var str = "";
	for(var i=0;i<numArray.length;i++)
	{
		ans += numArray[i];
		str += numArray[i];

		if(i!=numArray.length-1)
		{
			str += "+";			
		}
		/*else
		{
			str += "=";
		}*/
	}
	str = str + "=" + ans;
	document.getElementById("first").innerHTML = str;
	//return num1 + "+" + num2 "=" num1+num2;
}

// Need to show console in browser
var myArray = ["oranges","apples","watermelons"];
myArray.forEach(function(value,index) {
	console.log('I bought '+value+' from the shop');
});
