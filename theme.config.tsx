import { useRouter } from 'next/router';
import Image from 'next/image';
import type { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  useNextSeoProps() {
    const { asPath } = useRouter();
    return {
      titleTemplate: asPath === '/' ? 'AC Scripts' : '%s - AC Scripts',
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      <script defer src="https://analytics.dejv.it/script.js" data-website-id="388963db-aa71-419c-866d-71c6c5fa6d97"></script>
    </>
  ),

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
    text: (
      <div className="ac-footer">
        <span>© {new Date().getFullYear()}</span>
        <Image src="/logo.svg" alt="logo" width={24} height={24} />
        <span>AC Scripts</span>
      </div>
    ),
  },

  darkMode: true,
  nextThemes: { defaultTheme: 'dark' },
};

export default config;
