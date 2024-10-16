document.getElementById("contatoForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        mensagem: document.getElementById("mensagem").value
    };
    console.log("Dados:", formData);
    fetch("http://localhost:3333/contato", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log("Success:", data);
        alert("Mensagem enviada com sucesso!");
    })
    .catch((error) => {
        console.error("Error:", error);
        alert("Ocorreu um erro ao enviar a mensagem.");
    });
});z