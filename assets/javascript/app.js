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


});

