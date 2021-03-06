var KhanSocket = (function(){

	let scope = new Object(),
		endpoint = "aHR0cHM6Ly9nZW50bGUtb2NlYW4tNzUyODguaGVyb2t1YXBwLmNvbQ==";
		//origin = btoa(location.origin);

	scope.defineSocket = function(s){
		scope.socket = s(atob(endpoint));
	}

	scope.emit = function(obs){
		obs = obs || {};
		obs = Object.keys(obs).map(function(key){
			var k = "socket://"+location.host+"/"+key;
			var rt = new Object();
			rt["canal"] = k; 
                        rt["data"] = obs[key];
			return rt;
		});
                obs.map((e) => {
                  scope.socket.emit('publish', e);
                });
	}

	scope.on = function(canal, callback){
		var k = "channel-socket://"+location.host+"/"+canal;
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
