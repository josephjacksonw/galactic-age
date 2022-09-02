import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './age.js';

function handleForm(e) {
  e.preventDefault();
  let age = document.getElementById("age").value;
  let lifestyle = document.getElementById('input[name="lifestyle"]:checked');
  let input = new Age(age, lifestyle);
  let galacticAge = input.getAge();
  let expectedLife = input.lifeExpected();
  let here1 = document.getElementById("here1");
  let here2 = document.getElementById("here2");
  console.log("galactic age: " + galacticAge)
  console.log("expected life: " + expectedLife)
  here1.innerText = galacticAge;
  here2.innerText == expectedLife;
}

document.querySelector("form#life").addEventListener("submit", handleForm);

