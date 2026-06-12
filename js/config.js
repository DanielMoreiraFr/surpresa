/* ============================================================
   config.js — ⭐ ARQUIVO DE CONFIGURAÇÃO
   
   Este é o ÚNICO arquivo que você precisa editar.
   Todos os textos, fotos, músicas e momentos estão aqui.
   ============================================================ */

const CONFIG = {

  /* ----------------------------------------------------------
     DATA E HORA DO PRIMEIRO ENCONTRO
     Formato: "AAAA-MM-DDTHH:MM:SS"
     ---------------------------------------------------------- */
  dataInicio: new Date("2024-06-12T19:00:00"),


  /* ----------------------------------------------------------
     APELIDOS DA TELA DE LOGIN
     Adicione ou remova à vontade. A ordem aqui é a ordem
     que aparece no dropdown.
     ---------------------------------------------------------- */
  apelidos: ["Nina", "nini", "ninu", "amor", "chuchu"],


  /* ----------------------------------------------------------
     TEXTO DA CARTA
     Cada string é um parágrafo separado.
     O último deve ser a assinatura.
     ---------------------------------------------------------- */
  carta: {
    paragrafos: [
         "Você sabe que é a escritora da relação, peço um desconto pelo texto. Enquanto você tem a capacidade de colocar sentimentos no papel, o melhor que eu posso tentar é traduzir o que eu sinto por você em linhas de código.",
         "Por isso, gostaria de te mostrar a nossa história. Pelos meus olhos, com tudo que eu consigo guardar de amor numa tela."
    ],
    assinatura: "Daniel boladão",
  },


  /* ----------------------------------------------------------
     FRASES DO GERADOR DE CHAMEGO
     Troque pelos seus textos personalizados.
     Pode colocar quantas quiser.
     ---------------------------------------------------------- */
  chamegoFrases: [
    "Você é a parte favorita do meu dia.",
    "Só de pensar em você já fico com vontade de sorrir.",
    "Eu escolheria você de novo em qualquer universo.",
    "Você me faz querer ser uma versão melhor de mim mesmo.",
    "Ter você por perto transforma qualquer dia em algo especial.",
    "Você é a minha pessoa favorita no mundo inteiro.",
    "Obrigado por ser exatamente quem você é, com todos seus jeitos e trejeitos.",
    "Minha parte favorita do dia é qualquer uma que inclua você",
  ],


  /* ----------------------------------------------------------
     MÚSICAS
     Cada item: { titulo, artista, motivo }
     O motivo é o parágrafo em itálico no modal.
     ---------------------------------------------------------- */
  musicas: [
    {
      titulo:  "Weird Fishes",
      artista: "Radiohead",
      motivo:  "não sei em que momento exatamente isso aconteceu, mas em no inicio do nosso relacionamento essa música passou a ser a representação sonora de como eu me sinto com você.  Eu ouço ela e meu coração pula dançando, assim como quando estou com você.",
    },
    {
      titulo:  "Girls & Boys",
      artista: "Blur",
      motivo:  "Marcou um momento muito especial do nosso relacionamento, para mim, que foi aquela noite que só ficamos aqui no meu quarto mesmo, bebendo e ouvindo música no youtube. Esse foi um momento muito feliz na minha vida.",
    },
    {
      titulo:  "Flatline",
      artista: "Justin Bieber",
      motivo:  "Lately, you've been busy, wondering if you miss me. Why did you go against me? I just wanna know. How come you act so different? Talk to me, I'll listen. All the love I'm giving, don't act like you don't know",
    },
    {
      titulo:  "Daydraming",
      artista: "Radiohead",
      motivo:  "marcou um momento que me fez criar um interesse em filmes, e você que fez esse momento acontecer, você que me marcou.",
    },
    {
      titulo:  "You Are the Right One",
      artista: "Sports",
      motivo:  "Essa talvez seja mais momentanea na minha cabeça, mas atualmente ela é VOCÊ.",
    },
  ],


  /* ----------------------------------------------------------
     MOMENTOS DO REWIND (37 momentos)
     
     Campos de cada momento:
       titulo     — nome do momento (exibido em destaque)
       data       — aparece na parte branca de baixo da polaroid
       dataTexto  — aparece no bloco de texto ao lado (pode ser igual)
       foto       — caminho da imagem na pasta images/
                    Ex: "images/foto01.jpg"
                    Enquanto não tiver a foto, deixe assim e um
                    placeholder cinza será exibido automaticamente.
       descricao  — texto descritivo (escreva à vontade, pode ser longo)
     
     A rotação da polaroid (neg/pos) e o fundo alternado (claro/escuro)
     são calculados automaticamente pelo índice — não precisa configurar.
     ---------------------------------------------------------- */
  momentos: [

    // ── 01 ─────────────────────────────────────────────────
    {
      titulo:    "Nosso Primeiro Encontro",
      data:      "12 de Junho, 2024",
      dataTexto: "12 · 06 · 2024",
      foto:      "images/foto01.jpg",
      descricao: "Nosso Primeiro DATE de verdade, onde te enganei fingindo ser rico.",
    },

    // ── 01 vez na federal ──────────────────────────────────
    {
      titulo:    "Primeira Vez Na Federal",
      data:      "26 de Novembro, 2024",
      dataTexto: "26 · 11 · 2024",
      foto:      "images/foto01b.jpg",
      descricao: "Onde você me levou pra me ajudar a sonhar.",
    },

    // ── 02 ─────────────────────────────────────────────────
    // Nota: a vez que foram com Alice
    {
      titulo:    "Nossa Primeira vez Na Praia",
      data:      "1 de Dezembro, 2024",
      dataTexto: "01 · 12 · 2024",
      foto:      "images/foto02.jpg",
      descricao: "Aqui eu já estava rendido por você.",
    },


    {
      titulo:    "Primeira ação como namorados",
      data:      "22 de Dezembro, 2024",
      dataTexto: "22 · 12 · 2024",
      foto:      "images/foto02b.jpg",
      descricao: "O amor interminável, entre você, eu e cachorro-quente.",
    },


    // ── 03 ─────────────────────────────────────────────────
    // Nota: Raspou a cabeça 3 dias depois de pedir ela em namoro
    {
      titulo:    "Testei Seu Amor Por Mim",
      data:      "26 de Dezembro, 2024",
      dataTexto: "26 · 12 · 2024",
      foto:      "images/foto03.jpg",
      descricao: "vai quer você só queria meu dinheiro.",
    },

    // ── 04 ─────────────────────────────────────────────────
    // Nota: Quase final de ano, casa de tia Neide
    {
      titulo:    "Quando Te Apresentei Pra Família",
      data:      "29 de Dezembro, 2024",
      dataTexto: "29 · 12 · 2024",
      foto:      "images/foto04.jpg",
      descricao: "apresentações e muitos animais.",
    },

    // ── 05 ─────────────────────────────────────────────────
    {
      titulo:    "Primeira Semana Inteira Juntos",
      data:      "4 de Janeiro, 2025",
      dataTexto: "4 · 1 · 2025",
      foto:      "images/foto05.jpg",
      descricao: "Uma semana linda e intensa de amores e filmes.",
    },

    // ── 06 ─────────────────────────────────────────────────
    {
      titulo:    "Momentos de Treinos",
      data:      "7 de Janeiro, 2025",
      dataTexto: "7 · 1 · 2025",
      foto:      "images/foto06.jpg",
      descricao: "Futuros bodybuilders.",
    },

    // ── 07 ─────────────────────────────────────────────────
    // Nota: "Ela é a mulher mais linda do mundo"
    {
      titulo:    "Primeiro Mês No Furetti",
      data:      "22 de janeiro, 2025",
      dataTexto: "22 · 1 · 2025",
      foto:      "images/foto07.jpg",
      descricao: "AMOR PELA COMIDA OFICIAL FAN CLUBE.",
    },

    // ── 08 ─────────────────────────────────────────────────
    {
      titulo:    "Despedida de Carol",
      data:      "2 de Fevereiro, 2025",
      dataTexto: "2 · 2 · 2025",
      foto:      "images/foto08.jpg",
      descricao: "Nascimento do cummy.",
    },

    {
      titulo:    "Quase Ermões",
      data:      "10 de Fevereiro, 2025",
      dataTexto: "10 · 2 · 2025",
      foto:      "images/foto08b.jpg",
      descricao: "twins e você começou a me apresentar pras suas amigas.",
    },

    {
      titulo:    "Treineiros Profissionais",
      data:      "17 de Fevereiro, 2025",
      dataTexto: "17 · 2 · 2025",
      foto:      "images/foto08c.jpg",
      descricao: "Treinando pra aposentadoria já.",
    },

    // ── 09 ─────────────────────────────────────────────────
    {
      titulo:    "Festa de Luna",
      data:      "22 de Março, 2025",
      dataTexto: "22 · 03 · 2025",
      foto:      "images/foto09.jpg",
      descricao: "ALCOOL LUNA BOLO FESTA AAAAAAAAAAAA.",
    },

    // ── 10 ─────────────────────────────────────────────────
    // Nota: Foto do caderno de cachorro pro ENEM
    {
      titulo:    "Promessa Ainda Em Aberto",
      data:      "23 de Março, 2025",
      dataTexto: "23 · 03 · 2025",
      foto:      "images/foto10.jpg",
      descricao: "Você sempre me acompanhando e me motivando a seguir em frente.",
    },

    // ── 11 ─────────────────────────────────────────────────
    {
      titulo:    "Primeira de Muitas Idas ao Médico",
      data:      "01 de Abril, 2025",
      dataTexto: "01 · 04 · 2025",
      foto:      "images/foto11.jpg",
      descricao: "manutenção da bixinha doente.",
    },

    // ── 12 ─────────────────────────────────────────────────
    {
      titulo:    "Eu Amo Minha Chefe de Cozinha",
      data:      "18 de Abril, 2025",
      dataTexto: "18 · 04 · 2025",
      foto:      "images/foto12.jpg",
      descricao: "primeira vez que tu fez teu macarrão com vodka, amor da minha vida, e você.",
    },

    {
      titulo:    "Enflorados e amorosos",
      data:      "19 de Abril, 2025",
      dataTexto: "19 · 04 · 2025",
      foto:      "images/foto12b.jpg",
      descricao: "Momentos de calmaria e amor num final de semana intenso.",
    },

    // ── 13 ─────────────────────────────────────────────────
    {
      titulo:    "Nenem Princesa com Filho Príncipe",
      data:      "20 de Abril, 2025",
      dataTexto: "20 · 04 · 2025",
      foto:      "images/foto13.jpg",
      descricao: "E fp pra consolar e cagar tudo.",
    },

    // ── 14 ─────────────────────────────────────────────────
    {
      titulo:    "Melhor Parceira de Estudos",
      data:      "22 de Maio, 2025",
      dataTexto: "ou não... 22 · 05 · 2025",
      foto:      "images/foto14.jpg",
      descricao: "A gente sempre tenta.",
    },

    {
      titulo:    "Confeitenina",
      data:      "31 de Maio, 2025",
      dataTexto: "31 · 05 · 2025",
      foto:      "images/foto14b.jpg",
      descricao: "Magicamente fazendo o melhor bolo do mundo.",
    },

    // ── 15 ─────────────────────────────────────────────────
    {
      titulo:    "Junine",
      data:      "10 de Junho, 2025",
      dataTexto: "10 · 06 · 2025",
      foto:      "images/foto15.jpg",
      descricao: "Princesa pretty little baby pra comemorar são joão na trindade.",
    },

    // ── 16 ─────────────────────────────────────────────────
    {
      titulo:    "Pequena Estilista",
      data:      "14 de Junho, 2025",
      dataTexto: "14 · 06 · 2025",
      foto:      "images/foto16.jpg",
      descricao: "Como sempre, você é uma pessoa muito cuidadosa e charmosa.",
    },

    // ── 17 ─────────────────────────────────────────────────
    {
      titulo:    "Eu Sou Um Bobo Com Você",
      data:      "19 de Junho, 2025",
      dataTexto: "19 · 06 · 2025",
      foto:      "images/foto17.jpg",
      descricao: "Quase como se você roubasse o ultimo neurônio da minha mente.",
    },

    {
      titulo:    "GoodFood da larica",
      data:      "21 de Junho, 2025",
      dataTexto: "21 · 06 · 2025",
      foto:      "images/foto17b.jpg",
      descricao: "Direto do presidio de Itamaracá.",
    },

    // ── 18 ─────────────────────────────────────────────────
    {
      titulo:    "Notorious Nina",
      data:      "21 de Julho, 2025",
      dataTexto: "21 · 07 · 2025",
      foto:      "images/foto18.jpg",
      descricao: "Maior soneca de NY.",
    },

    // ── 19 ─────────────────────────────────────────────────
    {
      titulo:    "Amante do Sono",
      data:      "08 de Agosto, 2025",
      dataTexto: "08 · 08 · 2025",
      foto:      "images/foto19.jpg",
      descricao: "Uma história linda de amor dentro da nossa.",
    },

    // ── 20 ─────────────────────────────────────────────────
    // Nota: Joinville
    {
      titulo:    "Você Sempre Estará Comigo",
      data:      "27 de Agosto, 2025",
      dataTexto: "Joinville · 27 · 08 · 2025",
      foto:      "images/foto20.jpg",
      descricao: "Momentos como esse, do outro lado do país, que me fazem lembrar do quão forte e real é o amor que sinto por você.",
    },

    // ── 21 ─────────────────────────────────────────────────
    {
      titulo:    "Amantes de Café, Haters de Estudar",
      data:      "16 de Setembro, 2025",
      dataTexto: "16 · 09 · 2025",
      foto:      "images/foto21.jpg",
      descricao: "A gente amava a vibe ao menos KKKKKKKKKKK.",
    },

    {
      titulo: "Minha Estrela",
      data: "10 de Outubro, 2025",
      dataTexto: "10 · 10 · 2025",
      foto: "images/foto21b.jpg",
      descricao: "Sempre tirando os melhores sorrisos de mim.",
    },

    // ── 22 ─────────────────────────────────────────────────
    {
      titulo:    "Vivenciando Com Amor",
      data:      "18 de Outubro, 2025",
      dataTexto: "18 · 10 · 2025",
      foto:      "images/foto22.jpg",
      descricao: "Me levando para experimentar e conhecer novos lugares e pessoas.",
    },

    // ── 23 ─────────────────────────────────────────────────
    {
      titulo:    "A Minha Dupla",
      data:      "31 de Outubro, 2025",
      dataTexto: "31 · 10 · 2025",
      foto:      "images/foto23.jpg",
      descricao: "A gente sempre se diverte juntos, e isso que aquece meu coração.",
    },

    // ── 24 ─────────────────────────────────────────────────
    {
      titulo:    "auau",
      data:      "04 de Novembro, 2025",
      dataTexto: "04 · 11 · 2025",
      foto:      "images/foto24.jpg",
      descricao: "princípalmente quando VOCÊ é a tabacuda.",
    },

    // ── 25 ─────────────────────────────────────────────────
    {
      titulo:    "Sempre Eleva Minha Aura 67",
      data:      "07 de Dezembro, 2025",
      dataTexto: "07 · 12 · 2025",
      foto:      "images/foto25.jpg",
      descricao: "sem swag gap por aqui.",
    },

    {
      titulo:    "Minha Melhor Amiga",
      data:      "16 de Dezembro, 2025",
      dataTexto: "16 · 12 · 2025",
      foto:      "images/foto25b.jpg",
      descricao: "que me ensina oque é estar junto, de forma individual, me faz lutar pra ser melhor.",
    },

    // ── 26 ─────────────────────────────────────────────────
    {
      titulo:    "Companheira de Fome de Um Ano",
      data:      "20 de Dezembro, 2025",
      dataTexto: "20 · 12 · 2025",
      foto:      "images/foto26.jpg",
      descricao: "Nunca poderia faltar um bom prato.",
    },

    // ── 27 ─────────────────────────────────────────────────
    {
      titulo:    "Praiamos FORTE",
      data:      "22 de Dezembro, 2025",
      dataTexto: "22 · 12 · 2025",
      foto:      "images/foto27.jpg",
      descricao: "e um Sol INTENSO.",
    },

    // ── 28 ─────────────────────────────────────────────────
    {
      titulo:    "Já Ouvi Lendas",
      data:      "lendas dizem...",
      dataTexto: "sobre ser a melhor com bebida por toda Recife",
      foto:      "images/foto28.jpg",
      descricao: "Nem todos os soldados vivem pra sempre.",
    },

    // ── 29 ─────────────────────────────────────────────────
    {
      titulo:    "Só Queria Garantir Que o Amor Era Genuíno",
      data:      "29 de Janeiro, 2026",
      dataTexto: "29 · 01 · 2026",
      foto:      "images/foto29.jpg",
      descricao: "agora você poderia estar interessada só no meu vasto intelecto.",
    },

    // ── 30 ─────────────────────────────────────────────────
    {
      titulo:    "Formas Diferentes de Amar",
      data:      "13 de Março, 2026",
      dataTexto: "13 · 03 · 2026",
      foto:      "images/foto30.jpg",
      descricao: "me lembrando que também me divirto muito sem beber.",
    },

    // ── 31 ─────────────────────────────────────────────────
    {
      titulo:    "Você Sempre Foi Um Ser Que Ilumina Minha Vida",
      data:      "15 de Março, 2026",
      dataTexto: "15 · 03 · 2026",
      foto:      "images/foto31.jpg",
      descricao: "E como ilumina.",
    },

    // ── 32 ─────────────────────────────────────────────────
    {
      titulo:    "E Que Está Comigo Na Tristeza",
      data:      "27 de Março, 2026",
      dataTexto: "27 · 03 · 2026",
      foto:      "images/foto32.jpg",
      descricao: ":(",
    },

    // ── 33 ─────────────────────────────────────────────────
    {
      titulo:    "Principalmente Na Sua!",
      data:      "13 de Abril, 2026",
      dataTexto: "13 · 04 · 2026",
      foto:      "images/foto33.jpg",
      descricao: "Cena de sequestro e pedido de socorro sem sucesso.",
    },

    // ── 34 ─────────────────────────────────────────────────
    {
      titulo:    "Me Levando Pra Melhor Bebedeira de Todas",
      data:      "2 de Maio, 2026",
      dataTexto: "2 · 05 · 2026",
      foto:      "images/foto34.jpg",
      descricao: "Ah se eles soubessem.",
    },

    // ── 35 ─────────────────────────────────────────────────
    {
      titulo:    "Pior Ressaca do Mundo, Com Você :D",
      data:      "no dia seguinte",
      dataTexto: "3 · 05 · 2026",
      foto:      "images/foto35.jpg",
      descricao: "Descobriram, (in)felizmente.",
    },

    // ── 36 ─────────────────────────────────────────────────
    {
      titulo:    "Nos Momentos Mais Duvidosos",
      data:      "15 de Maio, 2026",
      dataTexto: "15 · 05 · 2026",
      foto:      "images/foto36.jpg",
      descricao: "FINALEMNTE O MAUMAU.",
    },

    {
      titulo:    "E Nos Mais Felizes Também",
      data:      "22 de Maio, 2026",
      dataTexto: "22 · 05 · 2026",
      foto:      "images/foto38.jpg",
      descricao: "Coisas lindas do dia a dia.",
    },

    // ── 37 ─────────────────────────────────────────────────
    {
      titulo:    "Nunca Poderia Faltar Mais Um Exame",
      data:      "03 · 06 · 2026",
      dataTexto: "03 · 06 · 2026",
      foto:      "images/foto37.jpg",
      descricao: "eu sempre vou estar com você, onde que que seja.",
    },

  ], // fim de momentos

}; // fim de CONFIG