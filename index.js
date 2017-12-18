const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 9001));

app.get('/', function(req, res){
  res.send('It works!');
});

app.post('/servicenow', function(req,res){
    var body = {
        response_type: "in_channel",
        text: "I have to tell you something... but I forgot."
    };
    res.send(body);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
