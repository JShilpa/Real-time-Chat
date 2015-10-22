//to start node.js server, write node followed by file name.
//npm install socket.io
//npm install mongodb

// console.log('shilpa');

var mongo=require('mongodb').MongoClient,
	client=require('socket.io').listen(8080).sockets;

