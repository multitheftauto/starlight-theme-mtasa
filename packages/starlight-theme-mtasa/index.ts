import type { StarlightPlugin } from '@astrojs/starlight/types';

const packageName = '@multitheftauto/starlight-theme-mtasa';

export default function mtasaStarlightThemePlugin(): StarlightPlugin {
    return {
        name: 'starlight-theme-mtasa',
        hooks: {
            setup({ config, updateConfig }) {
                updateConfig({
                    customCss: [
                        `${packageName}/theme.css`,
                        `${packageName}/font-face.css`,
                        ...config.customCss ?? [],
                    ],
                    components: {
                        ThemeSelect: `${packageName}/ThemeSelect.astro`,
                        Header: `${packageName}/Header.astro`,
                        ...config.components ?? {},
                    }
                })
            }
        },
    };
}
