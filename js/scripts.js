$(document).ready(function() {
    $("#palindrome").submit(function(event) {
    event.preventDefault();
    const wordInput = $("#word").val()
 function palindrome(word) {
const string = word;
const reverseWord = string.split('').reverse().join(''); 
return reverseWord;
}

$("#output").text(palindrome(wordInput))
        
});
});
