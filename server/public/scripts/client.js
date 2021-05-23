// is js loaded in console?
console.log('js loaded');

// DOM ready
$( document ).ready( readyNow );

let operator = ``;
let answer;

//#region - Upon Load, do this:
function readyNow() {
    //code triggered here is safe to manipulate DOM
    console.log('DOM IS READY, jquery loaded');

    // Click Listeners
    // load buttons to be ready to function if clicked
    $( '#clear' ).on( 'click', handleClear );
    $( '#equals' ).on( 'click',  handleEquals );
    $( '#addition' ).on( 'click', handleAdd );
    $( '#subtraction' ).on( 'click', handleSubtract );
    $( '#multiplication' ).on( 'click', handleMultiply );
    $( '#division' ).on( 'click', handleDivide );

    //get calculations
    getCalculations(); // Hint: we get this from the server through a GET
};
//#endregion

function handleAdd() {
    console.log('clicked add!');

    //set the operator to +
    operator = `+`;
    console.log(operator);
    
}

function handleSubtract() {
    console.log('clicked subtract!');

    //set the operator to -
    operator = `-`;
    console.log(operator);

    
}

function handleMultiply() {
    console.log('clicked multiply!');

    //set the operator to *
    operator = `*`;
    console.log(operator);
    
}

function handleDivide() {
    console.log('clicked divide!');

    //set the operator to /
    operator = `/`;
    console.log(operator);
    
}

function handleEquals() {
    console.log('in newCalculation');

    //gather input values
    let newCalculation = {
        num1: Number($('#firstCalculation').val()),
        operator: operator,
        num2: Number($('#secondCalculation').val()),
    }
    // We need to add to the array that's on the server.js
    // Push the newCalculation into the history array
    // MAKE A POST REQUEST WITH newCalculations
    // Hint: data should always be an object
    $.ajax({
        url: '/calculator',
        method: 'POST',
        // Hint: We need to send a third for POST requests
        data: newCalculation// this is what becomes req.body
    }).then(response => {
        
        console.log(response);
        getCalculations();
        getResults();
    })
}

function handleClear() {
    console.log('clicked clear!');


    $( '#firstCalculation' ).val( '' );
    $( '#secondCalculation' ).val( '' );

    $( '#results' ).val( '' );

}

function getResults() {
    console.log('in getResults');
    
    $.ajax({
        method: 'GET',
        url: '/results'
    }).then(function (response) {
        console.log(response);

        //empty the DOM
        $('#results').empty();
        //append the calculations to the DOM
        $('#results').append(`<h2>${response.answer}</h2>`);
    })
    
}

function getCalculations() {
    console.log('in getCalculations');
    // go to server route /calculations
    // Hint: ajax is a messenger, or promise, and should match the app.get('/calculations')
    // on server.js
    $.ajax({
        method: 'GET',
        url: '/history'
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