http = require('http');
fs = require('fs');

var  server = http.createServer(function(req, res)  {
	if(req.url == '/') {
		fs.readFile('./data.json' , function(err , data) {
			if(err) {
				console.error(err);
				res.end("Server Error");
			} else {
				titles = JSON.parse(data).join("</li><li>");
				fs.readFile('./template.html' , function(err , data) {
				if(err) {
					console.log(err);
					res.end("Server Error") ; 

				} else {
					data = data.toString().replace('%' , titles);
					res.writeHead(200 , {'Content-type' : 'text/html'});
					res.end(data);	
				}

				});
			}

		});
	}
}).listen(3000 , "127.0.0.1");

