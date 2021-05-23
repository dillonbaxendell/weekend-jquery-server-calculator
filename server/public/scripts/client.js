// is js loaded in console?
console.log('js loaded');

// DOM ready
$( document ).ready( readyNow );

let operator = ``;
let answer = 0;

//#region - Upon Load, do this:
function readyNow() {
    //code triggered here is safe to manipulate DOM
    console.log('DOM IS READY, jquery loaded');

    // Click Listeners
    // load buttons to be ready to function if clicked
    $( '#equals' ).on( 'click',  newCalculation);
    $( '#addition' ).on( 'click', handleAdd );
    $( '#subtraction' ).on( 'click', handleSubtract );
    $( '#multiplication' ).on( 'click', handleMultiply );
    $( '#division' ).on( 'click', handleDivide );

    //get calculations
    getCalculations(); // Hint: we get this from the server through a GET
};
//#endregion

function handleAdd() {
    console.log('in handleAdd');

    //set the operator to +
    operator = `+`;

    // declare the numbers as the value of the inputs
    let num1 = Number($('#firstCalculation').val());
    let num2 = Number($('#secondCalculation').val());

    // have the answer be the sum of the two numbers
    answer = Number(num1 + num2);

    console.log(answer);
    return answer;
    
}

function handleSubtract() {
    console.log('in handleSubtract');

    //set the operator to -
    operator = `-`;

    // declare the numbers as the value of the inputs
    let num1 = Number($('#firstCalculation').val());
    let num2 = Number($('#secondCalculation').val());

    // have the answer be the difference of the two numbers
    answer = Number(num1 - num2);

    console.log(answer);
    return answer;
    
}

function handleMultiply() {
    console.log('in handleMultiply');

    //set the operator to *
    operator = `*`;

    // declare the numbers as the value of the inputs
    let num1 = Number($('#firstCalculation').val());
    let num2 = Number($('#secondCalculation').val());

    // have the answer be the two numbers times each other
    answer = Number(num1 * num2);

    console.log(answer);
    return answer;
    
}

function handleDivide() {
    console.log('in handleDivide');

    //set the operator to /
    operator = `/`;

    // declare the numbers as the value of the inputs
    let num1 = Number($('#firstCalculation').val());
    let num2 = Number($('#secondCalculation').val());

    // have the answer be the num1 divided by num2
    answer = Number(num1 / num2);

    console.log(answer);
    return answer;
    
}



function newCalculation() {
    console.log('in newCalculation');

    //gather input values
    let newCalculation = {
        num1: Number($('#firstCalculation').val()),
        operator: operator,
        num2: Number($('#secondCalculation').val()),
        answer: answer
    }
    // We need to add to the array that's on the server.js
    // Push the newCalculation into the calculations array
    // MAKE A POST REQUEST WITH newCalculations
    // Hint: data should always be an object
    $.ajax({
        url: '/calculations',
        method: 'POST',
        // Hint: We need to send a third for POST requests
        data: newCalculation// this is what becomes req.body
    }).then(response => {
        console.log(response);
        getCalculations();
    })
}

function getCalculations() {
    // go to server route /calculations
    // Hint: ajax is a messenger, or promise, and should match the app.get('/calculations')
    // on server.js
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then(function (response) {
        console.log(response);
        // empty the DOM
        $('#target').empty();
        // append the calculations to the DOM
        for (let input of response) {
            $('#target').append(`
            <li>${input.num1} ${input.operator} ${input.num2} = ${input.answer}</li>
            `);
        }
        
    })
}