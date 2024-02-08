const perguntas = [
  {
    pergunta: "Qual é o jogo mais popular nos e-sports?",
    respostas: [
      "FIFA",
      "League of Legends",
      "Minecraft",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o país que mais se destaca nos e-sports?",
    respostas: [
      "Estados Unidos",
      "Coreia do Sul",
      "Brasil",
    ],
    correta: 1
  },
  {
    pergunta: "O que significa 'GG' no contexto dos e-sports?",
    respostas: [
      "Good Game",
      "Go Green",
      "Great Game",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maior competição de Dota 2?",
    respostas: [
      "The International",
      "World Cyber Games",
      "League of Legends World Championship",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o principal gênero de jogo nos e-sports?",
    respostas: [
      "Battle Royale",
      "FPS (First Person Shooter)",
      "MOBA (Multiplayer Online Battle Arena)",
    ],
    correta: 2
  },
  {
    pergunta: "Quem é conhecido como 'The GOAT' (Greatest of All Time) nos e-sports?",
    respostas: [
      "Ninja",
      "faker",
      "Daigo Umehara",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a plataforma de streaming mais popular para transmissão de jogos?",
    respostas: [
      "YouTube",
      "Twitch",
      "Facebook Gaming",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o jogo de estratégia em tempo real mais jogado nos e-sports?",
    respostas: [
      "StarCraft II",
      "Age of Empires II",
      "Command & Conquer",
    ],
    correta: 0
  },
  {
    pergunta: "O que significa 'AFK' nos e-sports?",
    respostas: [
      "Away from Keyboard",
      "Alliance of Fantastic Kings",
      "Always Fighting Kings",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o jogo de tiro em primeira pessoa mais popular nos e-sports?",
    respostas: [
      "Call of Duty",
      "Counter-Strike: Global Offensive",
      "Valorant",
    ],
    correta: 1
  },
];

// Exemplo de como acessar uma pergunta:
console.log(perguntas[0].pergunta);
// Saída: Qual é o jogo mais popular nos e-sports?





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
