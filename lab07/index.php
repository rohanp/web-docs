<!DOCTYPE html>
<html lang="en">
    <head>
        <link href="../css-frameworks/bootstrap.min.css" rel="stylesheet">
        <link href="../css-frameworks/flat-ui/flat-ui.min.css" rel="stylesheet">
        <link href="../css-frameworks/pure.min.css" rel="stylesheet">
        <title> Lab 07 </title>
    </head>
    
    <body>
    	<div class="container">
        Hey there <br>
        <?php
            if( is_file( 'data.json' ) )
            {
		$json = json_decode( file_get_contents( 'data.json' ) );
		$json['count'] += 1;
	$count = $json['count'];
		$time = $json['time'];

		if( $count+1  == 1000000 )
		{
			echo "YOU ARE THE MILLIONTH VISTOR. CLICK <a href='http://rohanp.io'> HERE </a> TO CLAIM YOUR PRIZE";
		}
		else
		{
			echo "You are the " . $count . "th visitor <br>";
		}
		
		echo "Last visited " . date('r', $time);		

                file_put_contents( 'data.json', json_encode( $json )  );
            	
	    } else
	    {
                echo 1;
                file_put_contents( 'data.json', 
				'
				{
					"count":1
					"time":' . time() . '
				}
				'
				);
       
            }
	
	    
	    $ipaddress = get_client_ip();
	    echo "Your IP is " . $ipaddress . "<br>";
	    	
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
