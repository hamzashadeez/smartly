const initialVelocity = document.getElementById("initial");
const finalVelocity = document.getElementById("final");
const time = document.getElementById("time");
const form = document.getElementById("form");
const answerDiv = document.getElementById("answer");
const answerLabel = document.getElementById("answerLabel");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (finalVelocity.value - initialVelocity.value < 1) {
    alert(
      `Initial Velocity must be less than the final velocity ${
        finalVelocity.value - initialVelocity.value
      }`
    );
    return;
  }
  //   calculate
  let ans = (finalVelocity.value - initialVelocity.value) / time.value;
  //   setting the answer label <h2> element
  answerLabel.innerHTML = `The acceleration of an object with an
   initial velocity (u) of <b>${initialVelocity.value}m/s</b> and final velocity
    of <b>${finalVelocity.value}m/s</b> in ${
    time.value
  }s is <span class="text-green-800 font-bold">${ans.toFixed(2)}m/s2</span>`;
  answerDiv.style.display = "block";
});

document.getElementById("gotIt").addEventListener("click", () => {
  finalVelocity.value = "";
  initialVelocity.value = "";
  time.value = "";
  answerDiv.style.display = "none";
});
