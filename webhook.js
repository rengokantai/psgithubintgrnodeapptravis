"use strict";
module.exports = function(app){
console.log('running');
	app.post('/webhook',function(req,res){
	console.log("tested");
console.log(req.body);
res.status(200).send();
})
}