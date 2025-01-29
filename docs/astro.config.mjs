// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mtasaStartlightThemePlugin from 'starlight-theme-mtasa'

// https://astro.build/config
export default defineConfig({
    site: 'https://multitheftauto.github.io',
    base: 'starlight-theme-mtasa',
    integrations: [
        starlight({
            title: 'Multi Theft Auto: Theme',
            plugins: [mtasaStartlightThemePlugin()],
            social: {
                github: 'https://github.com/withastro/starlight',
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});
