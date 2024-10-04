var userInput = prompt("Enter a Sentence: ");

if (userInput === "") {
    alert("Number of words is 0 in your entered Sentence.");
} else {
    var counter = 1;
    for (var i = 0; i < userInput.length; i++) {
        if (userInput[i] === " ") {
            counter++;
        }
    }
    alert("Number of Words in ("+userInput+")= is "+counter);
}
