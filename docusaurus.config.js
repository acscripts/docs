// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AC Scripts',
  tagline: 'Documentation for AC Scripts resources',
  url: 'https://docs.dejv.it',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/favicon.svg',
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./src/sidebars.js'),
          editUrl: 'https://github.com/acscripts/docs/tree/main',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
      },
      navbar: {
        title: 'AC Scripts',
        logo: {
          alt: 'AC Scripts logo',
          src: 'assets/logo.svg',
          srcDark: 'assets/logo-dark.svg',
        },
        items: [
          {
            href: 'https://github.com/acscripts',
            position: 'right',
            className: 'header-icon icon-github',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://discord.gg/2ZezMw2xvR',
            position: 'right',
            className: 'header-icon icon-discord',
            'aria-label': 'Discord server',
          },
          {
            href: 'https://ko-fi.com/antond',
            position: 'right',
            className: 'header-icon icon-kofi',
            'aria-label': 'Ko-Fi link',
          },
          {
            href: 'https://ac-scripts.tebex.io',
            position: 'right',
            className: 'header-icon icon-tebex',
            'aria-label': 'Tebex store',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },
    }),
};

module.exports = config;
