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
                    },
                    social: [
                        { icon: 'github', href: 'https://github.com/multitheftauto/', label: 'GitHub' },
                        { icon: 'discord', href: 'https://discord.com/invite/mtasa', label: 'Discord' },
                        { icon: 'youtube', href: 'https://youtube.com/user/mtaqa', label: 'YouTube' },
                        { icon: 'twitch', href: 'https://twitch.tv/mtaqa', label: 'Twitch' },
                        { icon: 'x.com', href: 'https://x.com/mtaqa', label: 'X.com' },
                        ...(config.social || []),
                    ]
                })
            }
        },
    };
}
