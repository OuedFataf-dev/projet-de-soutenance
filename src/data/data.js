import { list } from "postcss";

// data.js
export const cards = [
  {
    id: 1,
    title: 'Créez votre site WordPress de A à Z - Débutants (2027)',
    categories: ['popular', 'trending'],
    image: 'https://www.youtube.com/embed/SXmWVboohsA',
    badge: 'Meilleure vente',
    author: 'Stephanie Canovas',
    rating: 4.3,
    reviews: 1418,
    price: 10.99,
    originalPrice: 59.99
  },
  // ... autres cartes
];





export const firstRow = [
  { label: 'Développement Web', route: '/webflutter', isLink: true },
  { label: 'React JS', route: '/mobile', isLink: true },
  { label: 'Developpement mobile', isLink: false },
  { label: 'Python', route: '/web1', isLink: true },
  { label: 'java', isLink: false },
  { label: "machine leaning", isLink: false },
  { label: 'SQL', isLink: false },
  { label: 'Unity', isLink: false },
];

 export const secondRow = [
  { label: 'Intelligence artificielle', isLink: false },
  { label: 'Javascrip', isLink: false },
  { label: 'C++(Lanage de programmation)', isLink: false },
  { label: 'MongoDB', isLink: false },
  { label: 'Google Flutter', isLink: false },
  { label: 'Laravel', isLink: false },
  { label: 'c#(Langage de programmation)', isLink: false },
  { label: 'Plateforme Docker', isLink: false },
];



export const webDevDat = [
  {
    id: 1,
    title: 'Créez votre site WordPress de A à Z - Débutants (2028)',
    categories: ['popular', 'trending'],
    image: 'https://via.placeholder.com/300x200',
    badge: 'Meilleure vente',
    author: 'Stephanie Canovas',
    rating: 4.3,
    reviews: 1418,
    price: 10.99,
    originalPrice: 59.99
  },
  // ... autres cartes
];

export const flutterPageData = {
title: "Cours sur le sujet Google Flutter",
description: "Les cours sur Google Flutter vous font découvrir un kit de développement logiciel d'IU open source créé par Google. Apprenez la création de widgets, la gestion des états et le développement multiplate-forme pour être en mesure de créer des applications de haute qualité pour les environnements mobiles, Web et de bureau à partir d'une base de code unique.",
stats: [
  { label: "Nombre de participants", value: "3 499 413" },
  { label: "Nombre de cours", value: "492" },
  { label: "Nombre d'exercices pratiques", value: "303" },
  { label: "Note moyenne de cours", value: "4,5" }
],
tags: ["Développement web", "Informatique et logiciels", "Développement mobile", "Informatique et logiciels - Divers"]
};




export const webDevData = {
  title: "Cours sur le sujet React JS",
  description: "Les cours sur React JS vous apprennent à utiliser la bibliothèque JavaScript afin de créer des interfaces\nutilisateurs. Découvrez comment concevoir des applications Web interactives, une compétence essentielle pour les développeurs front-end et les ingénieurs logiciels qui se concentrent sur le développement Web moderne.",
  stats: [
    { label: "Nombre de participants", value: "5 842 156" },
    { label: "Nombre de cours", value: "1 243" },
    { label: "Nombre d'exercices", value: "892" },
    { label: "Note moyenne", value: "4,6" }
  ],
  tags: ["Développement web", "Informatique et logiciels", "Développement mobile", "Informatique et logiciels - Divers"],
  bundleOffer: {
    title: "Devenez un expert du web avec notre pack complet",
    subtitle: "Tout ce dont vous avez besoin pour maîtriser le développement web moderne",
    features: [
      "Cours des meilleurs instructeurs",
      "Projets pratiques inclus",
      "Accès à vie à toutes les mises à jour"
    ],
    price: "29.99 $US",
    originalPrice: "159.99 $US"
  },
  featuredCourses: [
    {
      id: 101,
      title: "React JS - La formation complète 2025",
      author: "Marc Dubois",
      rating: 4.7,
      reviews: 3250,
      price: 12.99,
      originalPrice: 79.99,
      badge: "Meilleure vente",
      image: "/react-course.jpg"
    }
    // ... autres cours
  ],
  relatedCategories: ["Frontend", "Backend", "Fullstack", "React", "Vue.js"]
};



