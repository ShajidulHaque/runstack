const http = require('http');
const path = require('path')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
    	res.write(`<!DOCTYPE html>
    	<html>
    	
    	<head>
    	    <meta charset="UTF-8">
    	    <meta name="viewport" content="width=device-width, initial-scale=1">
    	    <title></title>
    	</head>
    	
    	<body style="margin: 0; padding: 0; color: #333; text-align: center; font-family: Arial, Helvetica, sans-serif">
    		<h1>Run Stack</h1>
    		<h3>We are coming soon....</h3>
    		<h5>😀😀😀</h5>
    	</body>
    	
    	</html>`)
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);
