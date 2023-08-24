const form = document.querySelector("#form");
const button = document.querySelector("#button");
const divAlert = document.querySelector("#divAlert");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.querySelector("#exampleInputEmail1").value; 
  const senha = document.querySelector("#exampleInputPassword1").value; 
  button.innerHTML = `Loading... <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>`;
  button.disabled = true;

  try {
    const result = await axios.post("https://api-recados-7pfq.onrender.com/login", {
      email, senha
    });

    divAlert.innerHTML = `<div class="alert alert-success" role="alert">
            ${result.data.mensagem}!
        </div>`;
  } catch (error) {
    divAlert.innerHTML = `<div class="alert alert-danger" role="alert">
            ${error.response.data}!
        </div>`;
  }

  button.innerHTML = "Submit";
  button.disabled = false;
});
