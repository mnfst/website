<script lang="ts">
	import { faqContents } from '../content/faqs.content'

	import type { Faq } from '../interfaces/faq.interface'

	let faqs: Faq[] = faqContents
	let activeFaq: Faq

	const groups: { name: string; faqs: Faq[] }[] = faqs.reduce(
		(acc: { name: string; faqs: Faq[] }[], faq: Faq) => {
			const group = acc.find((group) => group.name === faq.group)
			if (group) {
				group.faqs.push(faq)
			} else {
				acc.push({
					name: faq.group,
					faqs: [faq]
				})
			}
			return acc
		},
		[]
	)
</script>

<h1 class="title is-1">FAQ</h1>

<div class="container">
	{#each groups as group}
		<div class="columns">
			<div class="column is-3">
				<h2 class="title is-4">{group.name}</h2>
			</div>
			<div class="column">
				<ul>
					{#each group.faqs as faq}
						<li on:click={() => (activeFaq === faq ? (activeFaq = null) : (activeFaq = faq))}>
							<strong>{faq.question}</strong>
							<i class:is-open={activeFaq === faq} class:is-closed={activeFaq !== faq}
								>%% Icon chevron</i
							>
						</li>
						{#if activeFaq === faq}
							<p>{faq.answer}</p>
						{/if}
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.is-closed {
		background-color: orange;
	}
	.is-open {
		background-color: greenyellow;
	}
</style>
