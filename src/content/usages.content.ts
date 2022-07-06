import type { Usage } from '../interfaces/usage.interface'

export const usageContents: Usage[] = [
  {
    name: 'Opérationnel',
    slug: 'operationnel',
    cover01: 'operationnel.png',
    cover02: 'operationnel.png',
    image: 'erp-operationnel.png',
    description: 'Production, travaux, livrables et recette. Au bureau comme sur le terrain !',
    shortDescription: 'Production, travaux, livrables et recette',
    title: 'Gérez toutes les opérations de votre entreprise au même endroit',
    subtitle: 'Sur le terrain, en chaîne de production ou au bureau, chacun collabore avec CASE.',
    positionsInterested: {
      title: 'CASE fait gagner du temps à différents corps de métiers',
      subtitle:
        'Un processus de travail bien optimisé grâce à CASE fait gagner du temps à tout le monde. Chaque métier est libre de se concentrer sur son travail.',
      positions: [
        {
          name: 'Agents opérationnels',
          image: 'manager.jpg',
          benefits: ['Accès rapide sur l’app', 'Remplace un processus non optimisé']
        },
        {
          name: 'Chefs d’équipe',
          image: 'sales.jpg',
          benefits: ['Gérer les collaborateurs et les ressources', 'Données en temps réel']
        },
        {
          name: 'Chefs de projet',
          image: 'sales.jpg',
          benefits: ['Gestion des imprévus', 'Centralisation des documents']
        },
        {
          name: 'Direction',
          image: 'manager.jpg',
          benefits: ['Analyser la production', 'Mesurer la performance des équipes']
        }
      ]
    },
    paragraphs: [
      {
        title: 'Mettez en place un processus optimisé et sécurisé',
        content: `<p>CASE s’adresse à ceux et celles qui travaillent en équipe. Comment fonctionne la vôtre ?  L’échange d’informations et les validations sont au cœur des processus des entreprises. Comment peut-on les améliorer ? Les rendre plus sûrs ? Et le tout avec une expérience intuitive pour les collaborateurs.
			</p>`
      },
      {
        title: 'Une application, plusieurs entrées',
        content: `<p>Les métiers sont différents et leurs besoins également. Une application CASE sera vue de façon totalement différente par différents types d’utilisateurs, par exemple: l’opérateur va créer des ressources, son chef les valider et le commercial les facturera. Dans ce cas, chacun aura un accès limité à son périmètre.
		</p>`
      }
    ],
    metaTitle: 'App opérationnelle  | CASE',
    metaDescription:
      'Sur le terrain, en chaîne de production ou au bureau, chacun collabore avec CASE.'
  },
  {
    name: 'Planification',
    slug: 'planification',
    cover01: 'planification/cover-01.png',
    cover02: 'planification/cover-02.jpg',
    image: 'erp-operationnel.png',
    description: 'Assignez les équipes sur les tâches et optimisez les délais de livraison.',
    shortDescription: 'Organisation des agendas, des équipes et des projets',
    title:
      'Une app de planification pour gérer les ressources humaines et physiques de votre activité',
    subtitle:
      'CASE vous permet de gérer les plannings de vos équipes pour respecter les délais et les budgets impartis.',
    positionsInterested: {
      title: 'CASE fait gagner du temps à différents corps de métiers',
      subtitle:
        'Un processus de travail bien optimisé grâce à CASE fait gagner du temps à tout le monde. Chaque métier est libre de se concentrer sur son travail.',
      positions: [
        {
          name: 'Responsable RH',
          image: 'sales.jpg',
          benefits: ['Prévoir les prochains recrutements', 'Gérer les congés, primes, etc.']
        },
        {
          name: 'Chefs d’équipe',
          image: 'manager.jpg',
          benefits: ['Gérer ses équipiers', 'Visualiser les disponibilités']
        },
        {
          name: 'Equipe opérations',
          image: 'sales.jpg',
          benefits: [
            'Renseigner les heures travaillées',
            'Accéder à l’app depuis smartphone / tablette'
          ]
        },
        {
          name: 'Direction',
          image: 'manager.jpg',
          benefits: ['Analyser la production', 'Mesurer la performance des équipes']
        },
        {
          name: 'Externes',
          image: 'sales.jpg',
          benefits: ['Organiser son planning', 'Accès restreint pour s’imputer']
        },
        {
          name: 'Commerciaux',
          image: 'manager.jpg',
          benefits: [
            'Facturer directement temps passé',
            'Préparer des devis basés sur des planifications'
          ]
        }
      ]
    },
    paragraphs: [
      {
        title: 'Travaillez mieux, plus simplement grâce au digital',
        content: `<p>Vos ressources sont-elles utilisées de façon optimale ? Comment réagissez-vous en cas d’imprévu ?</p><p>Vous le savez, le pilotage de l’activité demande des compétences organisationnelles et relationnelles ainsi que du sang-froid pour réagir rapidement. Ca c’est votre affaire. Celle de CASE, c’est de vous fournir les bonnes informations pour que vous puissiez prendre les meilleures décisions et les bons outils pour pouvoir les communiquer rapidement.
        </p>`
      },
      {
        title: 'Passez sur CASE pour piloter vos équipes',
        content: `<p>CASE est une application métier destinée aux PME qui permet de gérer des équipes RH ou bien des ressources physiques. Elle est accessible depuis n’importe quel dispositif équipé d’un navigateur web, au bureau et sur le terrain.
      </p>`
      }
    ],
    metaTitle: 'App de planification pour PME | CASE',
    metaDescription:
      'Une app de planification pour gérer les ressources humaines et physiques de votre activité.'
  },
  {
    name: 'Reporting et analytique',
    slug: 'reporting-et-analytique',
    cover01: 'reporting-et-analytique.png',
    cover02: 'operationnel.png',
    image: 'erp-operationnel.png',
    description:
      'Data-visualization, rapports quotidiens, etc. Toutes les données nécessaires pour prendre les meilleures décisions.',
    shortDescription: 'Un tableau de bord pour votre business',
    title:
      'Gérez la situation en temps réel avec CASE : la seule application dont votre entreprise a besoin',
    subtitle:
      'Il est difficile de piloter correctement une activité à l’aveugle. Les outils de monitoring et de data-visualisation sont là pour vous permettre de consulter vos données et d’en tirer parti.',
    positionsInterested: {
      title: 'Soulagez votre équipe de travail',
      subtitle:
        'Un processus de travail bien optimisé grâce à CASE fait gagner du temps à tout le monde. Chaque métier est libre de se concentrer sur son travail.',
      positions: [
        {
          name: 'Chefs d’équipe',
          image: 'manager.jpg',
          benefits: ['Gérer ses équipiers', 'Organiser les calendriers']
        },
        {
          name: 'Equipe opérations',
          image: 'sales.jpg',
          benefits: ['Accéder à l’app depuis smartphone / tablette', 'Générer documents officiels']
        },
        {
          name: 'Direction',
          image: 'manager.jpg',
          benefits: ['Analyser la production', 'Mesurer la performance des équipes']
        },
        {
          name: 'Commerciaux',
          image: 'sales.jpg',
          benefits: ['Préparer des devis et factures']
        }
      ]
    },
    paragraphs: [
      {
        title: 'Réunissez les opérations et l’analytique sur une seule et même plate-forme',
        content: `<p>CASE centralise vos processus et vos données. Toutes les informations importantes vous sont présentées, à vous de prendre les décisions. </p>
      <ul><li>Meilleure prise de décision</li>
      <li>Reporting de l'activité en temps réel</li>
      <li>Connexion à d’autres outils et APIs</li>
      <li>Exports possibles (Excel, outils spécifiques)</li></ul>`
      }
    ],
    metaTitle: 'App Reporting et analytique | CASE',
    metaDescription:
      'Gérez la situation de votre entreprise en temps réel avec CASE : la seule application dont vous avez besoin.'
  },
  {
    name: 'Devis et factures',
    slug: 'devis-et-factures',
    cover01: 'devis-et-factures.png',
    cover02: 'operationnel.png',
    image: 'erp-operationnel.png',
    description:
      'Gérez vos ventes directement depuis CASE pour gagner du temps et éviter de dupliquer vos données.',
    shortDescription: 'Gestion des ventes et des clients',
    title: 'CASE: L’app tout en un pour gérer la production et la vente de votre PME',
    subtitle: 'Une app simple qui centralise ce que vous faites et comment vous le vendez.',
    positionsInterested: {
      title: 'Quels corps de métiers ont besoin de CASE ?',
      subtitle:
        'Un processus de travail bien optimisé grâce à CASE fait gagner du temps à tout le monde. Chaque métier est libre de se concentrer sur son travail.',
      positions: [
        {
          name: 'Commerciaux',
          image: 'manager.jpg',
          benefits: [
            'Facturer les produits et services',
            'Préparer des devis basés sur des planifications'
          ]
        },
        {
          name: 'Chargés de projet',
          image: 'manager.jpg',
          benefits: ['Renseigner le temps passé sur les missions']
        },
        {
          name: 'Comptabilité',
          image: 'manager.jpg',
          benefits: ['Extraction des données comptables', 'Réunir les documents légaux']
        },
        {
          name: 'Direction',
          image: 'manager.jpg',
          benefits: ['Analyser la production', 'Mesurer la performance des équipes']
        }
      ]
    },
    paragraphs: [
      {
        title: 'Des documents administratifs et légaux en quelques clics',
        content: `<p>Générez directement vos devis, factures et autres documents légaux très rapidement. CASE allie des fonctionnalités d’ERP et de CRM avec une interface très simple..
            </p><p>Vous pouvez également paramétrer les documents que vous manipulez au quotidien: commandes, marchés, PV de réception… CASE s’adapte à votre façon de travailler.</p>`
      }
    ],
    metaTitle: 'App de Devis et Factures pour PME | CASE',
    metaDescription:
      'Gérez la situation de votre entreprise en temps réel avec CASE : la seule application dont vous avez besoin.'
  }
]
