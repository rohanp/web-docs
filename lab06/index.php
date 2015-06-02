<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>Scrabble Helper</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="../css-frameworks/bootstrap.min.css" rel="stylesheet"> 
    <link href="../css-frameworks/flat-ui/flat-ui.min.css" rel="stylesheet">
    <link href="../css-frameworks/pure.min.css" rel="stylesheet">
  </head>
 

<body>
<form action="index.php" method="get">
	<select name="which" onchange = "update()">
		<option value="first">First Letter</option>
		<option value="last">Last Letter</option>
	</select>

Search: 

	<input type="text" name="in">
<br>
<br>

	<button type="submit">Press me</button>
</form>

<?php  
if (isset($_GET["in"])) 
{ 
	if (($_GET["which"]) === "first")
	{ 
		first($_GET["in"]); 
	} 
	else
	{ 
		last($_GET["in"]); 
	} 
}

function first($in) 
{ 
	$f = file_get_contents("dict.txt");  
	$subject = "abcdefabcdefg";  
	$pat = '/\n' . $in . '\w*\n/'; 
	preg_match_all($pat, $f, $matches );  
	foreach($matches[0] as $child) {
	   echo $child . "<br>";
	}
} 

function last($in) 
{ 
	$file = file_get_contents("dict.txt");  
	$subject = "abcdefabcdefg";  
	$pattern = '/\n\w*' . $in . '\n/'; 
	preg_match_all($pattern, $file, $matches );  
	foreach($matches[0] as $child) {
	   echo $child . "<br>";
	   }
}
?> 
</body> 
</html>

