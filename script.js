document.body.onclick = function(e){
	var nextTarget =  e.target.firstElementChild || next(e.target);

	nextTarget.style.background = "#A7442F";

	setTimeout(function(){
		nextTarget.style.background = "";
	}, 500)

}

function next(element, considerChildren){

	if(element == null)
		return document.body;

	var nextTarget = element.nextElementSibling;

	if(nextTarget == null)
		return nextInDom(element.parentNode)

	if(nextTarget == null)
		return document.body;
    
    	if(nextTarget.tagName.toLowerCase() == "script")
		nextTarget = nextTarget.nextElementSibling;

	return nextTarget;

} 