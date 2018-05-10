<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php

	$string = file_get_contents("dist/assets.json");
	$json = json_decode($string, true);

	foreach ($json as $p => $value) {
	    if ($p === 'css') {
	    	$css = $value;
	    }

	    if($p === 'js') {
	    	$js = $value;
	    }
	}

	?>

	<div id="app" v-cloak>
		<div>
			<example :title="title"></example>
			<modal></modal>
		</div>
	</div>

	<!-- <div id="outside">{{ name }}</div> -->
	<link rel="stylesheet" href="<?php echo 'dist/' . $css ?>">

	<script src="<?php echo 'dist/' . $js ?>"></script>
	<script src="<?php echo 'dist/' . 'bla.js' ?>"></script>
</body>
</html>