const initialVelocity = document.getElementById("initial");
const finalVelocity = document.getElementById("final");
const time = document.getElementById("time");
const form = document.getElementById("form");
const answerDiv = document.getElementById("answer");
const answerLabel = document.getElementById("answerLabel");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   calculate
  let ans = finalVelocity.value * initialVelocity.value * 9.8;
  //   setting the answer label <h2> element
  answerLabel.innerHTML = `The Potential Energy of a body having the mass of <b>${
    initialVelocity.value
  } kilogram</b> and the height of <b>${finalVelocity.value} meters</b>
             is <span
                class="text-green-800 font-bold">${ans.toFixed(
                  2
                )} Joules</span></h2>`;
  answerDiv.style.display = "block";
});

document.getElementById("gotIt").addEventListener("click", () => {
  finalVelocity.value = "";
  initialVelocity.value = "";
  time.value = "";
  answerDiv.style.display = "none";
});
