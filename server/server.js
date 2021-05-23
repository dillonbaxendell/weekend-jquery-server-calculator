//GO GET EXPRESS
const express = require('express');
const bodyParser = require('body-parser');
const { doesNotMatch } = require('assert/strict');

//make a server called app
const app = express();
const PORT = 5000;


let history = [];
let answer;




//SERVE STATIC FILES WHEN REQUESTED
// WHEN I GO TO localhost:5000...
app.use(express.static('server/public'));
//without this bodyParser, we cannot find the data sent in post
app.use(bodyParser.urlencoded({extended : true}))


//POST IS FOR ADDING NEW DATA
app.post('/calculator', (req, res) => {
    //add the incoming quote to quotelist
    // req will have a lot, including our sent quote
    //req.body is made by body-parser
    // info from client
    console.log(req.body);
    results = req.body;
    operator = results.operator;
    num1 = Number(results.num1);
    num2 = Number(results.num2);

    if( operator === '+') {
        answer = num1 + num2;
        console.log(answer);
    } else if (operator === '-') {
         answer = num1 - num2;
         console.log(answer);
    } else if (operator === '*') {
        answer = num1 * num2;
        console.log(answer);
    } else if (operator === '/') {
        answer = num1 / num2;
        console.log(answer);  
    }

    let newObject = {
        num1: num1,
        operator: operator,
        num2: num2,
        answer: answer
    }

    history.push(newObject);

    //send back a good response
    res.sendStatus(201);
});

app.get('/history', (req, res) => {
    console.log('got to /history')

    //respond
    //Hint: whatever is in send is what response is on client.js
    res.send(history);
})

app.get('/results', (req, res) => {
    console.log('got to /results')

    //respond
    //Hint: whatever is in send is what response is on client.js
    res.send( {answer: answer} );
})


// start listening for connections
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});