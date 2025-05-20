// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mtasaStarlightThemePlugin from '@multitheftauto/starlight-theme-mtasa'

const isDeploy = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = (isDeploy && process.env.GITHUB_REPOSITORY) ? (process.env.GITHUB_REPOSITORY).split('/')[1] : undefined;
const siteBaseUrl = (isDeploy && process.env.GITHUB_REPOSITORY_OWNER) ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io` : undefined;

export default defineConfig({
    site: siteBaseUrl,
    base: repositoryName,
    integrations: [
        starlight({
            title: 'Multi Theft Auto: Theme',
            plugins: [mtasaStarlightThemePlugin()],
            social: {
                github: 'https://github.com/multitheftauto/starlight-theme-mtasa',
            },
            social: [
                { icon: 'github', label: 'GitHub', href: 'https://github.com/multitheftauto/starlight-theme-mtasa' },
            ],
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
