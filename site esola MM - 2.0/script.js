const ler_mais = document.getElementById('ler_mais');
const ler_mais_mobile = document.getElementById('ler_mais_mobile');
const link_ler_mais = document.getElementById('ler');
const link_ler_mais_mobile = document.getElementById('ler_mobile');

function toggle_ler_mais() {
    ler_mais_mobile.classList.toggle('ler_mais_texto')
    ler_mais.classList.toggle('ler_mais_texto')
    link_ler_mais.classList.toggle('ocultar_ler_mais')
    link_ler_mais_mobile.classList.toggle('ocultar_ler_mais')
}
