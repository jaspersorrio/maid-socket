var io = require('socket.io')(8080);

io.on('connection', function (socket) {

	try{
		socket.join(socket.handshake.query.outlet);
		io.to(socket.handshake.query.outlet).emit('success', "User have connected"):
	}catch(e){
		console.log(e);
		console.log("Outlet not defined");
	}
	// console.log(socket);
	console.log(socket.handshake.query);
	console.log(socket.rooms);

});
