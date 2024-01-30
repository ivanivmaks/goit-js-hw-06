const loginForm = document.querySelector(".login-form");

const submitForm = (event) => {
  event.preventDefault();
  const formData = {
    email: loginForm.elements.email.value,
    password: loginForm.elements.password.value,
  };
  if (formData.email === "" || formData.password === "") {
    return alert("Please fill in all the fields");
  }
  console.log(`email: ${formData.email}, password: ${formData.password}`);

  loginForm.reset();
};

loginForm.addEventListener("submit", submitForm);
