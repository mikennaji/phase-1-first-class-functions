const receivesAFunction = (expression) => {
    expression()
}

function returnsANamedFunction() {
    return function sinatra(){
        console.log("nothing");
    }
};

function returnsAnAnonymousFunction(){
    return function(){
        console.log("Anonymous");
    }
};