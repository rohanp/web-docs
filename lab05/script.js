
$('#listbox').get(0).onchange = radio;
$('#dropdown').get(0).onchange = radio;

function radio(){
    console.log("here");
	if($("#listbox")[0].checked == true){
		$("#select-list")[0].size = 5;
	}
	else{
        console.log("here");
		$("#select-list")[0].size = 0;
	}
}
function output(value){
	var node = $("#list-select")[0];
    
	while (node.firstChild) {
	    node.removeChild(node.firstChild);
	}

	var array = {
		"ghana":["Accra", "Kumasi"], 
		"egypt":["Cairo", "Alexandria", "Giza", "Shubra El-Kheima"], 
		"southafrica":["Cape Town",]
    }


    for(var i=0; i < array[value].length; i++){
         option = document.createElement("option");
		option.text = array[value][i];
		document.getElementById("list-select").appendChild(option);
	}
}