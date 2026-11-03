export const portfolioData = {
  personal: {
    name: "Gustavo Henrique Barros Matiello",
    shortName: "Gustavo Matiello",
    initials: "GH",
    age: 17,
    role: "Estudante de Tecnologia da Informação | Desenvolvedor em formação",
    location: "Rua Loja Maçônica Independente, 918 – Campinas, SP",
    phone: "(19) 99876-3179",
    phoneRaw: "5519998763179",
    email: "gustavohenriquebm3@gmail.com",
    avatar: "gustavo_profile.png",
    statusBadge: "Disponível para oportunidades & estágio",
    objective: "Busco oportunidades para aplicar e desenvolver meus conhecimentos na área de Tecnologia da Informação, contribuindo com responsabilidade, vontade de aprender e proatividade em um ambiente profissional.",
    bio: "Meu nome é Gustavo Henrique Barros Matiello, tenho 17 anos e atualmente estou cursando o Ensino Médio com ênfase em Tecnologia da Informação no Colégio Raphael Di Santo. Também estou estudando inglês para ampliar minhas habilidades linguísticas e profissionais. Tenho interesse em tecnologia, programação, desenvolvimento web, montagem e manutenção de computadores, fotografia, edição de vídeos e pilotagem de drones. Sou uma pessoa responsável, dedicada, organizada e com facilidade para aprender novas tecnologias."
  },

  academic: {
    institution: "Colégio Raphael Di Santo",
    degree: "Ensino Médio com ênfase em Tecnologia da Informação",
    status: "Cursando",
    completionYear: "Previsão de conclusão: 2027",
    description: "Formação técnica integrada combinando a base curricular com disciplinas especializadas em algoritmos, lógica de programação, banco de dados, redes e desenvolvimento de softwares."
  },

  courses: [
    {
      title: "Curso de Edição de Vídeo",
      category: "Criatividade & Mídia",
      description: "Técnicas de corte, ritmo narrativo, transições, tratamento de cor, sincronização de áudio e renderização otimizada para diferentes mídias.",
      icon: "video"
    },
    {
      title: "Curso de Fotografia",
      category: "Criatividade & Mídia",
      description: "Composição visual, regras de enquadramento, balanço de branco, abertura, tempo de exposição (ISO) e sensibilidade estética na captura de imagens.",
      icon: "camera"
    },
    {
      title: "Curso de Pilotagem de Drone",
      category: "Tecnologia & Operação",
      description: "Controle de voo manual e assistido, planejamento de rotas, filmagem aérea estável, procedimentos de segurança e regulamentação.",
      icon: "navigation"
    },
    {
      title: "Conhecimentos em HTML, CSS, React e Java",
      category: "Programação & Web",
      description: "Estruturação semântica de páginas, estilização moderna e responsiva, componentização de interfaces com React e fundamentos de POO com Java.",
      icon: "code"
    },
    {
      title: "Montagem e Manutenção Básica de Computadores",
      category: "Hardware & Suporte",
      description: "Identificação de componentes, arquitetura de hardware, montagem de gabinetes, cabeamento, substituição de peças e diagnósticos de funcionamento.",
      icon: "cpu"
    }
  ],

  skillCategories: [
    {
      id: "programming",
      name: "Programação & Desenvolvimento Web",
      badge: "Software & Web",
      description: "Conhecimentos sólidos em lógica computacional, estruturação de interfaces modernas e arquitetura orientada a objetos.",
      skills: [
        {
          name: "HTML5 & CSS3",
          description: "Semântica web, acessibilidade, Flexbox, Grid e design totalmente responsivo.",
          tags: ["Semântica", "Flexbox", "CSS Grid", "Responsividade"]
        },
        {
          name: "React",
          description: "Criação de componentes reutilizáveis, gerenciamento de estado e interfaces reativas modernas.",
          tags: ["Componentização", "Hooks", "UI Moderna", "Single Page Apps"]
        },
        {
          name: "JavaScript",
          description: "Lógica de programação, manipulação dinâmica do DOM, consumo de APIs e eventos interativos.",
          tags: ["ES6+", "Async/Await", "DOM", "Interatividade"]
        },
        {
          name: "Java",
          description: "Fundamentos de Programação Orientada a Objetos (POO), classes, métodos e boas práticas de estruturação.",
          tags: ["POO", "Tipagem Estática", "Lógica", "Back-end"]
        }
      ]
    },
    {
      id: "hardware",
      name: "Tecnologia & Conhecimentos Técnicos",
      badge: "Hardware & Sistemas",
      description: "Habilidades práticas na parte física dos computadores e compreensão do ecossistema computacional.",
      skills: [
        {
          name: "Montagem de Computadores",
          description: "Escolha criteriosa de hardware compatível, instalação de placas-mãe, processadores, memórias e gerenciamento de cabos.",
          tags: ["Hardware", "Cable Management", "Setup", "Compatibilidade"]
        },
        {
          name: "Manutenção Preventiva e Corretiva",
          description: "Limpeza técnica, troca de pasta térmica, identificação de falhas e substituição de peças defeituosas.",
          tags: ["Diagnóstico", "Limpeza", "Reparo Básico", "Otimização"]
        },
        {
          name: "Sistemas & Softwares",
          description: "Formatação, instalação de sistemas operacionais (Windows), drivers e softwares essenciais para produtividade.",
          tags: ["Instalação", "Drivers", "Configuração", "Windows"]
        }
      ]
    },
    {
      id: "creativity",
      name: "Criatividade & Audiovisual",
      badge: "Multimídia & Arte",
      description: "Capacidade de expressar ideias com forte impacto visual através de câmeras, enquadramentos e pós-produção.",
      skills: [
        {
          name: "Edição de Vídeos",
          description: "Edição dinâmica com cortes precisos, correção de cor, efeitos de transição e sincronia musical envolvente.",
          tags: ["Timeline", "Cortes Dinâmicos", "Áudio", "Pós-Produção"]
        },
        {
          name: "Fotografia",
          description: "Domínio prático de luz, contraste, regra dos terços, perspectiva e sensibilidade para capturar momentos únicos.",
          tags: ["Composição", "Iluminação", "Perspectiva", "Câmera"]
        },
        {
          name: "Storytelling Visual",
          description: "Concepção de narrativas visuais claras para apresentações, mídias e projetos de design.",
          tags: ["Comunicação", "Estética", "Narrativa"]
        }
      ]
    },
    {
      id: "drone_soft",
      name: "Pilotagem de Drone & Soft Skills",
      badge: "Operação & Conduta",
      description: "Domínio operacional em equipamentos avançados somado a características profissionais indispensáveis.",
      skills: [
        {
          name: "Pilotagem de Drones",
          description: "Operação segura de drones, controle espacial de voo, captação de imagens aéreas panorâmicas e estabilizadas.",
          tags: ["Voo Estável", "Captação Aérea", "Segurança", "Cinemática"]
        },
        {
          name: "Facilidade para Aprender Novas Tecnologias",
          description: "Entusiasmo constante e capacidade de absorver novas linguagens, frameworks e ferramentas com agilidade.",
          tags: ["Autoaprendizado", "Curiosidade", "Evolução Contínua"]
        },
        {
          name: "Organização e Responsabilidade",
          description: "Comprometimento com prazos, organização de arquivos e código, ética profissional e dedicação a cada projeto.",
          tags: ["Comprometimento", "Disciplina", "Pontualidade", "Proatividade"]
        }
      ]
    }
  ],

  projects: [
    {
      id: "direlands",
      title: "Direlands Extraction — Jogo 3D Web",
      category: "desenvolvimento",
      categoryLabel: "Desenvolvimento Web & Programação",
      image: "direlands.png",
      featured: true,
      badge: "Destaque Real",
      summary: "Jogo 3D completo em primeira pessoa rodando no navegador com Three.js, combates com chefes, missões e progressão modular.",
      fullDescription: "Desenvolvido com JavaScript puro e a biblioteca Three.js, o Direlands Extraction é uma experiência imersiva 3D no navegador. Conta com controles PointerLock, geração de cenários, sistema de combate contra chefes (boss.js), árvore de progressão e missões (quest.js), além de efeitos sonoros e interface de usuário integrada.",
      technologies: ["Three.js", "JavaScript", "HTML5 Canvas", "CSS3", "WebGL"],
      type: "Projeto de Desenvolvimento Web / 3D"
    },
    {
      id: "smartfit-api",
      title: "SmartFit Management — API Backend",
      category: "programacao",
      categoryLabel: "Programação & Arquitetura",
      image: null,
      iconType: "server",
      featured: false,
      badge: "Backend & MVC",
      summary: "Arquitetura RESTful com separação clara de responsabilidades em Models, Controllers e Rotas para gestão de dados.",
      fullDescription: "Projeto backend implementando o padrão de arquitetura Model-View-Controller (MVC). Apresenta módulos desacoplados para controle de alunos e registros, com tratamento de requisições, rotas estruturadas e manipulação de dados para servir aplicações cliente.",
      technologies: ["Python", "REST API", "MVC Architecture", "Modular Design"],
      type: "Projeto de Programação Backend"
    },
    {
      id: "produto-java",
      title: "Sistema de Gestão de Produtos em Java",
      category: "programacao",
      categoryLabel: "Programação Orientada a Objetos",
      image: null,
      iconType: "coffee",
      featured: false,
      badge: "Java POO",
      summary: "Aplicação fundamentada em Programação Orientada a Objetos com encapsulamento rigoroso e regras de negócio.",
      fullDescription: "Sistema construído em Java aplicando os pilares da POO: encapsulamento de atributos, construtores sobrecarregados, métodos de acesso e mutação, além de validação lógica de entradas e controle de fluxo do sistema.",
      technologies: ["Java", "POO", "Encapsulamento", "Lógica de Negócios"],
      type: "Projeto de Programação Java"
    },
    {
      id: "foto-ensaio",
      title: "Estudo de Composição Fotográfica",
      category: "fotografia",
      categoryLabel: "Fotografia",
      image: null,
      iconType: "camera",
      featured: false,
      badge: "Audiovisual",
      summary: "Série prática explorando contraste de luz natural, profundidade de campo e geometria urbana.",
      fullDescription: "Projeto prático do Curso de Fotografia explorando ângulos de visão, linhas guia, contraste luminoso e regra dos terços, registrando detalhes e perspectivas arquitetônicas.",
      technologies: ["Fotografia Digital", "Enquadramento", "Iluminação Natural", "Pós-Produção"],
      type: "Projeto de Fotografia"
    },
    {
      id: "drone-captura",
      title: "Captação Aérea e Cinemática com Drone",
      category: "drone",
      categoryLabel: "Pilotagem & Drone",
      image: null,
      iconType: "navigation",
      featured: false,
      badge: "Pilotagem",
      summary: "Operações de voo com tomadas panorâmicas, movimentos orbitais suaves e captação de paisagens em alta resolução.",
      fullDescription: "Registro e exercícios práticos de pilotagem de drone, aplicando manobras suaves de câmera aérea, controle de altitude, compensação de vento e segurança de voo.",
      technologies: ["Pilotagem de Drone", "Captação Aérea", "Cinemática", "Estabilidade"],
      type: "Projeto de Drone"
    },
    {
      id: "novo-projeto-web",
      title: "Novo Projeto Web em Desenvolvimento",
      category: "desenvolvimento",
      categoryLabel: "Desenvolvimento Web",
      image: null,
      iconType: "code",
      featured: false,
      badge: "Em Breve",
      isPlaceholder: true,
      summary: "Espaço reservado para o próximo projeto de aplicação web interativa em React que está em fase de planejamento.",
      fullDescription: "Espaço preparado para acomodar os próximos passos da jornada como desenvolvedor, incluindo novas interfaces com React, integração com bancos de dados e ferramentas modernas.",
      technologies: ["React", "JavaScript Moderno", "Tailwind CSS", "Em Breve"],
      type: "Futuro Projeto"
    }
  ],

  designReferences: [
    {
      name: "Rauno Freiberg Portfolio",
      url: "https://rauno.me/",
      award: "Awwwards Honorable Mention & SiteInspire",
      colors: "Preto profundo (#0b0b0f), cinza titânio (#1c1c24) e violeta translúcido",
      typography: "Inter / Geist com badges em JetBrains Mono",
      layout: "Grid modular minimalista com dock inferior interativa",
      motion: "Micro-interações suaves com sensibilidade ao cursor e sons sutis",
      highlight: "O cuidado milimétrico em detalhes táteis e simplicidade funcional sem poluição."
    },
    {
      name: "Dennis Snellenberg Portfolio",
      url: "https://dennissnellenberg.com/",
      award: "Awwwards Site of the Day & Site of the Year Nominee",
      colors: "Fundo escuro fosco (#141517), grafite e roxo dinâmico",
      typography: "Tipografia editorial com grande impacto nos títulos",
      layout: "Seções fluidas com espaçamento generoso e cards dinâmicos",
      motion: "Efeito magnético nos botões e revelação de cards com inércia",
      highlight: "A sensação magnética envolvente ao passar o mouse sobre botões e links."
    },
    {
      name: "Linear App Design System",
      url: "https://linear.app/",
      award: "Awwwards Site of the Day",
      colors: "Preto absoluto (#08090a), superfícies escuras e violeta elétrico (#8b5cf6)",
      typography: "Inter e Plus Jakarta Sans com legibilidade cirúrgica",
      layout: "Bordas finas com glow gradiente e efeitos de aurora boreal no fundo",
      motion: "Iluminação que segue o cursor e cards com efeito glassmorphism",
      highlight: "A estética 'Dark Tech' de classe mundial com violeta elétrico."
    },
    {
      name: "Paco Coursey Portfolio",
      url: "https://paco.me/",
      award: "SiteInspire Featured",
      colors: "Preto grafite (#0e0e11), acentos em roxo neon e cinza médio",
      typography: "Fira Code e tipografia sem serifa limpa",
      layout: "Cards técnicos independentes e objetivos",
      motion: "Transições instantâneas com feedback claro de estado",
      highlight: "Apresentação honesta e madura de competências reais sem gráficos artificiais."
    },
    {
      name: "Bruno Simon 3D Experience",
      url: "https://bruno-simon.com/",
      award: "Awwwards Site of the Year",
      colors: "Fundos atmosféricos contrastantes com iluminação em roxo e neon",
      typography: "Tipografia geométrica limpa e tecnológica",
      layout: "Integração imersiva de WebGL/Three.js diretamente no navegador",
      motion: "Física interativa e renderização fluida em tempo real",
      highlight: "Demonstração prática do poder do Three.js para criar mundos 3D na web."
    }
  ]
};
