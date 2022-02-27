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
            label: "API",
            to: "docs/api",
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
                label: "API",
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

      // Plugin / TypeDoc options
      {
        entryPoints: ["./../.."],
        entryPointStrategy: "packages",
        tsconfig: "./../core/tsconfig.json",
        readme: "none",
        // Plugin options
        out: "api",
      },
    ],
  ],
};

module.exports = config;
