var io = require('socket.io')(8080);

io.on('connection', function (socket) {

	try{
		socket.join(socket.handshake.query.outlet);
		io.to(socket.handshake.query.outlet).emit('success', {msg : "user has succesfully connected"});
	}catch(e){
		console.log(e);
		console.log("Outlet not defined");
	}

	socket.on("received",function(msg){
		console.log(msg);
	});
	// console.log(socket);
	console.log(socket.handshake.query);
	console.log(socket.rooms);

});
