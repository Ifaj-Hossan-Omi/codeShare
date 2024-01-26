import type { PageLoad } from "./$types";

export const load = (() => {
    return {
        snippets: [
            {
                title: 'My first snippet',
                language: 'html',
                code: '<h3>Hello World</h3>',
                favorite: false
            },
            {
                title: 'My second snippet',
                language: 'css',
                code: 'h3 { color: red; }',
                favorite: false
            }
        ]
    }
}) satisfies PageLoad;

