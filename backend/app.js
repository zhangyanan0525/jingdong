var express = require('express');
var app = express();
var data = require('./data.js');

app.use(express.static('../qianduan'));

setFileRes();
setDataRes();

var server = app.listen(8080, function () {
  var host = "127.0.0.1";
  var port = "8080";

  console.log('app listening at http://%s:%s', host, port);
});

/**
 * 设置数据请求接口
 */
function setDataRes(){

	app.get('/test', function (req, res) {
			res.send(data.guessLike);
		});

	app.get('/recommend', function (req, res) {
			res.send(data.recommend);
		});

	app.get('/classification',function (req, res){
		    res.send(data.classification);
	})

	app.get('/allAdress',function (req, res){
		    res.send(data.allAdress);
	})

    app.get('/prompts',function (req, res){
		    res.send(data.prompts);
	})

	app.get('/mainImg',function (req, res){
		    res.send(data.mainImg);
	})

	app.get('/jingdongkuaibao',function (req, res){
		    res.send(data.jingdongkuaibao);
	})

	app.get('/guessLike',function (req, res){
		    res.send(data.guessLike);
	})

	app.get('/qualityLife',function (req, res){
		    res.send(data.qualityLife);
	})

	app.get('/floor1Left',function (req, res){
		    res.send(data.floor1Left);
	})

	app.get('/floor2Left',function (req, res){
		    res.send(data.floor2Left);
	})

	app.get('/floor3Left',function (req, res){
		    res.send(data.floor3Left);
	})

	app.get('/floor4Left',function (req, res){
		    res.send(data.floor4Left);
	})

	app.get('/floor5Left',function (req, res){
		    res.send(data.floor5Left);
	})

	app.get('/floor6Left',function (req, res){
		    res.send(data.floor6Left);
	})

	app.get('/floor7Left',function (req, res){
		    res.send(data.floor7Left);
	})

	app.get('/floor1Normal',function (req, res){
		    res.send(data.floor1Normal);
	})

	app.get('/floor2Normal',function (req, res){
		    res.send(data.floor2Normal);
	})

	app.get('/floor3Normal',function (req, res){
		    res.send(data.floor3Normal);
	})

	app.get('/floor4Normal',function (req, res){
		    res.send(data.floor4Normal);
	})

	app.get('/floor5Normal',function (req, res){
		    res.send(data.floor5Normal);
	})

	app.get('/floor6Normal',function (req, res){
		    res.send(data.floor6Normal);
	})

	app.get('/floor7Normal',function (req, res){
		    res.send(data.floor7Normal);
	})

	app.get('/floor1Carousel',function (req, res){
		    res.send(data.floor1Carousel);
	})

	app.get('/floor2Carousel',function (req, res){
		    res.send(data.floor2Carousel);
	})

	app.get('/floor3Carousel',function (req, res){
		    res.send(data.floor3Carousel);
	})

	app.get('/floor4Carousel',function (req, res){
		    res.send(data.floor4Carousel);
	})

	app.get('/floor5Carousel',function (req, res){
		    res.send(data.floor5Carousel);
	})

	app.get('/floor6Carousel',function (req, res){
		    res.send(data.floor6Carousel);
	})

	app.get('/floor7Carousel',function (req, res){
		    res.send(data.floor7Carousel);
	})

	app.get('/floor1mains',function (req, res){
		    res.send(data.floor1mains);
	})

	app.get('/floor2mains',function (req, res){
		    res.send(data.floor2mains);
	})

	app.get('/floor3mains',function (req, res){
		    res.send(data.floor3mains);
	})

	app.get('/floor4mains',function (req, res){
		    res.send(data.floor4mains);
	})

	app.get('/floor5mains',function (req, res){
		    res.send(data.floor5mains);
	})

	app.get('/floor6mains',function (req, res){
		    res.send(data.floor6mains);
	})

	app.get('/floor7mains',function (req, res){
		    res.send(data.floor7mains);
	})

	app.get('/floor1brands',function (req, res){
		    res.send(data.floor1brands);
	})
	app.get('/floor2brands',function (req, res){
		    res.send(data.floor2brands);
	})
	app.get('/floor3brands',function (req, res){
		    res.send(data.floor3brands);
	})
	app.get('/floor4brands',function (req, res){
		    res.send(data.floor4brands);
	})
	app.get('/floor5brands',function (req, res){
		    res.send(data.floor5brands);
	})
	app.get('/floor6brands',function (req, res){
		    res.send(data.floor6brands);
	})
	app.get('/floor7brands',function (req, res){
		    res.send(data.floor7brands);
	})
}

/**
 * 设置路由
 */
function setFileRes(){

	app.get('/', function (req, res) {
		res.sendFile("index.html");
	});

}