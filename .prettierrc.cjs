module.exports = {
    trailingComma: 'es5',
    tabWidth: 2,
    semi: true,
    printWidth: 120,
    singleQuote: true,
    bracketSpacing: true,
    endOfLine: 'lf',
    importOrder: [
      '<THIRD_PARTY_MODULES>',
      '^@/components/(.*)$',
      '^@/page/(.*)$',
      '^@/screen/(.*)$',
      '^@/ui/(.*)$',
      '^@/assets/(.*)$',
      '^../(.*)',
      '^./(.*)',
      '(.scss)$',
      '(.css)$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
  };
  