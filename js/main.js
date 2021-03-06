let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");
let numberInput = document.querySelector("#numberInput");

numberInput.addEventListener("input", getFact);

function getFact() {
  let number = numberInput.value;
  fetch("http://numbersapi.com/" + number + "/year")
    .then(response => response.text())
    .then(data => {
      if (number != "") {
        fact.style.display = "block";
        factText.innerText = data;
      } else if (number == "") {
        fact.style.display = "block";
        factText.innerText = "Please Enter Another Year";
      }
    })
    .catch(err => {
      console.log(err);
    });
}
