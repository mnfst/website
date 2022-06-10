import type { Faq } from '../interfaces/faq.interface'

export const faqContents: Faq[] = [
	{
		question: 'Comment ça marche ?',
		answer: 'Ca marche très bien',
		usages: ['planification'],
		group: 'general'
	},
	{
		question: `Est ce que c'est gratuit ?`,
		answer: 'Ca dépend',
		usages: ['planification'],
		group: 'prix'
	},
	{
		question: `Combien ça coute ?`,
		answer: 'Ca dépend aussi',
		usages: ['planification'],
		group: 'prix'
	}
]
