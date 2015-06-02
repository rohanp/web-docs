<!DOCTYPE html>
<html lang="en">
    <head>
        <link href="../css-frameworks/bootstrap.min.css" rel="stylesheet">
        <link href="../css-frameworks/flat-ui/flat-ui.min.css" rel="stylesheet">
        <link href="../css-frameworks/pure.min.css" rel="stylesheet">
        <title> Lab 08 </title>
    </head>
    
    <body>
    	<div class="container">
        Hey there <br>
        <?php 
	    $ip = get_client_ip();
	    $time = time();

	    $db = new SQLite3('stats.db');
	    
	    $visitsQuery = $db->prepare("SELECT COALESCE( (SELECT visits FROM stats WHERE id=:id), 0);");
	    $visitsQuery->bindValue(':id', $ip, SQLITE3_TEXT);

	    $visits = $visitsQuery->execute()->fetchArray()[0];

	    $tstampQuery = $db->prepare("SELECT COALESCE( (SELECT tstamp FROM stats WHERE id=:id), '$time');");
	    $tstampQuery->bindValue(':id', $ip, SQLITE3_TEXT);

	    $tstamp = $tstampQuery->execute()->fetchArray()[0];
	    $visits += 1;

	    echo "Your IP is " . $ip . "<br>";
	    echo "You last visited on " . date('r',  $tstamp) . "<br>";
	    echo "You have " . $visits . " total visits <br>";

	    $tstamp = time();
	    $insert = $db->prepare("INSERT OR REPLACE INTO stats (id, visits, tstamp) VALUES (:id, '$visits+1', '$time');");
	    $insert->bindValue(':id', $ip, SQLITE3_TEXT);
	    $insert->execute();

	    	
	function get_client_ip() {
	    $ipaddress = '';
	    if (getenv('HTTP_CLIENT_IP'))
		$ipaddress = getenv('HTTP_CLIENT_IP');
	    else if(getenv('HTTP_X_FORWARDED_FOR'))
		$ipaddress = getenv('HTTP_X_FORWARDED_FOR');
	    else if(getenv('HTTP_X_FORWARDED'))
		$ipaddress = getenv('HTTP_X_FORWARDED');
	    else if(getenv('HTTP_FORWARDED_FOR'))
		$ipaddress = getenv('HTTP_FORWARDED_FOR');
	    else if(getenv('HTTP_FORWARDED'))
	       $ipaddress = getenv('HTTP_FORWARDED');
	    else if(getenv('REMOTE_ADDR'))
		$ipaddress = getenv('REMOTE_ADDR');
	    else
		$ipaddress = 'UNKNOWN';
	    return $ipaddress;
	}
	?>
	- not the NSA
	</div>

	<script src = "../js/flat-ui.min.js"> </script>
    </body>
</html>
