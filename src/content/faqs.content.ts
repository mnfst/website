import type { Faq } from '../interfaces/faq.interface'

export const faqContents: Faq[] = [
  {
    question: 'Quelles sont les étapes pour implémenter CASE ?',
    answer: `Vous pensez que CASE peut vous faire gagner du temps et améliorer votre productivité ?

		CASE peut être déployée instantanément mais pour être vraiment efficace, la solution doit être configurée selon votre façon de travailler. Contactez-nous pour parler à un expert afin de discuter ensemble de vos challenges et des solutions apportées par CASE.
		`,
    usages: ['planification', 'operationnel', 'reporting-et-analytique', 'devis-et-factures'],
    group: 'Général'
  },
  {
    question: `Peut-on adapter CASE avec d'autres services ?`,
    answer: `CASE est une application ouverte au raccord avec d'autres solutions, applications ou et appareils tiers. Si le serveice que vous voulez raccorder autorise cette connexion, alors il sera surement possible de le faire. Posez la question à notre équipe !`,
    usages: ['operationnel', 'devis-et-factures'],
    group: 'Général'
  },
  {
    question: `Combient coûte CASE ?`,
    answer: `L'outil CASE est gratuit au téléchargement et libre de droits (Open Source). 

	C'est la configuration de la plateforme à vos processus qui est facturée sous forme de prestation de service. Si vous connaissez un développeur (ou bien que vous en êtes un), vous pouvez le configurer et l'héberger vous même en suivant notre documentation.
	
	`,
    usages: ['planification', 'operationnel', 'reporting-et-analytique', 'devis-et-factures'],
    group: 'Général'
  },
  {
    question: `Puis-je importer mes données actuelles dans CASE ?`,
    answer: `Si vous pouvez récupérer vos données, alors nous pourrons les importer pour vous dans l'outil.

	Les données pouvant varier d'un case à l'autre, les prestations d'import de données seront estimées au cas par cas.`,
    usages: ['reporting-et-analytique', 'devis-et-factures'],
    group: 'Implémentation'
  },
  {
    question: `Puis-je faire évoluer CASE au fur et à mesure que mon activité évolue ?`,
    answer: `Oui, CASE est fait pour évoluer fréquemment.

	L'ajout de nouvelles fonctionnalités seront chiffrées puis ajoutées à CASE sans qu'il n'y ait d'interruption ou de perte de données.`,
    usages: ['planification', 'operationnel', 'reporting-et-analytique', 'devis-et-factures'],
    group: 'Implémentation'
  },
  {
    question: `J'ai besoin d'une fonctionnalité particulière, que faire ?`,
    answer: `CASE est conçu pour pouvoir ajouter de nouvelles briques sur mesure si aucune des nombreuses fonctionnalités ne s'adaptent à votre usage.

	Un développement sur mesure sera réalisé dans ce cas là afin de satisfaire votre besoin.`,
    usages: ['planification', 'operationnel', 'reporting-et-analytique'],
    group: 'Implémentation'
  },
  {
    question: `Est-ce que CASE est low-code / no-code ?`,
    answer: `Non. Il y a une offre abondante de produits de type "configurez-le vous-même" au prix attractifs qui demandent au final beaucoup plus de temps et de compétences que prévu pour un résultat souvent médiocre.

	CASE fait le choix de l'expertise et du conseil: vous êtes expert dans votre domaine, vous nous faites part de vos problématiques et nous vous faisons les propositions. `,
    usages: ['planification', 'operationnel'],
    group: 'Général'
  },
  {
    question: `Ai-je besoin d'un développeur pour me lancer ?`,
    answer: `Oui. Vous pouvez asser directement par CASE pour bénéficier d'un accompagnement et d'un suivi de qualité, ou bien faire appel à un développeur tiers en lui parlant de CASE.`,
    usages: ['planification', 'reporting-et-analytique'],
    group: 'Implémentation'
  },
  {
    question: `Comment est-ce que CASE fonctionne ?`,
    answer: `CASE est une application web. Elle est accessible depuis n'importe quel navigateur (même s'il n'y a pas de réseau si installée précédement) si vous avez les accès.`,
    usages: ['planification', 'operationnel'],
    group: 'Technique'
  },
  {
    question: `Mes données seront-elles en sécurité ?`,
    answer: `Oui. Les données sont hébergées en Europe et soumis au RGPD. Nous réalisons des copies de sauvegarde quotidiennes dans le cas d'une perte de données ou d'une erreur humaine.`,
    usages: ['planification', 'reporting-et-analytique'],
    group: 'Technique'
  },
  {
    question: `CASE est-il un ERP ou un CRM ?`,
    answer: `CASE est les deux à la fois.

	CASE centralise toute l'activité en une seule plateforme au lieu d'avoir un outil différent pour chaque besoin. Cette centralisation permet d'éviter la duplication de données et ses effets, et permet d'afficher une vision d'ensemble de l'activité.`,
    usages: ['planification', 'devis -et-factures'],
    group: 'Général'
  },
  {
    question: `Est-ce que CASE est Open Source ?`,
    answer: `Oui. [Le code source de CASE]() est ouvert, libre gratuit et [documenté]().

	Cela ne veut pas dire que votre configuration ou vos données seront publiques, mais que les développeurs peuvent l'adapter à leurs besoins si nécessaire.`,
    usages: [],
    group: 'Technique'
  },
  {
    question: `Puis-je intégrer des personnes externes dans CASE ?`,
    answer: `Oui. CASE permet de définir des types d'utilisateurs afin de limiter leur accès à l'application. Un certain type d'utilisateur pourrait donc uniquement avoir un accès pour une seule action tandis que d'autres ont une vision globale.`,
    usages: ['planification'],
    group: 'Fonctionnalités'
  }
]
