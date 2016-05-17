var port = process.env.PORT || 5888;
var io = require('socket.io')();

io.on('connection', function (socket) {
	try{
		// On connect filter to correct rooms
		socket.join(socket.handshake.query.outlet);
		// io.to(socket.handshake.query.outlet).emit('success', {msg : "user has succesfully connected"});
	}catch(e){
		console.log(e);
		console.log("Outlet not defined");
	}

	// On change of data, prompt data check
	socket.on("dataChange",function(msg){
		// console.log(msg);
		io.to(msg.outlet).emit('getNewData');
	});
});
