import type { KeyFeature } from '../interfaces/key-feature.interface'

export const keyFeatureContents: KeyFeature[] = [
  {
    name: 'Sécurité et contenu privé',
    description:
      'Mot de passe, contenu limité par groupe, encryption SLL copies de sauvegarde quotidiennes',
    image: 'securite.png',
    usages: ['planification', 'home', 'reporting-et-analytique', 'devis-et-factures']
  },
  {
    name: 'Branding',
    description: 'Marque blanche: CASE est personnalisable à votre identité et vos couleurs',
    image: 'branding.png',
    usages: [
      'planification',
      'operationnel',
      'devis-et-factures',
      'home',
      'reporting-et-analytique',
      'devis-et-factures'
    ]
  },
  {
    name: 'Simple à utiliser',
    description: `CASE fonctionne comme les apps utilisées au quotidien sur votre smartphone, pas besoin de mode d'emploi.`,
    image: 'simple-a-utiliser.png',
    usages: ['home', 'operationnel', 'devis-et-factures']
  },
  {
    name: 'Intégration avec vos outils',
    description: `Connectez vos logiciels, outils et processus`,
    image: 'connecte.png',
    usages: ['home']
  },
  {
    name: 'Génération de documents',
    description: 'PDFs, Excel, Word… Générez vos documents officiels depuis CASE',
    image: 'docs.png',
    usages: ['home', 'reporting-et-analytique', 'devis-et-factures']
  },
  {
    name: 'Notifications',
    description: 'Notifications en temps réel, push, email, SMS…',
    image: 'notifications.png',
    usages: ['home']
  },
  {
    name: 'Mobile',
    description:
      'Tirez parti de toutes les fonctionnalités de votre dispositif: caméra, GPS, notifications push, etc.',
    image: 'mobile.png',
    usages: ['operationnel']
  },
  {
    name: `Utilisateurs et droits d'accès`,
    description: `Définissez différents groupes d'utilisateurs et le contenu auquel ils ont accès`,
    image: 'roles.png',
    usages: ['operationnel', 'reporting-et-analytique', 'devis-et-factures']
  },
  {
    name: 'Calendrier intéractif',
    description: 'Suivez les agendas de vos équipes visuellement',
    image: 'calendrier.png',
    usages: ['operationnel', 'planification']
  },
  {
    name: 'Cloud',
    description: 'Accédez à CASE partout, tout le temps et sans rien installer',
    image: 'cloud.png',
    usages: ['operationnel']
  },
  {
    name: 'Génération de rapports',
    description: `Faites-vous livrer des rapports d'activités personnalisés sur votre boite email`,
    image: 'rapport.png',
    usages: ['reporting-et-analytique']
  },
  {
    name: 'Data-visualization',
    description:
      'Graphiques et tableaux sont là pour vous montrer les informations dans un format visuel',
    image: 'reports.png',
    usages: ['reporting-et-analytique']
  },
  {
    name: 'Export au format Excel',
    description:
      'Vous gérez vos rapports sur Excel ? Sélectionnez les dates et téléchargez le tout en format XLS ou CSV',
    image: 'docs.png',
    usages: ['planification']
  },
  {
    name: 'Suivi de la rentabilité',
    description:
      'Analysez le temps et le coût du travail pour chaque projet, collaborateur ou période déterminée',
      image: 'reports.png',
    usages: ['planification', 'devis-et-factures']
  },
  {
    name: 'Congés et jours fériés',
    description: 'Gérez les jours de repos de vos collaborateurs et les jours non travaillés',
    image: 'calendrier.png',
    usages: ['planification']
  }
]
