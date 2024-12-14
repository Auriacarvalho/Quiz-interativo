Quiz Interativo

Descrição

O Quiz Interativo é uma aplicação web de perguntas e respostas que desafia os usuários com opções de múltipla escolha. Com um design simples e funcional, é ideal para testar conhecimentos de forma divertida e dinâmica.

Funcionalidades

Exibição de perguntas com opções de múltipla escolha.

Indicação das respostas corretas após a seleção.

Sistema de pontuação ao final do quiz.

Suporte para adicionar facilmente novas perguntas.

Tecnologias Utilizadas

HTML: Estrutura da página.

CSS: Estilização da interface.

JavaScript: Lógica do quiz e interatividade.

Como Executar o Projeto

Clone este repositório:

git clone <URL-do-repositório>

Navegue até o diretório do projeto:

cd quiz-interativo

Abra o arquivo index.html no navegador de sua preferência.

Estrutura do Projeto

quiz-interativo/
├── index.html   # Estrutura principal do projeto
├── style.css    # Estilos para a interface
├── script.js    # Lógica e interatividade do quiz
└── README.md    # Documentação do projeto

Como Adicionar Mais Perguntas

Abra o arquivo script.js.

Localize o array questions.

Adicione um novo objeto seguindo este formato:

{
    question: "Sua pergunta aqui",
    options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
    correct: <índice-da-opção-correta>
}

Funcionalidades Futuras

Exibição de feedback para cada pergunta.

Adição de temporizador para cada rodada do quiz.

Suporte para categorias de perguntas.

Contribuição

Contribuições são bem-vindas! Siga os passos abaixo:

Fork o repositório.

Crie uma branch para sua feature ou correção:

git checkout -b minha-feature

Faça um commit com suas alterações:

git commit -m "Adiciona minha nova feature"

Envie para sua branch:

git push origin minha-feature

Abra um Pull Request no repositório original.

Autor

Desenvolvido por Auria Carvalho.

Licença

Este projeto está licenciado sob a Licença MIT.
