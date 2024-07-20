var submitButton = document.getElementById("submit-button");
submitButton.onclick = function() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert("Formulário enviado com sucesso!");
        // Aqui você pode adicionar o código para realmente enviar o formulário se necessário
    }
};
