//Q1:What is meant by first class functions?________________________________________________________________________________

//first class functions can be passed as argument/values into another function or can be returned from the function.
//This dual property of the functions make them call as first class function.
//They are also known as "first class citizens".

var sayHello = function heyHello(a) {
    console.log("Hello World");
    a();
}

sayHello(
    function Hi(){
        console.log("Hii World");
    }
);


//Question2:Explain call(), apply() and, bind() methods. Give an example of call(), apply(), bind()?_____________________________

