"strict";

//Initialize Variables
const ratingOption = document.querySelectorAll(".circle");
const submitButton = document.querySelector(".submit-button");
const one = document.querySelector(".one");
let userPick = -1;

//Handles user selector changes
for (let i = 0; i < ratingOption.length; i++) {
  ratingOption[i].addEventListener("click", function () {
    submitButton.disabled = false;
    //case when rating is already selected
    if (userPick !== -1) {
      ratingOption[userPick].classList.remove("button-selected");
      //ratingOption[userPick].style.backgroundColor = "hsl(214, 16%, 25%)";
      //ratingOption[userPick].style.color = "hsl(217, 12%, 63%";
    }
    ratingOption[i].classList.add("button-selected");
    //ratingOption[i].style.backgroundColor = "hsl(217, 12%, 63%)";
    //ratingOption[i].style.color = "white";
    userPick = i;
  });
}

//Handles change of state (from rating to thank you state)
submitButton.addEventListener("click", function () {
  document.querySelector(".rating-state").style.display = "none";
  document.querySelector(".thank-you-state").style.display = "block";
  document.querySelector(".select-message").textContent = `You selected ${
    userPick + 1
  } out of 5`;
});
