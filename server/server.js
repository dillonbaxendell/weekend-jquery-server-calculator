//GO GET EXPRESS
const express = require('express');
const bodyParser = require('body-parser');

//make a server called app
const app = express();
const PORT = 5000;


let calculations = [ {num1: '2', num2: '4'}];


//SERVE STATIC FILES WHEN REQUESTED
// WHEN I GO TO localhost:5000...
app.use(express.static('server/public'));
//without this bodyParser, we cannot find the data sent in post
app.use(bodyParser.urlencoded({extended : true}))


//POST IS FOR ADDING NEW DATA
app.post('/calculations', (req, res) => {
    //add the incoming quote to quotelist
    // req will have a lot, including our sent quote
    //req.body is made by body-parser
    // info from client
    console.log(req.body);
    calculations.push(req.body);

    //send back a good response
    res.sendStatus(201);
});


app.get('/calculations', (req, res) => {
    console.log('got to /calculations')

    //respond
    //Hint: whatever is in send is what response is on client.js
    res.send(calculations);
})


// start listening for connections
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});