document.body.onclick = function(e){
	var nextTarget =  e.target.firstElementChild || next(e.target);

	nextTarget.style.background = "#A7442F";

	setTimeout(function(){
		nextTarget.style.background = "";
	}, 500)

}

function next(element, considerChildren){
	if(!element)
		return document.body;

	var nextTarget = element.nextElementSibling;

	if(!nextTarget)
		return next(element.parentNode)

	if(!nextTarget)
		return document.body;
    
    if(nextTarget.tagName.toLowerCase() == "script")
		nextTarget = nextTarget.nextElementSibling;

	return nextTarget;

} 