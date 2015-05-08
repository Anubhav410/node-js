var http = require('http')
var fs = require('fs')


http.createServer(
	function( req , res) {
		if(req.url == '/') {
			console.log('I am here');
			fs.readFile("./data.json" , function(err , data){
				if(err){
					console.log(err);
					res.end('Server Error');
				}
				else{
					titles = JSON.parse(data);
					fs.readFile('./template.html' , function(err , data){
						if(err){
							console.log(err);
							res.end('Server Error - 2');
						}
						else {
							data = data.toString();
												console.log('data  ' + titles );

							temp = titles.join('</li><li>');
							data = data.replace('%' , temp);
							res.writeHead(200 , {'Content-type' : 'text/html'});
							res.end(data);
						}
					});
				}
			} 
				);
		}
	}).listen( 8888 , '127.0.0.1');