export const courses1=[
  {
    title: "Flutter pour les débutants",
    description: "Apprenez les bases de Flutter et développez vos premières applications mobiles.",
    author: "Jean Dupont",
    rating: 4.7,
    reviews: 320,
    duration: "8h",
    sessions: 50,
    level: "Débutant",
    price: 12.99,
    originalPrice: 99.99,
    image: "https://www.youtube.com/embed/SXmWVboohsA",
    categories: ["flutter"]
  },
  {
    title: "Maîtrisez Flutter et Dart",
    description: "Un cours complet pour devenir développeur Flutter confirmé.",
    author: "Sophie Martin",
    rating: 4.5,
    reviews: 540,
    duration: "16h",
    sessions: 120,
    level: "Intermédiaire",
    price: 18.99,
    originalPrice: 109.99,
    image: "https://www.youtube.com/embed/SXmWVboohsA'",
    categories: ["flutter"]
  },
  {
    title: "Flutter avancé : et performances",
    description: "Perfectionnez vos compétences avec des techniques avancées.",
    author: "Ahmed Traoré",
    rating: 4.8,
    reviews: 210,
    duration: "10h",
    sessions: 80,
    level: "Avancé",
    price: 22.99,
    originalPrice: 119.99,
    image: "https://cdn-images-1.medium.com/max/1600/1*lOKPB1CnO1IWPQ8U_b1mHg.png",
    categories: ["flutter"]
  }
];




  export const courses2 =  [
 {
   id: 1,
   title: 'developpement web',
   categories: ['popular', 'new'],
   image: 'https://via.placeholder.com/300x200',
   badge: 'Meilleure vente',
   author: 'Alexandre Durand',
   rating: 4.7,
   reviews: 876,
    list1:'Développer un esprit de résolution de problèmes',
    list2:"Apprendre des fonctions et techniques méconnues",
    list3:"Découvrir des moyens d'optimiser son code",
   price: 14.99,
   originalPrice: 64.99,

   description:'Le Développement Web de A à Z. Apprenez HTML, CSS, Javascript, jQuery, Bootstrap, PHP, MySQL, Wordpress...'
 },
 {
   id: 3,
   title: 'Next.js pour les débutants',
   categories: ['popular', 'new'],
   image: 'https://via.placeholder.com/300x200',
   badge: 'Meilleure vente',
   author: 'Alexandre Durand',
   rating: 4.7,
   list1:'Développer un esprit de résolution de problèmes',
   list2:"Apprendre des fonctions et techniques méconnues",
   list3:"Découvrir des moyens d'optimiser son code",
   reviews: 876,
   price: 14.99,
   originalPrice: 64.99,
   description:"Intéressé par le développement web ? Apprenez à créer des sites internet en HTML, CSS, PHP et SQL en partant de zéro !"
 },
 {
   id: 4,
   title: 'JavaScript Avancé',
   categories: ['trending'],
   image: 'https://via.placeholder.com/300x200',
   badge: 'Meilleure vente',
   author: 'Sophie Martin',
   rating: 4.8,
   list1:'Développer un esprit de résolution de problèmes',
   list2:"Apprendre des fonctions et techniques méconnues",
   list3:"Découvrir des moyens d'optimiser son code",
   reviews: 2345,
   price: 11.99,
   originalPrice: 69.99

 },
 {
   id: 5,
   title: 'Vue 3 Complet',
   categories: ['popular'],
   image: 'https://via.placeholder.com/300x200',
   badge: 'Nouveau',
   author: 'Lucas Petit',
   rating: 4.9,
   reviews: 982,
   features: [
    "Comprendre les bases et concepts modernes de JavaScript.",
    "Construire des projets interactifs et dynamiques.",
    "Maîtriser les appels API, fetch et JSON."
  ],
   price: 13.99,
   originalPrice: 69.99,
   description:'Créer un site ecommerce avec un backoffice, un système de paiement et de mail pour comprendre le framework PHP Symfony 7'
 },
 {
   id: 6,
   title: 'Python pour débutants',
   categories: ['popular'],
   image: 'https://via.placeholder.com/300x200',
   badge: 'Meilleure vente',
   author: 'Nina Lefevre',
   rating: 4.6,
   list1:'Développer un esprit de résolution de problèmes',
   list2:"Apprendre des fonctions et techniques méconnues",
   list3:"Découvrir des moyens d'optimiser son code",
   reviews: 1234,
   price: 12.99,
  
   originalPrice: 59.99,
   description:"Montez en compétence sur des dizaines de notions d'algorithmique avec ces 101 exercices Python concrets."
 },
 {
   id: 7,
   features: [
    "Comprendre les bases et concepts modernes de JavaScript.",
    "Construire des projets interactifs et dynamiques.",
    "Maîtriser les appels API, fetch et JSON."
  ],
   title: 'Vue 3 Complet',
   categories: ['popular'],
   image: 'https://via.placeholder.com/300x200',
   badge: 'Nouveau',
   author: 'Lucas Petit',
   rating: 4.9,
   reviews: 982,
   list1:'Développer un esprit de résolution de problèmes',
   list2:"Apprendre des fonctions et techniques méconnues",
   list3:"Découvrir des moyens d'optimiser son code",
   price: 13.99,
   originalPrice: 69.99,
   description:"Maîtriser les bibliothèques Python pour la Data Science et le Traitement de Données: Numpy, Pandas, Matplotlib, et plus!"
 },
 {
   id: 9,
   title: 'Python pour débutants',
   categories: ['popular'],
   image: 'https://via.placeholder.com/300x200',
   badge: 'Meilleure vente',
   author: 'Nina Lefevre',
   list1:'Développer un esprit de résolution de problèmes',
   list2:"Apprendre des fonctions et techniques méconnues",
   list3:"Découvrir des moyens d'optimiser son code",
   rating: 4.6,
   reviews: 1234,
   price: 12.99,
   originalPrice: 59.99
 }
];