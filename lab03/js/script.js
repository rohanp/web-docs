    
var dict = {
  "algeria": "algiers",
  "angola": "luanda",
  "benin": "porto-novo",
  "botswana": "gaborone",
  "burkina faso": "ouagadougou",
  "burundi": "bujumbura",
  "cameroon": "yaounde'",
  "cape verde islands": "praia",
  "central african republic": "bangui",
  "chad": "n'djamena",
  "comoros": "moroni",
  "congo": "brazzaville",
  "cote d'ivoire": "abidjan",
  "djibouti": "djibouti",
  "egypt": "cairo",
  "equitorial guinea": "malabo",
  "eritrea": "asmara",
  "ethiopia": "addis ababa",
  "gabon": "libreville",
  "gambia": "banjul",
  "ghana": "accra",
  "guinea": "conakry",
  "guinea-bissau": "bissau",
  "kenya": "nairobi",
  "lesotho": "maseru",
  "liberia": "monrovia",
  "libya": "tripoli",
  "madagascar": "antananarivo",
  "malawi": "lilongwe",
  "mali": "bamako",
  "mauritania": "nouakchott",
  "mauritius": "port louis",
  "morocco": "rabat",
  "mozambique": "maputo",
  "namibia": "windhoek",
  "niger": "niamey",
  "nigeria": "abuja",
  "rwanda": "kigali",
  "sao tome' and principe": "sao tome'",
  "senegal": "dakar",
  "seychelles": "victoria",
  "sierra leone": "freetown",
  "somalia": "mogadishu",
  "south africa": "pretoria",
  "sudan": "khartoum",
  "swaziland": "mbabane",
  "tanzania": "dar es salaam &amp; dodoma",
  "togo": "lome'",
  "tunisia": "tunis",
  "uganda": "kampala",
  "democratic republic of congo (zaire)": "kinshasa",
  "zambia": "lusaka",
  "zimbabwe": "harare"
}
String.prototype.caps = function() {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});

}

var total = Object.keys(dict).length;
var entered = [];
var pressed = false;
var m = 5;
var s = 0;
var currentCountry;
$('#input').focus();
getQuestion();

function getQuestion(){
    idx = parseInt(Math.random()*Object.keys(dict).length)
    currentCountry = Object.keys(dict)[idx] 
    console.log(currentCountry);
    $('#question').html( 'What is the capital of ' + currentCountry.caps() + ' ?')
    $('#score').html(entered.length + '/' + total);

}


$(document).keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
       console.log("ENTER");
      if(!pressed){
          $('#start').click();
          pressed = true;
      }
    /*if(!check($('#input').val())){
        console.log('error');
        $('input-container').addClass('has-error');
    }*/
    return false;  
  }
}); 


document.getElementById('input').disabled = true;

$('#start').click( function() {
    entered = []
    $('#start').html('(Re)start');
    $('#score').html(entered.length + '/' + total);
    start();
    document.getElementById('input').disabled = false;
    $('#input').prop("placeholder", "Now enter the capital of this country...");
    $('#input').focus();
});

$('#stop').click( function() {
    stop();
});


$('#input').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
      if(!pressed){
          $('#start').click();
          pressed = true;
      }
    check($('#input').val());
    return false;  
  }
}); 

$('#input').keyup(function (e) {
    check($('#input').val());
});

$('#enter').click( function() {
    check($('#input').val());
});

function start(){
                if(pressed == false){
					restart();
					clock = setInterval("stopWatch()", 1000);
					pressed = true;
				}
}


function stopWatch(){
				if( entered.length == 50 || ( m == 0 && s == 0 ) ){
					stop();
				} else if(s == 0){
					m--;
					s = 59;
                    console.log(m+" "+s);
					$("#time").html(m+":"+s);
				}
				else{
					s--;
					$("#time").html(m+":"+s);
                    if(s<10){
                        $("#time").html(m+":0" + s);
                    }
				}
			}
    
function stop(){	
    if(pressed){
        if(countries.length == entered.length){
            swal("You win!!", "Impressive \n (If you didnt cheat, that is).", "success");
            console.log("you win");
            restart();
        }
        else{
            swal("You only got " + entered.length + "/" + countries.length + " correct!", "Try again ya uncultured swine.", "error");
            for (var i = 0; i < countries.length; i++) {
                if(entered.indexOf(i) < 0){	
                    if(left){
                        $("#enteredLeft").append("<div style='float:right; color:#E74C3C'>" + countries[i].caps() + "</div>");
                        left = false;
                    } else {
                        $("#enteredRight").append("<div style='float:left; color:#E74C3C'>" + countries[i].caps() + "</div>");
                        left = true;
                    }
                        
                }
            }
            
        }
        window.clearInterval(clock);
        entered = [];
        pressed = false;
    }
}

function restart(){
    m = 5;
    s = 0;
    $("#time").html( m+":0"+s );
    $('#enteredLeft').html( "" );
    $('#enteredRight').html( "" );
}


function check(answer){
    if(answer.length > 0){
        answer = answer.trim().toLowerCase();
        console.log(answer);
        if(dict[currentCountry] == answer){     //check if is a country
                console.log("correct!");
                delete dict[currentCountry];
                entered.push(answer);
                $('#input').val('');
                checkVictory();
                getQuestion();
                return true;
                
        }
        
    }
    return false;
}

function checkVictory(){
    if(entered.length  == total){
        stop();
        
    }
}




    
