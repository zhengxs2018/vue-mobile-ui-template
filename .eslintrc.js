module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'import'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
  rules: {
    'vue/component-name-in-template-casing': [
      'error',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
        shouldMatchCase: false,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.vue'],
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: false,
            optionalDependencies: false,
          },
        ],
      },
    },
    // {
    //   files: ['*.vue'],
    //   rules: {
    //     // disable for setup script
    //     '@typescript-eslint/no-unused-vars': 'off',
    //   },
    // },
    {
      files: ['**/demo/*.vue'],
      rules: {
        'vue/match-component-file-name': 'off',
      },
    },
    {
      files: ['**/test/**/*.{js,ts,tsx,vue}'],
      env: {
        jest: true,
      },
      plugins: ['jest-dom'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'vue/one-component-per-file': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: [
        'docs/**',
        'mobile/**/*',
        'vite.config.ts',
        'vite.config.site.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
}
