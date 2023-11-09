// Função que carrega uma página no elemento com id 'content' de forma assíncrona
function loadPage(page) {
    const content = document.getElementById('content');

    // Simula uma requisição assíncrona para obter o conteúdo da página
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            content.innerHTML = html;
        })
        .catch(error => {
            console.error('Erro ao carregar a página:', error);
        });
}

// Função que carrega a página principal ('index.html') no elemento com id 'content'
function loadMainPage(){
    const content = document.getElementById('content');
    fetch('/index.html')
    .then(response => response.text())
    .then(html => {
        content.innerHTML = html;
    })
    .catch(error => {
        console.error('Erro ao carregar a página:', error);
    });
}
