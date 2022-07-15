// immediately invoked function expresion
// ifi
// function that disapear when executed

const runOnce = function(){
    console.log('This will never run again');

}
runOnce();

(function(){
    console.log('This will never run again');
    const isPrivate = 23; // this is private = IS INCAPSULATED in this function here
})();

(() => console.log('This will also never run again.'))();

// one scope does not have access to variables in inner scope.


// sometimes we need to protect the variables to be accidently onverwriten by the program. Even with external scripts and libraries.

// that is pattern

// !!!! currently it is not very usefull
// becese we don't need to create new function just to add variable in separate scope, we can do this:
{
    const isPrivate = 23;
    var notPrivate = 46;
}