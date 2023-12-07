
    
/*help from chatgpt and Hjalmar Gren my friend*/

const thanks = document.querySelector("#thanks");

thanks.addEventListener("click", function() {
  thanks.value = "Thanks!";
  thanks.disabled = true;

 /*blinking submit*/ 
  let submitButton = document.querySelector(".submit");

  submitButton.classList.add("blinking");

  submitButton.classList.remove("blinking");
  
});
