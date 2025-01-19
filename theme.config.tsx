import { useRouter } from 'next/router';
import Image from 'next/image';
import { useConfig, type DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  head() {
    const { asPath } = useRouter();
    const { title } = useConfig();

    return (
      <>
        <title>{asPath === '/' ? 'AC Scripts' : `${title} - AC Scripts`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script defer src="https://analytics.dejv.dev/script.js" data-website-id="388963db-aa71-419c-866d-71c6c5fa6d97"></script>

        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96" />
      </>
    );
  },

  logo: (
    <>
      <Image src="/logo.svg" alt="logo" width={24} height={24} />
      <span style={{ marginLeft: '.4em', fontWeight: 600 }}>AC Scripts</span>
    </>
  ),

  project: { link: 'https://github.com/acscripts' },
  chat: { link: 'https://discord.acscripts.dev' },

  docsRepositoryBase: 'https://github.com/acscripts/docs/tree/main',
  feedback: { content: null },
  footer: {
    content: (
      <div className="flex items-center gap-2">
        <span>© {new Date().getFullYear()}</span>
        <Image src="/logo.svg" alt="logo" width={24} height={24} />
        <span>AC Scripts</span>
      </div>
    ),
  },

  darkMode: false,
  nextThemes: { defaultTheme: 'dark', forcedTheme: 'dark' },
};

export default config;
