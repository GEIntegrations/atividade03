// Validação complementar do formulário da página cadastro.html.
document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("cadastroForm");
  const mensagem = document.getElementById("formMessage");

  if (!formulario) return;

  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // O navegador verifica required, email, minlength, pattern e limites numéricos.
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      mensagem.textContent = "Verifique os campos obrigatórios antes de continuar.";
      return;
    }

    const nome = document.getElementById("nome").value.trim();
    mensagem.textContent = "Mensagem enviada com sucesso, " + nome + "! Este é apenas um teste acadêmico.";
    formulario.reset();
  });
});
