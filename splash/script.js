// Espera o carregamento completo da página
window.addEventListener('load', () => {
    const splash = document.querySelector('.splash');
    const content = document.querySelector('.content');

    // Remove a Splash Screen após 3 segundos (3000ms)
    setTimeout(() => {
        splash.classList.add('fade-out'); // Efeito de fade-out
        setTimeout(() => {
            splash.style.display = 'none'; // Oculta totalmente
            content.style.display = 'block'; // Mostra o conteúdo
        }, 500); // Tempo da transição CSS (0.5s)
    }, 3000); // Tempo de exibição do splash (3s)
});