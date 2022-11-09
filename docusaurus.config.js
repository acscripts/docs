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
          editUrl: 'https://github.com/antond15/docs/tree/main',
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
            href: 'https://www.github.com/antond15',
            label: 'GitHub',
            position: 'left',
          },
          {
            href: 'https://discord.gg/2ZezMw2xvR',
            label: 'Discord',
            position: 'left',
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
