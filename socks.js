var io = require('socket.io')(8080);

io.on('connection', function (socket) {

	socket.join(socket.query.outlet);
	console.log(socket.rooms);

});
