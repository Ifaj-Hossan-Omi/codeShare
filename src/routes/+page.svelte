<script lang="ts">
	import { snippetStore, addSnippet } from '../SnippetStore';
	import CodeSnippetCard from './../CodeSnippetCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let formdata: CodeSnippetInput = {
		title: '',
		language: 'html',
		code: ''
	};

	snippetStore.set(data.snippets);
</script>

<div class="flex justify-center">
	<div class="grid grid-cols-1 gap-4 min-w-full md:min-w-[750px]">
		<h3 class="text-center py-6">Create a Code Snippest</h3>
		<div class="card p-4 w-full text-token space-y-4">
			<label class="label">
				<span>Snippet Title</span>
				<input
					class="input"
					type="text"
					placeholder="Enter title here..."
					bind:value={formdata.title}
				/>
			</label>
			<label class="label">
				<span>Programmin Language</span>
				<select class="select" bind:value={formdata.language}>
					<option value="html">HTML</option>
					<option value="css">CSS</option>
					<option value="typescript">TypeScript</option>
				</select>
			</label>
			<label class="label">
				<span>Code Snippet</span>
				<textarea
					class="textarea"
					rows="4"
					placeholder="Enter your snippet code here"
					bind:value={formdata.code}
				/>
			</label>
			<button
				type="button"
				class="btn btn-sm variant-filled-primary"
				on:click={() => addSnippet(formdata)}
			>
				Creat Snippet</button
			>
		</div>
		<div class="text-center py-6">
			<h2>My Code Snippets</h2>
		</div>
		{#each $snippetStore as snippet, index}
			<!-- <CodeSnippetCard
				title={snippet.title}
				language={snippet.language}
				code={snippet.code}
				favorite={snippet.favorite}
			/> -->
			<CodeSnippetCard {snippet} {index} />
		{/each}
	</div>
</div>
