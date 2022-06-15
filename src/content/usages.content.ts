import type { Usage } from '../interfaces/usage.interface'

export const usageContents: Usage[] = [
  {
    name: 'Opérationnel',
    slug: 'operationnel',
    image: 'operations.jpg',
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
          benefits: ['Accès rapide sur l’app', 'Remplace un processus non optimisé']
        },
        {
          name: 'Chefs d’équipe',
          benefits: ['Gérer les collaborateurs et les ressources', 'Données en temps réel']
        },
        {
          name: 'Chefs de projet',
          benefits: ['Gestion des imprévus', 'Centralisation des documents']
        },
        {
          name: 'Direction',
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
    image: 'operations.jpg',
    description: 'Organisation des agendas, des équipes et du temps passé',
    title:
      'Une app de planification pour gérer les ressources humaines et physiques de votre activité',
    subtitle:
      'CASE vous permet de gérer les plannings de vos équipes pour respecter les délais et les budgets impartis.'
  },
  {
    name: 'Reporting et analytique',
    slug: 'reporting-et-analytique',
    image: 'operations.jpg',
    description: 'Graphiques, tableaux, rapports, etc.',
    title:
      'Une app de planification pour gérer les ressources humaines et physiques de votre activité',
    subtitle:
      'CASE vous permet de gérer les plannings de vos équipes pour respecter les délais et les budgets impartis.'
  },
  {
    name: 'Devis et factures',
    slug: 'devis -et-factures',
    image: 'operations.jpg',
    description: 'Devis et factures',
    title:
      'Une app de planification pour gérer les ressources humaines et physiques de votre activité',
    subtitle:
      'CASE vous permet de gérer les plannings de vos équipes pour respecter les délais et les budgets impartis.'
  }
]
