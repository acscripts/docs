// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      label: 'Home',
      id: 'index',
    },
    {
      type: 'link',
      label: 'Radio',
      href: '/ac_radio',
    },
    {
      type: 'link',
      label: 'Gifts',
      href: '/ac_gifts',
    },
    {
      type: 'link',
      label: 'Documents 💰',
      href: '/ac_documents',
    },
  ],
  ac_radio: [
    {
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      type: 'autogenerated',
      dirName: 'ac_radio',
    },
  ],
  ac_gifts: [
    {
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      type: 'autogenerated',
      dirName: 'ac_gifts',
    },
  ],
  ac_documents: [
    {
      type: 'link',
      label: 'Home',
      href: '/',
    },
    {
      type: 'autogenerated',
      dirName: 'ac_documents',
    },
  ],
};

module.exports = sidebars;
