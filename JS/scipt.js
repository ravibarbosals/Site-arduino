document.addEventListener('DOMContentLoaded', () => {
    // Seleciona a imagem do esquema conceitual
    const esquemaImagem = document.querySelector('.imagem-esquema');

    // Adiciona evento de clique para exibir um alerta
    esquemaImagem.addEventListener('click', () => {
        alert('Você clicou no esquema conceitual!');
        esquemaImagem.classList.add('clicked'); // Adiciona a classe de animação
    });

    // Adiciona evento de duplo clique para outro alerta
    esquemaImagem.addEventListener('dblclick', () => {
        alert('Você deu um duplo clique na imagem!');
    });

    // Seleciona o botão "Projeto" e adiciona foco
    const botaoProjeto = document.querySelector('.btn-Nome button');
    
    // Adiciona um evento de foco (quando o botão recebe o foco)
    botaoProjeto.addEventListener('focus', () => {
        botaoProjeto.style.outline = '3px solid #ff6347'; // Adiciona contorno de foco
    });

    // Remove o contorno quando o botão perde o foco
    botaoProjeto.addEventListener('blur', () => {
        botaoProjeto.style.outline = 'none'; // Remove o contorno
    });
    document.addEventListener('DOMContentLoaded', function () {
        console.log("O site foi carregado com sucesso!");
    
        // Exemplo de interação com um botão
        const btn = document.querySelector('button');
        if (btn) {
            btn.addEventListener('click', () => {
                alert('Você clicou no botão!');
            });
        }
    });
});