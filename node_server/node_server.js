var app = require("express")();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose');
let count= 1;
let flag = false;
let flag_onstart = true;
var connect_url = "mongodb+srv://sridharanram2001:ramprakash123@cluster0.dkq4n63.mongodb.net/Predictions?retryWrites=true&w=majority";

// app.use(cors())
let data;




const predictions = new mongoose.Schema({
        "xcenter": {
          "0": {
            "type": "Number"
          }
        },
        "ycenter": {
          "0": {
            "type": "Number"
          }
        },
        "width": {
          "0": {
            "type": "Number"
          }
        },
        "height": {
          "0": {
            "type": "Number"
          }
        },
        "confidence": {
          "0": {
            "type": "Number"
          }
        },
        "class": {
          "0": {
            "type": "Number"
          }
        },
        "name": {
          "0": {
            "type": "String"
          }
        },
          "index": {
            "type": "Number"
          },
        
      }) ;


app.use(bodyParser.json())

mongoose.connect(connect_url).then(() => {
        console.log("Connected to DB successfully ");
    })
.catch(() => {
        console.log("Not connected to DB "); 
    });

const conn = mongoose.createConnection(connect_url);

const MyModel = conn.model('Output_Predictions', predictions);



app.post('/pred',async(req,res) => {
        var msg=req.body;
        msg.index = count;
        count = count +1;
        res.send(JSON.stringify(msg))
       
        //data = msg 
        const userData = await MyModel.collection.insertOne(msg); 
        flag = true;
           
        //console.log("python: " + JSON.stringify(msg));
});





app.get('/send_data',cors(),async(req,res)=>{
  
  if (flag || flag_onstart)
  {
  const latestData = await MyModel.find({},"class");
  console.log(JSON.stringify(latestData)); 
  res.send(latestData);
  flag = false;
  flag_onstart = false
  }
  else{
    res.send({})
  } 

})

app.listen(3000, function(){
console.log('listening...');
});