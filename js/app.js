$(document).ready(function() {
    console.log("ready!");

    var user_input = prompt("Please Enter a Number Homeboy/girl");
    var user_number = parseInt(user_input);
        // if user_number % 1 != 0{
        //      user_input = prompt("No decimals. Try again");
        // }

    console.log(user_number);

    newFizz(user_number);

    function newFizz(integer) {
        for (var num = 1; num <= integer; num++) {
            if (num % 3 == 0 && num % 5 == 0) {
                $("body").append("<li>Fizz Buzz</li>");
            } else if (num % 3 == 0) {
                $("body").append("<li>Fizz</li>");
            } else if (num % 5 == 0) {
                $("body").append("<li>Buzz</li>");
            } else {
                $("body").append("<li>" + num + "</li>");
            }
        }
    }
});
