// ============================================================
//  JED FRANCE — FICHIER DE CONFIGURATION CENTRALE
//  Modifiez ce fichier pour mettre à jour le contenu du site
//  sans toucher au code HTML/CSS
// ============================================================

const JED_CONFIG = {

  // ----------------------------------------------------------
  // INFORMATIONS GÉNÉRALES
  // ----------------------------------------------------------
  association: {
    nom: "JED France",
    slogan_fr: "Ensemble pour la dignité humaine",
    slogan_en: "Together for human dignity",
    description_fr: "Branche française de l'association JED Togo, engagée depuis plus de 25 ans pour un développement durable et solidaire en Afrique de l'Ouest.",
    description_en: "French branch of the JED Togo association, committed for over 25 years to sustainable and solidarity-based development in West Africa.",
    logo: "https://res.cloudinary.com/dztxdthmd/image/upload/v1780689618/JED-TOGO_hibswd.png",
    site_togo: "https://jedtogo.org",
    email: "associationjedtogo@gmail.com",
    telephone: "+33 6 22 28 77 69",
    adresse: "France",
  },

  // ----------------------------------------------------------
  // LIENS IMPORTANTS
  // ----------------------------------------------------------
  liens: {
    helloasso: "https://www.helloasso.com/associations/jed-france",
    site_togo: "https://jedtogo.org",
    facebook: "#",       // Remplacer par l'URL Facebook
    instagram: "#",      // Remplacer par l'URL Instagram
    tiktok: "#",         // Remplacer par l'URL TikTok
    linkedin: "#",       // Remplacer par l'URL LinkedIn
  },

  // ----------------------------------------------------------
  // VIDÉO DU PRÉSIDENT
  // ----------------------------------------------------------
  video_president: {
    url: "",             // Mettre ici l'URL YouTube embed ex: https://www.youtube.com/embed/XXXXXXX
    thumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=80",
    titre_fr: "Message du Président",
    titre_en: "Message from the President",
    description_fr: "Découvrez la vision et les engagements de JED France",
    description_en: "Discover the vision and commitments of JED France",
  },

  // ----------------------------------------------------------
  // CHIFFRES CLÉS (animés au scroll)
  // ----------------------------------------------------------
  chiffres: [
    { valeur: 25, suffixe: "+", label_fr: "Ans d'actions", label_en: "Years of action" },
    { valeur: 500, suffixe: "+", label_fr: "Enfants aidés", label_en: "Children supported" },
    { valeur: 12, suffixe: "", label_fr: "Projets actifs", label_en: "Active projects" },
    { valeur: 3000, suffixe: "+", label_fr: "Bénévoles mobilisés", label_en: "Volunteers mobilized" },
  ],

  // ----------------------------------------------------------
  // IMAGES DE FOND (remplacer par vos URLs Cloudinary)
  // ----------------------------------------------------------
  images: {
    hero: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80",
    a_propos: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=1600&q=80",
    projets: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&q=80",
    don: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80",
    benevoles: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80",
  },

  // ----------------------------------------------------------
  // TIMELINE — HISTOIRE DE JED
  // ----------------------------------------------------------
  timeline: [
    {
      annee: "1999",
      titre_fr: "Fondation de JED Togo",
      titre_en: "JED Togo founded",
      texte_fr: "Création de l'association à Lomé, Togo, avec pour mission d'accompagner les populations vers un développement durable et apolitique.",
      texte_en: "The association was founded in Lomé, Togo, with a mission to support communities toward sustainable, apolitical development.",
      couleur: "orange",
    },
    {
      annee: "2005",
      titre_fr: "Premiers camps chantiers",
      titre_en: "First workcamps",
      texte_fr: "Lancement des camps chantiers internationaux, accueillant des bénévoles du monde entier pour des projets concrets sur le terrain.",
      texte_en: "Launch of international workcamps, welcoming volunteers from around the world for hands-on projects in the field.",
      couleur: "orange",
    },
    {
      annee: "2018",
      titre_fr: "Maison d'accueil des enfants",
      titre_en: "Children's Welcome House",
      texte_fr: "Ouverture de la Maison d'accueil des Enfants Orphelins et Vulnérables (MDE) à Adidogomé, Lomé.",
      texte_en: "Opening of the Welcome House for Orphaned and Vulnerable Children (MDE) in Adidogomé, Lomé.",
      couleur: "jaune",
    },
    {
      annee: "2022",
      titre_fr: "Expansion des programmes",
      titre_en: "Programme expansion",
      texte_fr: "Développement des programmes d'inclusion des femmes et veuves, de reboisement et d'assainissement communautaire.",
      texte_en: "Expansion of programmes for women and widows' inclusion, reforestation, and community sanitation.",
      couleur: "jaune",
    },
    {
      annee: "2024",
      titre_fr: "Création de JED France",
      titre_en: "JED France created",
      texte_fr: "Lancement de la branche française pour renforcer les liens entre la France et le Togo et amplifier l'impact des actions de terrain.",
      texte_en: "Launch of the French branch to strengthen ties between France and Togo and amplify the impact of field actions.",
      couleur: "vert",
    },
  ],

  // ----------------------------------------------------------
  // PROJETS
  // ----------------------------------------------------------
  projets: [
    {
      id: 1,
      statut: "realise",  // "realise" | "en_cours" | "a_venir"
      titre_fr: "Maison d'accueil des enfants (MDE)",
      titre_en: "Children's Welcome House (MDE)",
      description_fr: "Construction et gestion d'une maison d'accueil pour les enfants orphelins et vulnérables à Adidogomé, Lomé.",
      description_en: "Construction and management of a welcome house for orphaned and vulnerable children in Adidogomé, Lomé.",
      annee: "2018",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80",
      lien_togo: "https://jedtogo.org/projets/",
      cta_fr: "Voir sur jedtogo.org",
      cta_en: "View on jedtogo.org",
    },
    {
      id: 2,
      statut: "realise",
      titre_fr: "Reboisement et assainissement",
      titre_en: "Reforestation and sanitation",
      description_fr: "Programmes de plantation d'arbres, gestion des écosystèmes forestiers et nettoyage des espaces communautaires.",
      description_en: "Tree planting programmes, forest ecosystem management, and community space clean-up.",
      annee: "2015",
      image: "https://images.unsplash.com/photo-1542601906897-b50e1d5d8e81?w=800&q=80",
      lien_togo: "https://jedtogo.org/projets/",
      cta_fr: "Voir sur jedtogo.org",
      cta_en: "View on jedtogo.org",
    },
    {
      id: 3,
      statut: "en_cours",
      titre_fr: "Terrain de jeux pour la MDE",
      titre_en: "Playground for the MDE",
      description_fr: "Aménagement d'un espace sécurisé pour les enfants de la MDE : trampoline, balançoires, tobogans, terrain de football. Objectif : 3 550 000 FCFA.",
      description_en: "Creating a safe play area for MDE children: trampoline, swings, slides, football pitch. Target: 3,550,000 FCFA.",
      annee: "2026",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=800&q=80",
      lien_don: "https://www.helloasso.com/associations/jed-france",
      cta_fr: "Soutenir ce projet",
      cta_en: "Support this project",
    },
    {
      id: 4,
      statut: "a_venir",
      titre_fr: "Programme santé communautaire 2026",
      titre_en: "Community health programme 2026",
      description_fr: "Campagnes de sensibilisation à la santé, accès aux soins de base et accompagnement des populations rurales.",
      description_en: "Health awareness campaigns, access to basic care, and support for rural communities.",
      annee: "2026",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      lien_don: "https://www.helloasso.com/associations/jed-france",
      cta_fr: "Devenir partenaire",
      cta_en: "Become a partner",
    },
  ],

  // ----------------------------------------------------------
  // AGENDA — ÉVÉNEMENTS
  // ----------------------------------------------------------
  agenda: [
    {
      date: "2026-07-14",
      titre_fr: "Camp chantier Togo 2026",
      titre_en: "Togo Workcamp 2026",
      lieu: "Lomé, Togo",
      description_fr: "Rejoignez notre équipe de bénévoles pour un camp chantier de 2 semaines au Togo. Actions terrain, rencontres, échanges culturels.",
      description_en: "Join our volunteer team for a 2-week workcamp in Togo. Field actions, meetings, cultural exchanges.",
      lien: "https://jedtogo.org/programmes/",
      type: "benevole",
    },
    {
      date: "2026-09-20",
      titre_fr: "Soirée de gala — Collecte de fonds",
      titre_en: "Gala evening — Fundraising",
      lieu: "Lyon, France",
      description_fr: "Soirée de gala au profit de la Maison d'accueil des enfants. Dîner, animations et témoignages.",
      description_en: "Gala evening in aid of the Children's Welcome House. Dinner, entertainment and testimonials.",
      lien: "https://www.helloasso.com/associations/jed-france",
      type: "evenement",
    },
    {
      date: "2026-10-10",
      titre_fr: "Journée bénévoles JED France",
      titre_en: "JED France Volunteer Day",
      lieu: "Paris, France",
      description_fr: "Rencontre des bénévoles JED France : présentation des projets, échanges et organisation des actions à venir.",
      description_en: "JED France volunteer meeting: project presentations, exchanges and planning upcoming actions.",
      lien: "#",
      type: "benevole",
    },
  ],

  // ----------------------------------------------------------
  // ÉQUIPE / BÉNÉVOLES
  // ----------------------------------------------------------
  benevoles: {
    titre_fr: "Rejoindre JED France",
    titre_en: "Join JED France",
    description_fr: "Que vous soyez disponible une heure par semaine ou pour un camp chantier au Togo, il y a une place pour vous dans l'aventure JED.",
    description_en: "Whether you have an hour a week or want to join a workcamp in Togo, there's a place for you in the JED adventure.",
    engagements: [
      { icone: "ti-clock", label_fr: "Quelques heures / semaine", label_en: "A few hours / week" },
      { icone: "ti-world", label_fr: "Camp chantier au Togo (2 semaines)", label_en: "Workcamp in Togo (2 weeks)" },
      { icone: "ti-megaphone", label_fr: "Sensibilisation en France", label_en: "Awareness in France" },
      { icone: "ti-chart-bar", label_fr: "Collecte de fonds", label_en: "Fundraising" },
    ],
  },

  // ----------------------------------------------------------
  // SEO (à compléter après validation du design)
  // ----------------------------------------------------------
  seo: {
    // index.html
    index: {
      title: "JED France — Ensemble pour la dignité humaine",
      description: "",  // À compléter
      og_image: "",     // À compléter
    },
    // a-propos.html
    a_propos: {
      title: "À propos — JED France",
      description: "",
      og_image: "",
    },
    // projets.html
    projets: {
      title: "Nos projets — JED France",
      description: "",
      og_image: "",
    },
    // agenda.html
    agenda: {
      title: "Agenda — JED France",
      description: "",
      og_image: "",
    },
    // benevoles.html
    benevoles: {
      title: "Devenir bénévole — JED France",
      description: "",
      og_image: "",
    },
    // don.html
    don: {
      title: "Faire un don — JED France",
      description: "",
      og_image: "",
    },
    // contact.html
    contact: {
      title: "Contact — JED France",
      description: "",
      og_image: "",
    },
  },

};
