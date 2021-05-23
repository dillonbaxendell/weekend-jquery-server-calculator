//GO GET EXPRESS
const express = require('express');
const bodyParser = require('body-parser');
const { doesNotMatch } = require('assert/strict');

//make a server called app
const app = express();
const PORT = 5000;


let history = [];
let results;




//SERVE STATIC FILES WHEN REQUESTED
// WHEN I GO TO localhost:5000...
app.use(express.static('server/public'));
//without this bodyParser, we cannot find the data sent in post
app.use(bodyParser.urlencoded({extended : true}))


//POST IS FOR ADDING NEW DATA
app.post('/history', (req, res) => {
    //add the incoming quote to quotelist
    // req will have a lot, including our sent quote
    //req.body is made by body-parser
    // info from client
    console.log(req.body);
    history.push(req.body);
    doMath(req.body);

    //send back a good response
    res.sendStatus(201);
});

function doMath(objectForMath) {
    console.log('in doMath');


    if( objectForMath.operator === "+" ) {
        results = Number(objectForMath.num1) + Number(objectForMath.num2);
    } else if ( objectForMath.operator === "-" ) {
        results = Number(objectForMath.num1) - Number(objectForMath.num2);
    } else if ( objectForMath.operator === "*" ) {
        results = Number(objectForMath.num1) * Number(objectForMath.num2);
    } else if ( objectForMath.operator === "/" ) {
        results = Number(objectForMath.num1) / Number(objectForMath.num2);
    }

    console.log(results)
}


app.get('/history', (req, res) => {
    console.log('got to /history')

    //respond
    //Hint: whatever is in send is what response is on client.js
    res.send(history);
})


// start listening for connections
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});