var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movies');
var Schema = mongoose.Schema;
var BlogSchema = new Schema({
	director:String,
	title:String,
	releaseyear:String
});

mongoose.model('MovieList', BlogSchema);
var Blog = mongoose.model('MovieList');/*
var blog = new Blog({
	author:'saa',
	title:'abac',
	url:'ssssss'
});
blog.save();*/
var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());  



//routes 

app.get('/api/blogs',function(req,res) {
	// body...
	Blog.find(function(err,docs){
		docs.forEach(function(item){
			console.log('received a get requets for id:'+item._id); 
		})
		res.send(docs);
	});
});

app.post('/api/blogs',function(req,res) {
	console.log('received a post request'); 
	for(var key in req.body){
		console.log(key+ ': ' + req.body[key]);
	}
	// body...
	var blog = new Blog(req.body);
	blog.save(function(err,doc) {
		// body...
		res.send(doc);
	}); 
});

app.delete('/api/blogs/:id', 
	function (req,res) {
		// body...
		console.log('received a delete request for id'+ req.params.id);
		Blog.remove({_id: req.params.id}
			, function(err){
				res.send({_id:req.params.id});
			});
	});

app.put('/api/blogs/:id', 
	function (req,res) {
		// body...
		console.log('received a update request for id'+ req.params.id);
		Blog.update({_id: req.params.id}, req.body,
			, function(err){
				res.send({_id:req.params.id});
			});
	});



var port = 4000;
app.listen(port);
console.log('server on '+port);