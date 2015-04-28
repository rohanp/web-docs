<!DOCTYPE html>
<html lang="en">
    <head>
        <link href="../css-frameworks/bootstrap.min.css" rel="stylesheet">
        <link href="../css-frameworks/flat-ui/flat-ui.min.css" rel="stylesheet">
        <link href="../css-frameworks/pure.min.css" rel="stylesheet">
        <title> Lab 05 </title>
    </head>
    
    <body>
        You are the 
        <?php
            if( file_exits('count.txt')
            {
                $count = file_get_contents( 'count.txt' );
                echo $count+1;
                file_put_contents( 'count.txt', $count+1 );
            } else{
                echo 1
            }
        ?>
        th visitor
    </body>
</html>