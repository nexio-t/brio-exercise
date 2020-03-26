document.addEventListener("DOMContentLoaded", function() {

let word = ""; 

$("#checkWord").click(function(e) {
    e.preventDefault(); 
    // call checkPalindrome function 
    word = $("#palindrome").val().trim(); 

    console.log("++++++++++++++++++");

    checkPalindrome(word).then(displayResult(word));
    $("#palindrome").val(""); 
})

let palindrome;  

    
let checkPalindrome = function(text) {

    return new Promise(function(resolve, reject) {

        // console.log("word before: ", text); 

        word = text.toLowerCase().replace(/[^A-Za-z0-9]/g, ''); 
    
        //find a way to eliminate spaces, upper and lower case letters, punctuation 
        // console.log("checkPalindrome called"); 
        // console.log("word after: ", word); 
    
        let leftPointer = 0; 
        let rightPointer = word.length -1; 
        console.log("Palindrome before while loop: ", palindrome); 
        
        palindrome = true; 

        while (leftPointer < rightPointer) {
    
            if(word[leftPointer] !== word[rightPointer]) {
                palindrome = false
            } 
            leftPointer++; 
            rightPointer--; 
    
        }

        console.log("Palindrome after while loop: ", palindrome); 
        
        resolve(palindrome);
     
    }); 

};

let displayResult = function(word) {
    
    console.log("palindrome variable in displayResult: ", palindrome); 
    // console.log("user submitted word: ", word); 

    if (palindrome) {
        // console.log("displayResult function called: palindrome is true"); 

        $("#palindromeResult").text(`Yes, ${word} is a palindrome!`);
    } else {
        // console.log("displayResult function called: palindrome is false"); 
        $("#palindromeResult").text(`Nope, ${word} is not a palindrome!`);
    }

}

});

