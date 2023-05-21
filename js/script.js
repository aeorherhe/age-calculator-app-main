// restrict text on number input fields

// select html elements
const inputDate = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");
const form = document.querySelector(".form");
const errorMsg = document.querySelectorAll(".error-msg");

// sellect output elements
const outputYear = document.querySelector(".output-year");
const outputMonth = document.querySelector(".output-month");
const outputDate = document.querySelector(".output-date");
const output = document.querySelectorAll(".output");

// get dates and replace input values with
const date = new Date();
const currentDate = date.getDate();
const currentMonth = 1 + date.getMonth();
const currentYear = date.getFullYear();
const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// check form validity before submiting.
function isFormValid(input) {
  input.forEach(function (input) {
    if (input.parentElement.classList.contains("show-error")) {
      output.forEach(function (output) {
        output.textContent = "- -";
      });
    }
  });
}

// add event listener to form
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let validation = true;
  if (validation) {
    if (inputDate.value == "") {
      e.preventDefault();
      errorMsg[0].textContent = "This field is required";
      errorMsg[0].parentElement.classList.add("show-error");
    } else if (Number(inputDate.value) > 31 || Number(inputDate.value) <= 0) {
      errorMsg[0].parentElement.classList.add("show-error");
      errorMsg[0].textContent = "Must be a valid day";
    } else if (
      Number(inputDate.value) > daysInMonths[Number(inputMonth.value - 1)]
    ) {
      errorMsg[0].parentElement.classList.add("show-error");
      errorMsg[0].textContent = "Must be a valid date";
    } else if (Number(inputDate.value) != NaN) {
      errorMsg[0].parentElement.classList.add("show-error");
      errorMsg[0].textContent = "Must be a number";
    } else {
      inputDate.parentElement.classList.remove("show-error");
    }
    if (inputMonth.value == "") {
      errorMsg[1].textContent = "This field is required";
      errorMsg[1].parentElement.classList.add("show-error");
    } else if (Number(inputMonth.value) > 12 || Number(inputMonth.value) <= 0) {
      errorMsg[1].parentElement.classList.add("show-error");
      errorMsg[1].textContent = "Must be a valid month";
    } else if (Number(inputMonth.value) != NaN) {
      errorMsg[1].parentElement.classList.add("show-error");
      errorMsg[1].textContent = "Must be a number";
    } else {
      inputMonth.parentElement.classList.remove("show-error");
    }
    if (inputYear.value == "") {
      errorMsg[2].textContent = "This field is required";
      errorMsg[2].parentElement.classList.add("show-error");
    } else if (Number(inputYear.value) > currentYear) {
      errorMsg[2].parentElement.classList.add("show-error");
      errorMsg[2].textContent = "Must be in the past";
    } else if (Number(inputYear.value) <= 0) {
      errorMsg[2].parentElement.classList.add("show-error");
      errorMsg[2].textContent = "Must be a valid year";
    } else if (Number(inputYear.value) != NaN) {
      errorMsg[2].parentElement.classList.add("show-error");
      errorMsg[2].textContent = "Must be a number";
    } else {
      inputYear.parentElement.classList.remove("show-error");
    }

    //   calculate output years, month and date
    outputYear.textContent = currentYear - Number(inputYear.value);
    if (Number(inputMonth.value > currentMonth)) {
      outputMonth.textContent = 12 - (Number(inputMonth.value) - currentMonth);
      outputYear.textContent = outputYear.textContent - 1;
    } else {
      outputMonth.textContent = currentMonth - Number(inputMonth.value);
    }
    if (Number(inputDate.value > currentDate)) {
      outputDate.textContent =
        daysInMonths[Number(inputMonth.value - 1)] -
        (Number(inputDate.value) - currentDate);
      outputMonth.textContent = outputMonth.textContent - 1;
    } else {
      outputDate.textContent = currentDate - Number(inputDate.value);
    }
  }

  isFormValid([inputDate, inputMonth, inputYear]);
});
