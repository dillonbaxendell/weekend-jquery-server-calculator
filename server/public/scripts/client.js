// is js loaded in console?
console.log('js loaded');

// DOM ready
$( document ).ready( readyNow );

//#region - Upon Load, do this:
function readyNow() {
    //code triggered here is safe to manipulate DOM
    console.log('DOM IS READY, jquery loaded');

    // Click Listeners
    // load buttons to be ready to function if clicked
    
};
//#endregion