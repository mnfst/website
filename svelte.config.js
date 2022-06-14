import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				enableSourcemap: true,
				sourceMap: true,
				prependData: '@use "src/styles/variables.scss" as *;'
			}
		})
	],

	kit: {
		adapter: adapter(),

		vite: {
			css: {
				preprocessorOptions: {
					scss: {
						enableSourcemap: true,
						sourceMap: true,
						additionalData: '@use "src/styles/variables.scss" as *;'
					}
				}
			}
		}
	}
}

export default config
