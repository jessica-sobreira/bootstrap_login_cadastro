const form = document.querySelector("#form");
const button = document.querySelector("#button");
const divAlert = document.querySelector("#divAlert");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.querySelector("#name").value;
    const email = document.querySelector("#exampleInputEmail1").value;
    const senha = document.querySelector("#exampleInputPassword1").value;
    const senha2 = document.querySelector("#exampleInputPassword2").value;
    button.innerHTML = `Loading... <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>`;
    button.disabled = true;

    try {
        const result = await axios.post("https://api-recados-7pfq.onrender.com/criar-usuario", {
            nome, email, senha, senha2
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
