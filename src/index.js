import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './age.js';

function handleForm(e) {
  e.preventDefault();
  hideResults();
  let age = document.getElementById("age").value;
  let lifestyle = document.querySelector('input[name="lifestyle"]:checked').value;
  let input = new Age(age, lifestyle);
  let galacticAge = input.getAge();
  let expectedLife = input.lifeExpected();



  //new stuff
  document.getElementById("results").removeAttribute("class");
  let merc = document.getElementById("mercury");
  let venus = document.getElementById("venus");
  let mars = document.getElementById("mars");
  let jup = document.getElementById("jupiter");
  merc.innerText = galacticAge[0];
  venus.innerText = galacticAge[1];
  mars.innerText = galacticAge[2];
  jup.innerText = galacticAge[3];
  let earth1 = document.getElementById("earth1");
  let merc1 = document.getElementById("mercury1");
  let venus1 = document.getElementById("venus1");
  let mars1 = document.getElementById("mars1");
  let jup1 = document.getElementById("jupiter1");
  earth1.innerText = expectedLife[0];
  merc1.innerText = expectedLife[1];
  venus1.innerText = expectedLife[2];
  mars1.innerText = expectedLife[3];
  jup1.innerText = expectedLife[4];

  if (expectedLife[5] > 0) {
    document.getElementById("underExpected").removeAttribute("class");
  } else if (expectedLife[5] === 0) {
    document.getElementById("underExpected").removeAttribute("class");
    document.getElementById("equalExpected").removeAttribute("class");
  } else {
    document.getElementById("overExpected").removeAttribute("class");
  }
  document.getElementById("agediff").removeAttribute("class");

}

function hideResults() {
  document.getElementById("overExpected").setAttribute("class", "hidden");
  document.getElementById("equalExpected").setAttribute("class", "hidden");
  document.getElementById("underExpected").setAttribute("class", "hidden");
}

document.querySelector("form#life").addEventListener("submit", handleForm);

