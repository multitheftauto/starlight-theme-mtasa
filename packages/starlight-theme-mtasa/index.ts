import type { StarlightPlugin, StarlightUserConfig } from '@astrojs/starlight/types';

const packageName = '@multitheftauto/starlight-theme-mtasa';

type SocialLinksSchema = NonNullable<StarlightUserConfig['social']>;

function mergeWithSocialDefaults(social: SocialLinksSchema, defaults: SocialLinksSchema): SocialLinksSchema {
    const filtered = defaults.filter(d => !social.some(s => s.label === d.label));
    return [...social, ...filtered];
}

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
                    social: mergeWithSocialDefaults(config.social ?? [], [
                        { icon: 'github',   label: 'GitHub',       href: 'https://github.com/multitheftauto/' },
                        { icon: 'discord',  label: 'Discord',      href: 'https://discord.com/invite/mtasa' },
                        { icon: 'youtube',  label: 'YouTube',      href: 'https://youtube.com/user/mtaqa' },
                        { icon: 'twitch',   label: 'Twitch',       href: 'https://twitch.tv/mtaqa' },
                        { icon: 'x.com',    label: 'X (Twitter)',  href: 'https://x.com/mtaqa' },
                    ]),
                })
            }
        },
    };
}
