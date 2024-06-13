// import "./sass/main.scss";
"use strict";

const firstName = document.querySelector("[data-firstName]");
const lastName = document.querySelector("[data-lastName]");
const emailEl = document.querySelector("[data-email]");
const passwordEl = document.querySelector("[data-password]");
const form = document.querySelector("[data-form]");

const checkUserName = () => {
  let valid = false;

  const firstname = firstName.value.trim();

  if (!isRequired(firstname)) {
    firstName.placeholder = "";
    showError(firstName, "First Name Cannot be empty");
  } else {
    showSuccess(firstName);
    valid = true;
  }
  return valid;
};

const checkLastName = () => {
  let valid = false;

  const lastname = lastName.value.trim();

  if (!isRequired(lastname)) {
    lastName.placeholder = "";
    showError(lastName, "last Name Cannot be empty");
  } else {
    showSuccess(lastName);
    valid = true;
  }
  return valid;
};

const checkEmail = () => {
  let valid = false;

  const email = emailEl.value.trim();

  if (!isRequired(email)) {
    emailEl.placeholder = "";
    showError(emailEl, "Email cannot be empty");
  } else if (!isEmailValid(email)) {
    showError(emailEl, "Looks like this is not an email");
  } else {
    showSuccess(emailEl);
    valid = true;
  }
  return valid;
};

const checkPassword = () => {
  let valid = false;

  const password = passwordEl.value.trim();

  if (!isRequired(password)) {
    passwordEl.placeholder = "";
    showError(passwordEl, "Password cannot be empty");
  } else {
    showSuccess(passwordEl);
    valid = true;
  }
  return valid;
};

const isRequired = (value) => (value === "" ? false : true);

const isEmailValid = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  // console.log(error);
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.add("success");
  formField.classList.remove("error");

  const error = formField.querySelector("small");
  error.textContent = "";
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkUserName();
  checkLastName();
  checkEmail();
  checkPassword();
});
