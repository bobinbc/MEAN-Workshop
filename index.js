// var greet = require('./greet');

// greet('Node');
// greet('NPM');


// //HTTP
// var http = require("http"),
// 	port=1881;

// var server = http.createServer(function(request,response){
// 	response.writeHeader(200,{
// 		"Content-Type":"text/plain"
// 	});
// 	response.write("Hello HTTP!");
// 	response.end();
// });

// server.listen(port);
// console.log("Server running on " + port+".\nLaunch http://localhost:" + port);

////TCP
// var net = require('net'),
// 	users=[],
// 	port = 2772;

// net.createServer(function(socket)
// {
// 	socket.userid = socket.remoteAddress + ":" + socket.remotePort;
// 	users.push(socket);
// 	socket.write("Hello "+socket.userid+"\n");
// 	broadcast(socket.userid+ " joined the chat\n",socket);

// 	socket.on('data',function(data){
// 		broadcast(socket.userid + "> " + data, socket);
// 	});

// 	socket.on('end',function(){
// 		users.splice(users.indexOf(socket),1);
// 		broadcast(socket.userid + " left the chat.\n");
// 	});

// 	function broadcast(message,sender){
// 		users.forEach(function(user){
// 			if(user === sender) return;
// 			user.write(message);
// 		});
// 	process.stdout.write(message)
// 	}
// }).listen(port);

// console.log("Chat server running at port "+port +"\n");

// //FILE UPLOAD
// var formidable = require('formidable'),
// 	http = require('http'),
// 	util = require('util'),
// 	port = 3663;

// http.createServer(function(req,res)
// {
// 	if(req.URL == '/upload' && req.method.toLowerCase() == 'post'){
// 		//parse a file upload
// 		var form = new formidable.IncomingForm();

// 		form.parse(req, function(err, fields, files){
// 			res.writeHeader(200,{'contentType': 'text/plain'});
// 			res.write('received upload:\n\n');
// 			res.end(util.inspect({fields: fields, files: files}));
// 		});

// 		return;
// 	}

// 	//show a file upload form
// 	res.writeHead(200,{'content-type':'text/html'});
// 	res.end(
// 			'<form action="/upload" enctype="multipart/form-data" method="post">'+
// 			'<input type="text" name="title"><br>'+
// 			'<input type="file" name="upload multiple="multiple"><br>' +
// 			'<input type="submit" value="Upload">'+
// 			'</form>'
// 		);
// }).listen(port);
