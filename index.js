const perguntas = [
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Compara dois valores quanto ao seu valor e tipo",
        "Compara dois valores quanto ao seu valor",
        "Atribui um valor a uma variável",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um tipo de variável",
        "Um bloco de código reutilizável",
        "Uma operação matemática",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'addEventListener()'?",
      respostas: [
        "Remover um evento de um elemento",
        "Adicionar um evento a um elemento",
        "Modificar um estilo de um elemento",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um valor fixo",
        "Um contêiner para armazenar dados",
        "Uma função",
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma condição em JavaScript?",
      respostas: [
        "Uma operação matemática",
        "Uma expressão que retorna true ou false",
        "Um tipo de variável",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de declarar uma variável em JavaScript?",
      respostas: [
        "var myVar = 10;",
        "let myVar = 10;",
        "const myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Uma biblioteca JavaScript",
        "Um modelo de objetos que representa a estrutura de um documento HTML",
        "Um método de criptografia",
      ],
      correta: 1
    },
    {
      pergunta: "O que é um loop em JavaScript?",
      respostas: [
        "Uma condição que executa um bloco de código uma única vez",
        "Um bloco de código que é executado várias vezes até que uma condição seja atendida",
        "Um tipo de variável",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a função do método 'querySelector()'?",
      respostas: [
        "Selecionar um elemento HTML pelo seu ID",
        "Selecionar um elemento HTML pelo seu nome",
        "Selecionar um elemento HTML pelo seu seletor CSS",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma string em JavaScript?",
      respostas: [
        "Um número",
        "Um tipo de dado que representa texto",
        "Uma função",
      ],
      correta: 1
    }
  ];

  const quiz = document.querySelector('#quiz')
  const template = document.querySelector ('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

  //LOOP OU REPETIÇÃO
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

for(let resposta of item.respostas) {
  const dt = quizItem.querySelector('dl dt').cloneNode(true)
dt.querySelector('span').textContent = resposta
dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
dt.querySelector('input').value = item.respostas.indexOf(resposta)
dt.querySelector('input').onchange = (event) => {
const estaCorreta = event.target.value == item.correta
if(estaCorreta) {
 corretas.add(item)
}

mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
}



quizItem.querySelector('dl').appendChild(dt)
}

quizItem.querySelector('dl dt').remove()

    // Coloca a pergunta na TELONA
  quiz.appendChild(quizItem)
    }
