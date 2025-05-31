// src/data/data.js
export const categoryData = {
    title: "Google Flutter",
    description: "Les cours sur Google Flutter vous font découvrir un kit de développement logiciel d'IU open source créé par Google...",
    stats: {
      students: "3 499 413",
      courses: "492",
      exercises: "303",
      rating: 4.5
    },
    tags: ["Développement", "Informatique et logiciels", "Développement mobile"],
    promotion: {
      title: "Vous souhaitez améliorer vos compétences sur le sujet Google Flutter? Nous avons ce qu'il vous faut.",
      description: "Retrouvez tout ce dont vous avez besoin pour atteindre vos objectifs dans un lot pratique.",
      features: [
        "✅ Cours parmi les mieux notés",
        "✅ Populaires auprès de participants au profil similaire au vôtre",
        "✅ Conseils dispensés par des formateurs confirmés"
      ],
      price: "22.98 $US",
      originalPrice: "134.98 $US"
    }
  };
  
  export const tabs = [
    { id: 'popular', label: 'Le plus populaire' },
    { id: 'trending', label: 'Tendance' },
    { id: 'new', label: 'Nouveau' }
  ];
  
  export const cards = [
    {
      id: 1,
      title: 'Créez votre site WordPress de A à Z - Débutants (2025)',
      categories: ['popular', 'trending'],
      image: 'https://via.placeholder.com/300x200',
      badge: 'Meilleure vente',
      author: 'Stephanie Canovas',
      rating: 4.3,
      reviews: 1418,
      price: 10.99,
      originalPrice: 59.99,
      duration: "8h",
      sessions: 32,
      level: "Tous niveaux"
    },
    {
      id: 2,
      title: 'Maîtriser React.js',
      categories: ['trending', 'new'],
      image: 'https://via.placeholder.com/300x200',
      badge: 'Nouveau',
      author: 'Matthieu Passerel',
      rating: 4.5,
      reviews: 1020,
      price: 12.99,
      originalPrice: 49.99,
      duration: "10h",
      sessions: 45,
      level: "Intermédiaire"
    }
  ];
  
  export const relatedTopics = [
    "Développement Web",
    "React JS",
    "Next.js",
    "Langage HTML",
    "JavaScript",
    "Cadre d'application Angular",
    "CSS",
    "TypeScript",
    "Vue.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PHP",
    "Laravel",
    "Symfony",
    "Django"
  ];
  
  export const filterOptions = {
    notes: [
      { label: "0 à 1 heure (920)", value: "0-1" },
      { label: "1 à 3 heures (3 161)", value: "1-3" },
      { label: "3-6 heures (2 650)", value: "3-6" },
      { label: "6-17 heures (3 543)", value: "6-17", disabled: true }
    ],
    duration: [
      { label: "Court (<1h)", value: "short" },
      { label: "Moyen (1-3h)", value: "medium" },
      { label: "Long (>3h)", value: "long" }
    ],
    level: [
      { label: "Tous niveaux", value: "all" },
      { label: "Débutant", value: "beginner" },
      { label: "Intermédiaire", value: "intermediate" },
      { label: "Avancé", value: "advanced" }
    ]
  };
  
  export const udemyBusiness = {
    title: "Les meilleures entreprises font confiance à Udemy",
    description: "Offrez aux membres de votre équipe un accès à plus de 250 000 cours parmi les meilleurs d'Udemy",
    logos: [
      "https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg",
      "https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg",
      "https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg",
      "https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
    ]
  };
  
  export const footerContent = {
    title: "En savoir plus sur le sujet Google Flutter",
    description: "Flutter est un SDK Google permettant de créer des interfaces natives pour iOS et Android à l'aide du langage de programmation Dart. Flutter peut être intégré avec les bases de code iOS et Android existantes. Il s'agit d'un outil gratuit et open source."
  };