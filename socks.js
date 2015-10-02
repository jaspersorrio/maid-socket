var io = require('socket.io')(8080);

io.on('connection', function (socket) {

	try{
		// socket.join(socket.handshake.header.outlet);
	}catch(e){
		console.log(e);
		console.log("Outlet not defined");
	}
	console.log(socket);
	console.log(socket.handshake);
	console.log(socket.rooms);

});
