![enter image description here](https://i.imgur.com/ABs7ScD.gif)

----------

# khan-socket

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/PaulaoDev/khan-socket/master/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/PaulaoDev/khan-socket.svg)](https://github.com/PaulaoDev/khan-socket/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/PaulaoDev/khan-socket.svg)](https://github.com/PaulaoDev/khan-socket/fork)
[![GitHub issues](https://img.shields.io/github/issues/PaulaoDev/khan-socket.svg)](https://github.com/PaulaoDev/khan-socket/issues)
[![GitHub watchers](https://img.shields.io/github/watchers/badges/shields.svg?style=social&label=Watch)](https://github.com/PaulaoDev/khan-socket/subscription)
[![Whatsapp](https://img.shields.io/badge/Whatsapp-On-green.svg)](https://bit.ly/whatsappdopaulo)
[![Donate Paypal](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://goo.gl/ujU2QU)
[![Donate Bitcoin](https://img.shields.io/badge/Donate-Bitcoin-yellow.svg)](https://blockchain.info/address/37RWdwgsXK94pANXm9fHv722k4zQmtmCpH)

----------


Sistema de websocket para javascript client side ( Websocket system for javascript client side )
***Demo:*** https://chatbotphp.ga/chat

-------------------------------------
### *Sempre incluir os arquivos js*
```html
  <script src="libs/socket-io.min.js"></script>
  <script src="vendor/khan-socket.min.js"></script>
```

- Ou use os CDNS 
```html
  <script src="https://rawgit.com/PaulaoDev/khan-socket/master/libs/socket-io.min.js"></script>
  <script src="https://rawgit.com/PaulaoDev/khan-socket/master/vendor/khan-socket.min.js"></script>
```

-------------------------------------
#### Criando o websocket
```javascript
  var khanSocket = new KhanSocket(io);
```
-------------------------------------
#### Criando canal e enviando algo pelo websocket
- Para enviar tem que ser um objeto dentro do ***emit*** neste caso está sendo enviado uma string para o canal ***home***
```javascript
  khanSocket.emit({
  	"home": "Olá mundo!!"
  });
```
-------------------------------------
#### Recebendo o websocket
```javascript
  khanSocket.on('home', function(m){
  	 document.write(m);
  });
```
-------------------------------------
