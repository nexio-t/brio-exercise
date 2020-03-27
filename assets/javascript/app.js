document.addEventListener("DOMContentLoaded", function() {
  let word = "";
  let palindrome;

/**** button event handler ****/
  $("#checkWord").click(function(e) {

    e.preventDefault();
    word = $("#palindrome")
      .val()
      .trim();
    checkPalindrome(word).then(displayResult(word));
    $("#palindrome").val("");
    
  });

/**** check if palindrome ****/
  let checkPalindrome = function(text) {

    return new Promise(function(resolve, reject) {
      let textOnly = text.toLowerCase().replace(/[^A-Za-z0-9]/g, "");
      let leftPointer = 0;
      let rightPointer = textOnly.length - 1;
      palindrome = true;
      while (leftPointer < rightPointer) {
        if (textOnly[leftPointer] !== textOnly[rightPointer]) {
          palindrome = false;
        }
        leftPointer++;
        rightPointer--;
      }
      resolve(palindrome);
    });

  };

/**** display boolean result ****/
  let displayResult = function(word) {

    if (palindrome) {
      $("#palindromeResult").text(`Yes, ${word} is a palindrome!`);
    } else {
      $("#palindromeResult").text(`Nope, ${word} is not a palindrome!`);
    }

  };
});
