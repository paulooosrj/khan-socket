var KhanSocket = (function(){

	var scope = new Object();
	var origin = btoa(location.origin);

	this.defineSocket = function(s){
		scope.socket = s("http://serene-cove-80056.herokuapp.com/");
	}

	this.emit = function(obs){
		obs = obs || {};
		obs = Object.keys(obs).map(function(key){
			var k = key+"--"+origin;
			var rt = new Object();
			rt[k] = obs[key];
			return rt;
		});
		var nvObs = {};
		obs.map(function(v){
			nvObs = Object.assign(nvObs, v);
		});
		scope.socket.emit('emit', nvObs);
	}

	this.on = function(canal, callback){
		var k = canal+"--"+origin;
		scope.socket.on(k, callback);
	}

	return function(so){
		if(!window['khanInstance']){
			var s = so || false;
			if(s){ 
				scope.defineSocket(s);
				window.khanInstance = scope;
				return scope;
			}else{
				throw "Erro ao Passar Websocket!!";
			}
		}else{
			console.log("Return Khan Instance!!");
			return window["khanInstance"];
		}
	};

}).apply(KhanSocket);
