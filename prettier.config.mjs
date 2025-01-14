/** @type {import("prettier").Config} */
const config = {
  printWidth: 120,
  singleQuote: true,
  arrowParens: 'always',
  proseWrap: 'always',
  trailingComma: 'all',
  importOrder: ['<THIRD_PARTY_MODULES>', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderGroupNamespaceSpecifiers: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};

export default config;
