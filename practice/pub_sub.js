var events = require('events');
var net = require('net');

new channel = events.EventEmitter();

channel.clients = {};
channel.subscriptions = {};

channel.on('join' , function( id , client ) {
	this.clients[id] = client;
	this.subscriptions[id] = function ( senderId , message ) {
		if(id != senderId) {
			this.clients[i].write(message);
		}
	};

	this.on('broadcast' , this.subscriptions[id];
});

var server = net.createServer();