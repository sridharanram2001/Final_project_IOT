var app = require("express")();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var cors = require('cors')
// app.use(cors())
let data;

app.use(bodyParser.json())

app.post('/pred',function(req,res){
        var msg=req.body;
        res.send(JSON.stringify(msg))
        data = msg
        console.log("python: " + JSON.stringify(msg));
});
app.get('/test',cors(),(req,res)=>{
res.send(data)
})

app.listen(3000, function(){
console.log('listening...');
});