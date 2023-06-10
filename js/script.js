//Anonymous function with setting time interval for 3 seconds

function show(){
    console.log('Rello RG!');
};

setTimeout(show, 3000);

//******************************************//
// We can directly add function as a parameter of another function

setTimeout(function show(){
    console.log('Hello Royal!');
}, 3000);
