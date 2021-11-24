const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send(`<!DOCTYPE html>
		    	<html>
		    	
		    	<head>
		    	    <meta charset="UTF-8">
		    	    <meta name="viewport" content="width=device-width, initial-scale=1">
		    	    <title>run stack</title>
		    	</head>
		    	
		    	<body style="margin: 0; padding: 0; color: #333; text-align: center; font-family: Arial, Helvetica, sans-serif">
		    		<h1>Run Stack</h1>
		    		<h3>We are coming soon....</h3>
		    		<h5>😀😀😀</h5>
		    	</body>
		    	
		    	</html>`);
})

app.listen(3000)
