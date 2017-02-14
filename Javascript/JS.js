// JavaScript Document
function MinFunktion() {
	var nummer = document.getElementById("mynumber").value;
	
	if (isNaN(nummer))
	{
		alert("Skriv ett nummer");
	}
	else if (nummer == "")
	{
		alert("Skriv ett nummer");
	}
	else
	{
	document.getElementById("Pleb").innerHTML = nummer;
	}
}