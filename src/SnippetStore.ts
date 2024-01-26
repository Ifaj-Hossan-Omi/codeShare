import { writable } from "svelte/store";


export const snippetStore = writable<CodeSnippet[]>([]);

export function addSnippet(input: CodeSnippetInput) {
    // const { title, language, code } = input;
    snippetStore.update((snippets) => {
        // snippets.push({ title, language, code, favorite: false });
        snippets.push({ ...input, favorite: false });
        return snippets;
    });
}

export function deleteSnippet(index: number) {
    snippetStore.update((snippets) => {
        snippets.splice(index, 1);
        return snippets;
    });
}

export function toggleFavorite(index: number) {
    snippetStore.update((snippets) => {
        snippets[index].favorite = !snippets[index].favorite;
        return snippets;
    });
}