/**
 * Created by jean.h.ma on 4/6/17.
 */
var express=require("express");
var path=require("path");
var fs=require("fs");

var app=express();

app.use(
	"/assets",
	express.static(
		path.resolve(__dirname,"assets")
	)
);

app.get("/",function(req,res){
	var html=fs.readFileSync(
		path.resolve(__dirname,"index.html"),
		"utf8"
	);
	res.send(html);
});

var port=8086;

app.listen(port,function(){
	console.log("web server run on http://127.0.0.1:"+port);
});