document.addEventListener("DOMContentLoaded", function() {

console.log("page loaded"); 

// $(document).on("click", "#checkWord", function(e) {
//     e.preventDefault(); 
//     console.log("button clicked"); 

// }); 

let word = ""; 

$("#checkWord").click(function(e) {
    e.preventDefault(); 
    console.log("button clicked"); 
    // call checkPalindrome function 
    word = $("#palindrome").val().trim(); 
    console.log("submitted word is: ", word); 

    checkPalindrome(word).then(displayResult());

})

let palindrome = true;  
    
let checkPalindrome = function(text) {

    return new Promise(function(resolve, reject) {

        console.log("word before: ", text); 

        word = text.toLowerCase().replace(/[^A-Za-z0-9]/g, ''); 
    
        //find a way to eliminate spaces, upper and lower case letters, punctuation 
        console.log("checkPalindrome called"); 
        console.log("word after: ", word); 
    
        let leftPointer = 0; 
        let rightPointer = word.length -1; 
        console.log("Palindrome before while loop: ", palindrome); 
    
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


});

