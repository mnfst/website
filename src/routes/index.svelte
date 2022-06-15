<script lang="ts">
	import { keyFeatureContents } from '../content/key-features.content'

	import { usageContents } from '../content/usages.content'
	import type { KeyFeature } from '../interfaces/key-feature.interface'
	import type { Usage } from '../interfaces/usage.interface'

	let usages: Usage[] = usageContents
	let keyFeatures: KeyFeature[] = keyFeatureContents

	let activeKeyFeature: KeyFeature = keyFeatures[0]
</script>

<!-- Hero -->
<section class="hero is-primary is-large is-relative has-gradient">
	<div class="hero-body">
		<div class="container">
			<div class="columns  is-vcentered reverse-columns">
				<div
					class="column
        is-10-mobile 
        is-10-tablet 
        is-6-desktop "
				>
					<h1 class="title is-1">Et si votre activité avait son app personnalisée ?</h1>
					<p class="subtitle">Hero subtitle</p>
					<div class="buttons">
						<button class="button is-yellow">Esablished technical teams</button>
						<button class="button">Less-technical teams</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<img class="hero-figure-wrapper" src="/img/case-hero-list.png" />
</section>

<!-- Usage list -->
<div class="container">
	<div class="columns is-multiline is-mobile">
		{#each usages as usage}
			<div class="column is-6 notification is-info">
				<a href="/usages/{usage.slug}">{usage.name}</a>
			</div>
		{/each}
	</div>
</div>

<!-- Key features -->
<div class="hero is-warning">
	<div class="container">
		<div class="columns">
			<div class="column is-10 is-offset-1">
				<h2 class="title is-2">On travaille mieux quand on a les bons outils</h2>
				<p>
					CASE vous est livré avec un paquet de fonctionnalités prêtes à être employées pour votre
					cause.
				</p>
			</div>
		</div>
		<div class="columns">
			<div class="column is-4">
				<ul>
					{#each keyFeatures as keyFeature}
						<li
							on:mouseover={() => (activeKeyFeature = keyFeature)}
							on:focus={() => (activeKeyFeature = keyFeature)}
							class:is-active={activeKeyFeature === keyFeature}
						>
							<strong>{keyFeature.name}</strong>
							<p>{keyFeature.description}</p>
						</li>
					{/each}
				</ul>
			</div>
			<div class="column">
				<div class="box">
					<img src={activeKeyFeature.image} alt={activeKeyFeature.name} />
				</div>
			</div>
		</div>
	</div>
</div>
<div class="container">
	<div class="columns">
		<div class="column">
			<p class="">Titres</p>
			<h1 class="title is-1">Title h1 : Quam diu etiam furor iste tuus nos eludet</h1>
			<h2 class="title is-2">Title h2 : Quam diu etiam furor iste tuus nos eludet</h2>
			<h3 class="title is-3">Title h3 : Quam diu etiam furor iste tuus nos eludet</h3>
			<h4 class="title is-4">Title h4 : Quam diu etiam furor iste tuus nos eludet</h4>
			<h5 class="title is-5">Title h5 : Quam diu etiam furor iste tuus nos eludet</h5>
			<h6 class="title is-6">Title h6 : Quam diu etiam furor iste tuus nos eludet</h6>
			<p>Prima luce, cum quibus mons aliud consensu ab eo.</p>
			<hr />
			<p class="">Titres suivis et précédés d'un paragraphe</p>
			<h1 class="title is-1">Title h1 : Quam diu etiam furor iste tuus nos eludet</h1>
			<p>Prima luce, cum quibus mons aliud consensu ab eo.</p>
			<h2 class="title is-2">Title h2 : Quam diu etiam furor iste tuus nos eludet</h2>
			<p>Prima luce, cum quibus mons aliud consensu ab eo.</p>

			<h3 class="title is-3">Title h3 : Quam diu etiam furor iste tuus nos eludet</h3>
			<p>Prima luce, cum quibus mons aliud consensu ab eo.</p>

			<h4 class="title is-4">Title h4 : Quam diu etiam furor iste tuus nos eludet</h4>
			<p>Prima luce, cum quibus mons aliud consensu ab eo.</p>

			<h5 class="title is-5">Title h5 : Quam diu etiam furor iste tuus nos eludet</h5>
			<p>Prima luce, cum quibus mons aliud consensu ab eo.</p>

			<h6 class="title is-6">Title h6 : Quam diu etiam furor iste tuus nos eludet</h6>
			<p>Prima luce, cum quibus mons aliud consensu ab eo.</p>

			<p>
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
				egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
				eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
				eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi,
				condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
				condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in
				turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
				neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
				tincidunt quis, accumsan porttitor, facilisis luctus, metus
			</p>
			<hr />
			<p class="">Titres précédés d'un span (date ou tag par exemple)</p>
			<span>Le 28/10/2021</span>
			<h1 class="title is-1">Title h1 : Quam diu etiam furor iste tuus nos eludet</h1>
			<span>Le 28/10/2021</span>
			<h2 class="title is-2">Title h2 : Quam diu etiam furor iste tuus nos eludet</h2>
			<span>Le 28/10/2021</span>
			<h3 class="title is-3">Title h3 : Quam diu etiam furor iste tuus nos eludet</h3>
			<span>Le 28/10/2021</span>
			<h4 class="title is-4">Title h4 : Quam diu etiam furor iste tuus nos eludet</h4>
			<span>Le 28/10/2021</span>
			<h5 class="title is-5">Title h5 : Quam diu etiam furor iste tuus nos eludet</h5>
			<span>Le 28/10/2021</span>
			<h6 class="title is-6">Title h6 : Quam diu etiam furor iste tuus nos eludet</h6>
			<hr />

			<p class="">Titres précédés d'un séparateur</p>
			<hr />
			<h1 class="title is-1">Title h1 : Quam diu etiam furor iste tuus nos eludet</h1>
			<hr />
			<h2 class="title is-2">Title h2 : Quam diu etiam furor iste tuus nos eludet</h2>
			<hr />
			<h3 class="title is-3">Title h3 : Quam diu etiam furor iste tuus nos eludet</h3>
			<hr />
			<h4 class="title is-4">Title h4 : Quam diu etiam furor iste tuus nos eludet</h4>
			<hr />
			<h5 class="title is-5">Title h5 : Quam diu etiam furor iste tuus nos eludet</h5>
			<hr />
			<h6 class="title is-6">Title h6 : Quam diu etiam furor iste tuus nos eludet</h6>
			<hr />
			<p class="">Titres suivis et précédés d'une image</p>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<h1 class="title is-1">Title h1 : Quam diu etiam furor iste tuus nos eludet</h1>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<h2 class="title is-2">Title h2 : Quam diu etiam furor iste tuus nos eludet</h2>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<h3 class="title is-3">Title h3 : Quam diu etiam furor iste tuus nos eludet</h3>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<h4 class="title is-4">Title h4 : Quam diu etiam furor iste tuus nos eludet</h4>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<h5 class="title is-5">Title h5 : Quam diu etiam furor iste tuus nos eludet</h5>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<h6 class="title is-6">Title h6 : Quam diu etiam furor iste tuus nos eludet</h6>
			<p>
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
				egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
				eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
				eleifend leo.
			</p>
			<hr />
			<p class="">Elements inline</p>
			<ul>
				<li>
					Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
					ultricies in, diam. Sed arcu. Cras consequat.
				</li>
				<li>
					Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
					eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
					facilisis luctus, metus.
				</li>
				<li>
					Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
					sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
				</li>
				<li>
					Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut,
					elementum vulputate, nunc.
				</li>
			</ul>
			<ul>
				<li>
					Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
					ultricies in, diam. Sed arcu. Cras consequat.
				</li>
				<li>
					Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
					eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
					facilisis luctus, metus.
				</li>
				<li>
					Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate
					sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
				</li>
				<li>
					Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut,
					elementum vulputate, nunc.
					<ul>
						<li>
							Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a,
							ultricies in, diam. Sed arcu. Cras consequat.
						</li>
						<li>
							Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate
							magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan
							porttitor, facilisis luctus, metus.
						</li>
						<li>
							Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
							vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit
							amet, nisi.
						</li>
						<li>
							Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut,
							elementum vulputate, nunc.
							<ul>
								<li>
									Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in,
									pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
								</li>
								<li>
									Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu
									vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis,
									accumsan porttitor, facilisis luctus, metus.
								</li>
								<li>
									Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula
									vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales
									sit amet, nisi.
								</li>
								<li>
									Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut,
									elementum vulputate, nunc.
									<ul>
										<li>
											Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in,
											pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
										</li>
										<li>
											Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu
											vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt
											quis, accumsan porttitor, facilisis luctus, metus.
										</li>
										<li>
											Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
											ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a,
											sodales sit amet, nisi.
										</li>
										<li>
											Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices
											ut, elementum vulputate, nunc.
										</li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</li>
			</ul>
			<ol>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				<li>Vestibulum auctor dapibus neque.</li>
			</ol>
			<ol>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				<li>
					Vestibulum auctor dapibus neque.
					<ol>
						<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
						<li>
							Vestibulum auctor dapibus neque.
							<ol>
								<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>

								<li>
									Vestibulum auctor dapibus neque.
									<ol>
										<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
										<li>Aliquam tincidunt mauris eu risus.</li>
										<li>Vestibulum auctor dapibus neque.</li>
									</ol>
								</li>
							</ol>
						</li>
					</ol>
				</li>
			</ol>
			<table class="table is-bordered is-striped is-hoverable">
				<thead>
					<tr>
						<th>Fabio vel</th>
						<th>vincam</th>
						<th>culpa qui</th>
						<th>officia</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Etiam habebis sem dicantur</td>
						<td>magna mollis euismod</td>
						<td>Cum ceteris in veneratione</td>
						<td>tui montes nascetur mus</td>
					</tr>
					<tr>
						<td>Nope dolor site amet</td>
						<td>magna mollis euismod</td>
						<td>Cum ceteris in veneratione</td>
						<td>tui montes nascetur mus</td>
					</tr>
					<tr>
						<td>Ambitioni dedisse scripsisse iudicaretur</td>
						<td>Ambitioni que sap totum</td>
						<td> Ambitioni dedisse scripsisse iudicaretur. sancimus haerentia. </td>
						<td>Legem sancimus haerentia.</td>
					</tr>
				</tbody>
				<tbody />
			</table>
			<p>Second tableau avec des cellules mergées sur 2 lignes</p>
			<table class="table is-bordered is-striped is-hoverable">
				<thead>
					<tr>
						<th>Fabio vel</th>
						<th>vincam</th>
						<th>culpa qui</th>
						<th>officia</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Etiam habebis sem dicantur</td>
						<td>magna mollis euismod</td>
						<td>Cum ceteris in veneratione</td>
						<td>tui montes nascetur mus</td>
					</tr>
					<tr>
						<td rowspan="2">Lorem ipsum</td>
						<td>magna mollis euismod</td>
						<td>Cum ceteris in veneratione</td>
						<td>tui montes nascetur mus</td>
					</tr>
					<tr>
						<td>Ambitioni dedisse scripsisse iudicaretur</td>
						<td> Ambitioni dedisse scripsisse iudicaretur. sancimus haerentia. </td>
						<td>Legem sancimus haerentia.</td>
					</tr>
				</tbody>
				<tbody />
			</table>
			<p>Salutantibus vitae elit libero, a pharetra augue.</p>
			<blockquote cite="https://www.huxley.net/bnw/four.html">
				<p>
					Inmensae subtilitatis, obscuris et malesuada fames. Gallia est omnis divisa in partes
					tres, quarum.
				</p>
				<footer>
					—Hugues Cezon,
					<cite>Brave New World</cite>
				</footer>
			</blockquote>
			<p>
				A communi observantia non est recedendum. Gallia est omnis divisa in partes tres, quarum.
				Quam diu etiam furor iste tuus nos eludet? Integer legentibus erat a ante historiarum
				dapibus. Fabio vel iudice vincam, sunt in culpa qui officia. in partes tres, quarum.
			</p>
			<p>
				A communi observantia non est recedendum. Gallia est omnis divisa in partes tres, quarum.
				Quam diu etiam furor iste tuus nos eludet? Integer legentibus erat a ante historiarum
				dapibus. Fabio vel iudice vincam, sunt in culpa qui officia. in partes tres, quarum.
			</p>
			<ol>
				<li>Test list 1</li>
				<li>Test list 2</li>
			</ol>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<p>
				Quisque ut dolor gravida, placerat libero vel, euismod. Nihil hic munitissimus habendi
				senatus locus, nihil horum?
			</p>

			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<figure>
				<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
				<figcaption>Service retouches du mangasin de Wittenheim</figcaption>
			</figure>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<p>
				Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
				egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec
				eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat
				eleifend leo.
			</p>
			<figure>
				<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
				<figcaption>Service retouches du mangasin de Wittenheim</figcaption>
			</figure>
			<p>
				Excepteur sint obcaecat cupiditat non proident culpa. Vivamus sagittis lacus vel augue
				laoreet rutrum faucibus. Ullamco laboris nisi ut aliquid ex ea commodi consequat. Integer
				legentibus erat a ante historiarum dapibus. Plura mihi bona sunt, inclinet, amari petere
				vellent.
			</p>

			<figure>
				<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
				<figcaption>Service retouches du mangasin de Wittenheim</figcaption>
			</figure>
			<h2 class="title is-2">Title h2 : Quam diu etiam furor iste tuus nos eludet</h2>
			<p>
				Prima luce, cum quibus mons aliud consensu ab eo. Quo usque tandem abutere, Catilina,
				patientia nostra?
			</p>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<h2 class="title is-2">Title h2 : Quam diu etiam furor iste tuus nos eludet</h2>
			<p>
				Prima luce, cum quibus mons aliud consensu ab eo. Quo usque tandem abutere, Catilina,
				patientia nostra?
			</p>
			<figure>
				<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
				<figcaption>Service retouches du mangasin de Wittenheim</figcaption>
			</figure>
			<ol>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				<li>Aliquam tincidunt mauris eu risus.</li>
				<li>Vestibulum auctor dapibus neque.</li>
			</ol>

			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<ol>
				<li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
				<li>Aliquam tincidunt mauris eu risus.</li>
				<li>Vestibulum auctor dapibus neque.</li>
			</ol>
			<h1 class="u-color-green">contenu standard avec des balises comprenant des classes</h1>
			<h2 class="u-color-primary">Lorem risus neque mauris eu amet</h2>
			<p>
				Websites in professional use templating systems. Commercial publishing platforms and content
				management systems ensure that you can show different text, different data using the same
				template. When it's about controlling hundreds of articles, product pages for web shops, or
				user profiles in social networks, all of them potentially with different sizes, formats,
				rules for differing elements things can break, designs agreed upon can have unintended
				consequences and look much different than expected.
			</p>

			<p>
				This is quite a problem to solve, but just doing without greeking text won't fix it. Using
				test items of real content and data in designs will help, but there's no guarantee that
				every oddity will be found and corrected. Do you want to be sure? Then a prototype or beta
				site with real content published from the real CMS is needed—but you’re not going that far
				until you go through an initial design cycle.
			</p>
			<h2 class="title is-2">Lorem risus neque mauris eu amet</h2>
			<p>
				Lorem Ipsum actually is usefull in the design stage as it focuses our attention on places
				where the content is a dynamic block coming from the CMS (unlike static content elements
				that will always stay the same.) Blocks of Lorem Ipsum with a character count range provide
				a obvious reminder to check and re-check that the design and the content model match up.
			</p>

			<p>Kyle Fiedler from the Design Informer feels that distracting copy is your fault:</p>

			<p>
				If the copy becomes distracting in the design then you are doing something wrong or they are
				discussing copy changes. It might be a bit annoying but you could tell them that that
				discussion would be best suited for another time. At worst the discussion is at least
				working towards the final goal of your site where questions about lorem ipsum don’t.
			</p>
			<h2 class="title is-2">Lorem risus neque mauris eu amet</h2>
			<h3 class="u-font-700">Ab illo tempore, ab.</h3>
			<p>
				Summing up, if the copy is diverting attention from the design it’s because it’s not up to
				task.
			</p>
			<h3 class="u-font-700">est sed immemorabili</h3>
			<p>
				Typographers of yore didn't come up with the concept of dummy copy because people thought
				that content is inconsequential window dressing, only there to be used by designers who
				can’t be bothered to read. Lorem Ipsum is needed because words matter, a lot. Just fill up a
				page with draft copy about the client’s business and they will actually read it and comment
				on it. They will be drawn to it, fiercely. Do it the wrong way and draft copy can derail
				your design review.
			</p>
			<h3 class="u-font-700">Fictum, deserunt mollit anim laborum astutumque!</h3>
			<p>
				Asking the client to pay no attention Lorem Ipsum isn't hard as it doesn’t make sense in the
				first place, that will limit any initial interest soon enough. Try telling a client to
				ignore draft copy however, and you're up to something you can't win. Whenever draft copy
				comes up in a meeting confused questions about it ensue.
			</p>

			<h2 class="title is-2">Summing up, really:</h2>
			<p class="u-text-uppercase">Ab illo tempore</p>
			<p>ab est sed immemorabili. Donec sed odio operae, eu vulputate felis rhoncus.</p>
			<p>
				Lorem Ipsum is a tool that can be useful, used intentionally it may help solve some
				problems. If you go about content strategy the wrong way, fix that problem.
			</p>
			<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
			<figure>
				<img src="https://cms.cora.fr/fileadmin/national/les-magasins-cora/service-retouches.jpg" />
				<figcaption>Service retouches du mangasin de Wittenheim</figcaption>
			</figure>
			<h3 class="u-color-orange">placerat libero vel</h3>
			<p>
				Cras mattis iudicium purus sit amet fermentum. Quisque ut dolor gravida, placerat libero
				vel, euismod. Ab illo tempore, ab est sed immemorabili. Phasellus laoreet lorem vel dolor
				tempus vehicula.
			</p>
			<p>
				Paullum deliquit, ponderibus modulisque suis ratio utitur. A communi observantia non est
				recedendum. Tityre, tu patulae recubans sub tegmine fagi dolor.
			</p>
			<p>
				Ut enim ad minim veniam, quis nostrud exercitation. Fabio vel iudice vincam, sunt in culpa
				qui officia. Ambitioni dedisse scripsisse iudicaretur. Vivamus sagittis lacus vel augue
				laoreet rutrum faucibus. Curabitur est gravida et libero vitae dictum.
			</p>
			<p>
				Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Hi omnes lingua, institutis,
				legibus inter se differunt. Lorem ipsum dolor sit amet, consectetur adipisici elit, sed
				eiusmod tempor incidunt ut labore et dolore magna aliqua. Quo usque tandem abutere,
				Catilina, patientia nostra?
			</p>
			<p>
				Quisque placerat facilisis egestas cillum dolore. Cum ceteris in veneratione tui montes,
				nascetur mus. Qui ipsorum lingua Celtae, nostra Galli appellantur. Praeterea iter est
				quasdam res quas ex communi.
			</p>
			<button class="button is-small is-fullwidth">Small</button>
			<button class="button is-fullwidth">Normal</button>
			<button class="button is-medium is-fullwidth">Medium</button>
			<button class="button is-large is-fullwidth">Large</button>
			<button class="button is-outlined">Outlined</button>
			<button class="button is-primary is-outlined">Outlined</button>
			<button class="button is-link is-outlined">Outlined</button>
			<button class="button is-info is-outlined">Outlined</button>
			<button class="button is-success is-outlined">Outlined</button>
			<button class="button is-danger is-outlined">Outlined</button>
			<button class="button is-rounded">Rounded</button>
			<button class="button is-primary is-rounded">Rounded</button>
			<button class="button is-link is-rounded">Rounded</button>
			<button class="button is-info is-rounded">Rounded</button>
			<button class="button is-success is-rounded">Rounded</button>
			<button class="button is-danger is-rounded">Rounded</button>
			<button class="button">Normal</button>
			<button class="button is-primary">Normal</button>
			<button class="button is-link">Normal</button>
			<button class="button is-info">Normal</button>
			<button class="button is-success">Normal</button>
			<button class="button is-warning">Normal</button>
			<button class="button is-danger">Normal</button>
			<button class="button" title="Disabled button" disabled>Disabled</button>
			<button class="button is-primary" title="Disabled button" disabled>Disabled</button>
			<button class="button is-link" title="Disabled button" disabled>Disabled</button>
			<button class="button is-info" title="Disabled button" disabled>Disabled</button>
			<button class="button is-success" title="Disabled button" disabled>Disabled</button>
			<button class="button is-warning" title="Disabled button" disabled>Disabled</button>
			<button class="button is-danger" title="Disabled button" disabled>Disabled</button>
			<p class="buttons">
				<button class="button">
					<span class="icon is-small">
						<i class="ci-bar_chart_alt" />
					</span>
				</button>
				<button class="button">
					<span class="icon is-small">
						<i class="ci-app_store" />
					</span>
				</button>
				<button class="button">
					<span class="icon is-small">
						<i class="ci-unsplash" />
					</span>
				</button>
			</p>
			<p class="buttons">
				<button class="button">
					<span class="icon">
						<i class="ci-caret_down" />
					</span>
					<span>GitHub</span>
				</button>
				<button class="button is-primary">
					<span class="icon">
						<i class="fab fa-twitter" />
					</span>
					<span>@jgthms</span>
				</button>
				<button class="button is-success">
					<span class="icon is-small">
						<i class="fas fa-check" />
					</span>
					<span>Save</span>
				</button>
				<button class="button is-danger is-outlined">
					<span>Delete</span>
					<span class="icon is-small">
						<i class="fas fa-times" />
					</span>
				</button>
			</p>
			<p class="buttons">
				<button class="button is-small">
					<span class="icon is-small">
						<i class="ci-app_store" />
					</span>
					<span>GitHub</span>
				</button>
				<button class="button">
					<span class="icon">
						<i class="icon-chevron-down" />
					</span>
					<span>GitHub</span>
				</button>
				<button class="button is-medium">
					<span class="icon">
						<i class="ci-bar_chart_alt" />
					</span>
					<span>GitHub</span>
				</button>
				<button class="button is-large">
					<span class="icon is-medium">
						<i class="ci-unsplash" />
					</span>
					<span>GitHub</span>
				</button>
			</p>
			<p class="buttons">
				<button class="button is-small">
					<span class="icon is-small">
						<i class="ci-bar_chart_alt" />
					</span>
				</button>
			</p>
			<p class="buttons">
				<button class="button">
					<span class="icon is-small">
						<i class="ci-bar_chart_alt" />
					</span>
				</button>
				<button class="button">
					<span class="icon">
						<i class="ci-bar_chart_alt fa-lg" />
					</span>
				</button>
			</p>
			<p class="buttons">
				<button class="button is-medium">
					<span class="icon is-small">
						<i class="ci-bar_chart_alt" />
					</span>
				</button>
				<button class="button is-medium">
					<span class="icon">
						<i class="ci-bar_chart_alt fa-lg" />
					</span>
				</button>
				<button class="button is-medium">
					<span class="icon is-medium">
						<i class="ci-bar_chart_alt fa-2x" />
					</span>
				</button>
			</p>
			<p class="buttons">
				<button class="button is-large">
					<span class="icon is-small">
						<i class="ci-bar_chart_alt" />
					</span>
				</button>
				<button class="button is-large">
					<span class="icon">
						<i class="ci-bar_chart_alt fa-lg" />
					</span>
				</button>
				<button class="button is-large">
					<span class="icon is-medium">
						<i class="ci-bar_chart_alt fa-2x" />
					</span>
				</button>
			</p>
			<div class="field is-grouped">
				<p class="control">
					<button class="button is-link"> Save changes </button>
				</p>
				<p class="control">
					<button class="button"> Cancel </button>
				</p>
				<p class="control">
					<button class="button is-danger"> Delete post </button>
				</p>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import './bulma/sass/utilities/all';
	.hero-figure-wrapper {
		position: absolute;
		bottom: 0;
		left: 50%;
		height: 90%;
		width: auto;

		@include touch {
			opacity: 0.5;
		}
	}
</style>
