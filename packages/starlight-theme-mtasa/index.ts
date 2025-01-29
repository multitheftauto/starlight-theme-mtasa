import type { StarlightPlugin } from '@astrojs/starlight/types';

export default function mtasaStarlightThemePlugin(): StarlightPlugin {
    return {
        name: 'starlight-theme-mtasa',
        hooks: {
            setup({ config, updateConfig }) {
                updateConfig({
                    customCss: [
                        'starlight-theme-mtasa/theme.css',
                        'starlight-theme-mtasa/font-face.css',
                        ...config.customCss ?? [],
                    ],
                    components: {
                        ThemeSelect: 'starlight-theme-mtasa/ThemeSelect.astro',
                        Header: 'starlight-theme-mtasa/Header.astro',
                        ...config.components ?? {},
                    }
                })
            }
        },
    };
}
