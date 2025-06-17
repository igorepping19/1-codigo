'use strict' // Usa o modo estrito para evitar erros comuns e "comportamentos inseguros"

// Seleciona o botão com a classe "btn" no documento HTML
const alternador = document.querySelector(".btn"); 

// Adiciona um 'ouvinte de evento' (event listener) de clique ao botão
alternador.addEventListener('click', function() {
    // Alterna a classe 'dark-theme' no corpo do documento.
    // Se 'dark-theme' estiver presente, remove; se não estiver, adiciona.
    document.body.classList.toggle('dark-theme'); 

    // Obtém o nome da classe atual do corpo do documento após a alternância
    let nomeDaClasse = document.body.className; 

    // Verifica se o nome da classe atual é "light-theme"
    if (nomeDaClasse === "light-theme") { 
        // Se for "light-theme", muda o texto do botão para "Dark"
        this.textContent = "Dark"; 
    }
    else {
        // Caso contrário (se for "dark-theme"), muda o texto do botão para "Light"
        this.textContent = "Light"; 
    }
    // Exibe no console o nome da classe atual do corpo do documento
    console.log("Nome da classe atual: " + nomeDaClasse); 
});