// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mtasaStartlightThemePlugin from 'starlight-theme-mtasa'

const isDeploy = process.env.GITHUB_ACTIONS === 'true';
const ownerName = isDeploy ? process.env.GITHUB_REPOSITORY_NAME : undefined;
const siteName = isDeploy ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io` : undefined;

// https://astro.build/config
export default defineConfig({
    site: siteName,
    base: ownerName,
    integrations: [
        starlight({
            title: 'Multi Theft Auto: Theme',
            plugins: [mtasaStartlightThemePlugin()],
            social: {
                github: 'https://github.com/multitheftauto/starlight-theme-mtasa',
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
