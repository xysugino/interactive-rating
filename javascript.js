let ratingNumber = 0;

document.querySelector(".circle-5").addEventListener("click", function () {
  if (ratingNumber !== 0) {
    //change the background color of the previous rated one back to normal;
    document.querySelector(".circle-" + ratingNumber).style.backgroundColor =
      "hsl(213, 19%, 18%)";
  }
  document.querySelector(".circle-5").style.backgroundColor =
    " hsl(216, 12%, 54%)";
  ratingNumber = 5;
});

document.querySelector(".circle-4").addEventListener("click", function () {
  if (ratingNumber !== 0) {
    //change the background color of the previous rated one back to normal;
    document.querySelector(".circle-" + ratingNumber).style.backgroundColor =
      "hsl(213, 19%, 18%)";
  }
  document.querySelector(".circle-4").style.backgroundColor =
    " hsl(216, 12%, 54%)";
  ratingNumber = 4;
});

document.querySelector(".circle-3").addEventListener("click", function () {
  if (ratingNumber !== 0) {
    //change the background color of the previous rated one back to normal;
    document.querySelector(".circle-" + ratingNumber).style.backgroundColor =
      "hsl(213, 19%, 18%)";
  }
  document.querySelector(".circle-3").style.backgroundColor =
    " hsl(216, 12%, 54%)";
  ratingNumber = 3;
});

document.querySelector(".circle-2").addEventListener("click", function () {
  if (ratingNumber !== 0) {
    //change the background color of the previous rated one back to normal;
    document.querySelector(".circle-" + ratingNumber).style.backgroundColor =
      "hsl(213, 19%, 18%)";
  }
  document.querySelector(".circle-2").style.backgroundColor =
    " hsl(216, 12%, 54%)";
  ratingNumber = 2;
});

document.querySelector(".circle-1").addEventListener("click", function () {
  if (ratingNumber !== 0) {
    //change the background color of the previous rated one back to normal;
    document.querySelector(".circle-" + ratingNumber).style.backgroundColor =
      "hsl(213, 19%, 18%)";
  }
  document.querySelector(".circle-1").style.backgroundColor =
    " hsl(216, 12%, 54%)";
  ratingNumber = 1;
});

document.querySelector(".submit-button").addEventListener("click", function () {
  document.querySelector(".rating-state").style.display = "none";
  document.querySelector(".thank-you-state").style.display = "block";
  document.querySelector(
    ".select-message"
  ).textContent = `You selected ${ratingNumber} out of 5`;
});
