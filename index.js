const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/servicenow', function(req, res){ 
    //console.log(req.query.string);
    res.send('servicenow '+ req.query.string)
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Express app listening on port '+port+'!'))