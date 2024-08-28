// executa após carregar toda a página
window.onload = () => {
    // ativa o modo do java
    'use strict';

    // verifica se o navegador suporta o serviceWorker
    if('serviceWorker' in navigator ){
        navigator.serviceWorker
                .register('./sw.js');
    }
}