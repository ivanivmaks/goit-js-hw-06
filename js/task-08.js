const loginForm = document.querySelector(".login-form");

const submitForm = (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = {
    email: form.elements.email.value,
    password: form.elements.password.value,
  };

  if (formData.email === "" || formData.password === "") {
    return alert("Please fill in all the fields");
  }

  console.log(`Email: ${formData.email}, password: ${formData.password}`);

  form.reset();
};

loginForm.addEventListener("submit", submitForm);
