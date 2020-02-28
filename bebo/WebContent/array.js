/**
 * 
 */
var fruits, text;
fruits=["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myfunction);
text += "</ul>";
	
	function myFunction(value)	
{
  text += "<li>" + value + "</li>";
  
}

