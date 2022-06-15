import type { KeyFeature } from '../interfaces/key-feature.interface'

export const keyFeatureContents: KeyFeature[] = [
	{
		name: 'Sécurité et privacité',
		description:
			'Mot de passe, contenu accessible uniquement à certains utilisateurs, copies de sauvegarde…',
		image: 'key-features/security.png',
		usages: ['planification']
	},
	{
		name: 'Branding',
		description: 'Adapté à votre identité et vos couleurs',
		image: 'key-features/branding.png',
		usages: ['planification', 'operationnel', 'devis -et-factures']
	},
	{
		name: 'Simple à utiliser',
		description:
			'Pas besoin de mode d’emploi, si vous savez utilisez Google, vous savez utiliser CASE',
		image: 'key-features/simple.png',
		usages: ['reporting-et-analytique']
	}
]
