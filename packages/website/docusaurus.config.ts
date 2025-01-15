import type { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const config: Config = {
  title: 'React Sigma',
  tagline: 'A list of react components to display graph with sigma.js',
  url: 'https://sim51.github.io',
  baseUrl: '/react-sigma/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'sim51',
  projectName: 'react-sigma',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/sim51/react-sigma/tree/main/packages/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  themeConfig: {
    matomo: {
      matomoUrl: 'https://matomo.ouestware.com/',
      siteId: '31',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    },
    navbar: {
      title: 'React Sigma',
      logo: {
        alt: 'React Sigma Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Getting Started',
          to: 'docs/start-introduction',
        },
        {
          label: 'Example',
          to: 'docs/example/load-graph',
        },
        {
          label: 'Api',
          to: 'docs/api/core',
        },
        {
          type: 'doc',
          docId: 'changelog',
          label: 'Changelog',
          position: 'right',
        },
        {
          href: 'https://sim51.github.io/react-sigma/storybook',
          label: 'Storybook',
          position: 'right',
        },
        {
          href: 'https://github.com/sim51/react-sigma',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.npmjs.com/org/react-sigma',
          label: 'NPM',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/start-introduction',
            },
            {
              label: 'API',
              to: 'docs/api',
            },
            {
              label: 'Example',
              to: 'docs/example/load-graph',
            },
            {
              label: 'Storybook',
              href: 'https://sim51.github.io/react-sigma/storybook',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/sigma.js',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sigmajs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Changelog',
              to: 'docs/changelog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/sim51/react-sigma',
            },
            {
              label: 'Sigma.js',
              href: 'https://www.sigmajs.org/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OuestWare, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'core',
        entryPoints: ['../core/src/index.ts'],
        tsconfig: '../core/tsconfig.json',
        watch: false,
        out: 'docs/api/core',
        readme: 'none',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'graph-search',
        entryPoints: ['../graph-search/src/index.ts'],
        tsconfig: '../graph-search/tsconfig.json',
        watch: false,
        out: 'docs/api/graph-search',
        readme: 'none',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'minimap',
        entryPoints: ['../minimap/src/index.ts'],
        tsconfig: '../minimap/tsconfig.json',
        watch: false,
        out: 'docs/api/minimap',
        readme: 'none',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'layout-core',
        entryPoints: ['../layout-core/src/index.ts'],
        tsconfig: '../layout-core/tsconfig.json',
        watch: false,
        out: 'docs/api/layout-core',
        readme: 'none',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'layout-random',
        entryPoints: ['../layout-random/src/index.ts'],
        tsconfig: '../layout-random/tsconfig.json',
        watch: false,
        out: 'docs/api/layout-random',
        readme: 'none',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'layout-circular',
        entryPoints: ['../layout-circular/src/index.ts'],
        tsconfig: '../layout-circular/tsconfig.json',
        watch: false,
        out: 'docs/api/layout-circular',
        readme: 'none',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'layout-circlepack',
        entryPoints: ['../layout-circlepack/src/index.ts'],
        tsconfig: '../layout-circlepack/tsconfig.json',
        watch: false,
        out: 'docs/api/layout-circlepack',
        readme: 'none',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'layout-forceatlas2',
        entryPoints: ['../layout-forceatlas2/src/index.ts'],
        tsconfig: '../layout-forceatlas2/tsconfig.json',
        watch: false,
        out: 'docs/api/layout-forceatlas2',
        readme: 'none',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'layout-force',
        entryPoints: ['../layout-force/src/index.ts'],
        tsconfig: '../layout-force/tsconfig.json',
        watch: false,
        out: 'docs/api/layout-force',
        readme: 'none',
      },
    ],
    [
      'docusaurus-plugin-typedoc',
      {
        id: 'layout-noverlap',
        entryPoints: ['../layout-noverlap/src/index.ts'],
        tsconfig: '../layout-noverlap/tsconfig.json',
        watch: false,
        out: 'docs/api/layout-noverlap',
        readme: 'none',
      },
    ],
    function (_context, _options) {
      return {
        name: 'esm-docusaurus-plugin',
        configureWebpack(_config, _isServer, _utils) {
          return {
            module: {
              rules: [
                {
                  test: /\.m?js$/,
                  resolve: {
                    fullySpecified: false,
                  },
                },
              ],
            },
          };
        },
      };
    },
  ],
};

export default config;
