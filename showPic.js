console.log("Hello world");



function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);
	text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.firstChild.nodeValue = text;
}



function countBodyChidlren(){
	var body_element=document.getElementsByTagName("body")[0];
	alert (body_element.childNodes.length);
}


//window.onload=countBodyChildren;