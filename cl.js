let mongoose = require('mongoose');
require('mongoose-long')(mongoose); // INT 64bit
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',   true);
mongoose.connect(process.env.MONGODB_URL, configDB.options); // kết nối tới database
username = username.toLowerCase();
User.create({'local.username':username, 'local.password':helpers.generateHash(password), 'local.regDate': new Date()}, function(err, user){
client.UID = user._id.toString();
}); 
UserInfo.create({'id':client.UID, 'name':name, 'joinedOn':new Date(),'red':'9999999999','typ':'true'});















const PORT = process.env.PORT || 3000;
const INDEX = '/cl.html';
express= require('express')
const server = express()
  .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));

const { Server } = require('ws');

const wss = new Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.on('close', () => console.log('Client disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    client.send(new Date().toTimeString());
  });
}, 1000);

'''






var HOST = location.origin.replace(/^http/, 'ws');
var ws = new WebSocket(HOST);
var el;

ws.onmessage = function (event) {
  el = document.getElementById('server-time');
  el.innerHTML = 'Server time: ' + event.data;
};
//123
_ga=GA1.2.1109528843.1669732705;_gid=GA1.2.2034535752.1669890516;_gat_UA-238090400-1=1;_gat_UA-238090400-2=1
Ssion
GET https://api-gw.gwbchind.com/esms/v1/profiler?env=w79
https://ipv4.colgagnez.com/sw/collect
https://ipv6.colgagnez.com/sw/collect
GET json
 https://api-gw.gwbchind.com/gwms/v1/verifytoken.aspx?token=d7a403e885510a4e7196febb70b20023&fg=9e9045841e5b24cd18b902c91c64c619
WebSocket
wss://api-card.bwbay9sockg.com/websocket
[1,"Simms","","",{"agentId":"1","accessToken":"37-59b15392197f421530175706e6824387","reconnect":false}]
["7", "Simms", "1",1] 2 10
[6,"Simms","channelPlugin",{"cmd":310}]
[6,"Simms","channelPlugin",{"cmd":310}]

wss://api-mini.bwbay9sockg.com/websocket
[1,"MiniGame","","",{"agentId":"1","accessToken":"37-59b15392197f421530175706e6824387","reconnect":false}]
[6,"MiniGame","lobbyPlugin",{"cmd":10001}]
["7", "MiniGame", "1",1]

----
["6", "MiniGame", "taixiuPlugin", {"cmd": 1005}]
["7", "MiniGame", "1",9]
["6","MiniGame","taixiuPlugin",{"cmd":1006,"gid":100}]
["6","MiniGame","taixiuPlugin",{"cmd":1006,"gid":100}]
["7", "MiniGame", "1",10]
