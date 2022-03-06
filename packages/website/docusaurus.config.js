// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "React Sigma",
  tagline: "A list of react components to display graph with sigma.js",
  url: "https://sim51.github.io",
  baseUrl: "/react-sigma-v2/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "sim51", // Usually your GitHub org/user name.
  projectName: "react-sigma-v2", // Usually your repo name.
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/sim51/react-sigma-v1/main/packages/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "React Sigma",
        logo: {
          alt: "React Sigma Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            label: "Getting Started",
            to: "docs/start-introduction",
          },
          {
            label: "Example",
            to: "docs/example",
          },
          {
            label: "Docs",
            to: "docs/api/core",
          },
          {
            type: "doc",
            docId: "changelog",
            position: "left",
            label: "Changelog",
            position: "right",
          },
          {
            href: "https://github.com/sim51/react-sigma-v2",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "docs/start-introduction",
              },
              {
                label: "Example",
                to: "docs/example",
              },
              {
                label: "Docs",
                to: "docs/api",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/sigma.js",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/sigmajs",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Changelog",
                to: "docs/changelog",
              },
              {
                label: "GitHub",
                href: "https://github.com/sim51/react-sigma-v2",
              },
              {
                label: "Sigma.js",
                href: "https://www.sigmajs.org/",
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
    }),
  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        id: "core",
        entryPoints: ["../core/src/index.ts"],
        tsconfig: "../core/tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
        out: "api/core",
        readme: "none",
        sidebar: {
          categoryLabel: "core",
          indexLabel: "core",
          position: 0,
          fullNames: true,
        },
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "layout-core",
        entryPoints: ["../layout-core/src/index.ts"],
        tsconfig: "../layout-core/tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
        out: "api/layout-core",
        readme: "none",
        sidebar: {
          categoryLabel: "layout-core",
          indexLabel: "layout-core",
          position: 1,
          fullNames: true,
        },
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "layout-random",
        entryPoints: ["../layout-random/src/index.ts"],
        tsconfig: "../layout-random/tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
        out: "api/layout-random",
        readme: "none",
        sidebar: {
          categoryLabel: "layout-random",
          indexLabel: "layout-random",
          position: 2,
          fullNames: true,
        },
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "layout-circular",
        entryPoints: ["../layout-circular/src/index.ts"],
        tsconfig: "../layout-circular/tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
        out: "api/layout-circular",
        readme: "none",
        sidebar: {
          categoryLabel: "layout-circular",
          indexLabel: "layout-circular",
          position: 3,
          fullNames: true,
        },
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "layout-circlepack",
        entryPoints: ["../layout-circlepack/src/index.ts"],
        tsconfig: "../layout-circlepack/tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
        out: "api/layout-circlepack",
        readme: "none",
        sidebar: {
          categoryLabel: "layout-circlepack",
          indexLabel: "layout-circlepack",
          position: 4,
          fullNames: true,
        },
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "layout-forceatlas2",
        entryPoints: ["../layout-forceatlas2/src/index.ts"],
        tsconfig: "../layout-forceatlas2/tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
        out: "api/layout-forceatlas2",
        readme: "none",
        sidebar: {
          categoryLabel: "layout-forceatlas2",
          indexLabel: "layout-forceatlas2",
          position: 5,
          fullNames: true,
        },
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "layout-force",
        entryPoints: ["../layout-force/src/index.ts"],
        tsconfig: "../layout-force/tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
        out: "api/layout-force",
        readme: "none",
        sidebar: {
          categoryLabel: "layout-force",
          indexLabel: "layout-force",
          position: 6,
          fullNames: true,
        },
      },
    ],
    [
      "docusaurus-plugin-typedoc",
      {
        id: "layout-noverlap",
        entryPoints: ["../layout-noverlap/src/index.ts"],
        tsconfig: "../layout-noverlap/tsconfig.json",
        watch: process.env.TYPEDOC_WATCH,
        out: "api/layout-noverlap",
        readme: "none",
        sidebar: {
          categoryLabel: "layout-noverlap",
          indexLabel: "layout-noverlap",
          position: 7,
          fullNames: true,
        },
      },
    ],
    function (context, options) {
      return {
        name: "esm-docusaurus-plugin",
        configureWebpack(config, isServer, utils) {
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

module.exports = config;
