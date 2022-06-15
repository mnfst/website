import type { Usage } from '../interfaces/usage.interface'

export const usageContents: Usage[] = [
  {
    name: 'Opérationnel',
    slug: 'operationnel',
    image: 'erp-operationnel.png',
    description: 'Gestion de projet, travaux, livrables et recette',
    title: 'Opérationnel',
    subtitle:
      'Sur le terrain, en chaîne de production ou au bureau, chacun collabore avec CASE en partageant son activité en temps réel.',
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
    ]
  },
  {
    name: 'Planification',
    slug: 'planification',
    image: 'erp-operationnel.png',
    description: 'Organisation des agendas, des équipes et du temps passé',
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
        title: 'Mettez en place un processus optimisé et sécurisé',
        content: `<p>CASE s’adresse à ceux et celles qui travaillent en équipe. Comment fonctionne la vôtre ?  L’échange d’informations et les validations sont au cœur des processus des entreprises. Comment peut-on les améliorer ? Les rendre plus sûrs ? Et le tout avec une expérience intuitive pour les collaborateurs.
        </p>`
      },
      {
        title: 'Une application, plusieurs entrées',
        content: `<p>Les métiers sont différents et leurs besoins également. Une application CASE sera vue de façon totalement différente par différents types d’utilisateurs, par exemple: l’opérateur va créer des ressources, son chef les valider et le commercial les facturera. Dans ce cas, chacun aura un accès limité à son périmètre.
      </p>`
      }
    ]
  },
  {
    name: 'Reporting et analytique',
    slug: 'reporting-et-analytique',
    image: 'erp-operationnel.png',
    description: 'Graphiques, tableaux, rapports, etc.',
    title:
      'Une app de planification pour gérer les ressources humaines et physiques de votre activité',
    subtitle:
      'CASE vous permet de gérer les plannings de vos équipes pour respecter les délais et les budgets impartis.',
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
    ]
  },
  {
    name: 'Devis et factures',
    slug: 'devis-et-factures',
    image: 'erp-operationnel.png',
    description: 'Devis et factures',
    title:
      'Une app de planification pour gérer les ressources humaines et physiques de votre activité',
    subtitle:
      'CASE vous permet de gérer les plannings de vos équipes pour respecter les délais et les budgets impartis.',
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
    ]
  }
]
