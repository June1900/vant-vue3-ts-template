module.exports = {
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 2021,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', '@typescript-eslint', 'todo-ddl'],
  rules: {
    'max-len': ['warn', { code: 1000 }],
    'no-shadow': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-useless-escape': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/custom-event-name-casing': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'import/extensions': 'off',
    quotes: ['error', 'single'],
    semi: ['warn', 'never'],
    'import/no-unresolved': 'off',
    'todo-ddl/diy': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': 'off',
    'no-bitwise': 'off',
    camelcase: 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'no-undef': 'off',
    'no-promise-executor-return': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_'
      }
    ],
    'space-before-function-paren': 'off',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/one-component-per-file': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attribute-hyphenation': 'off',
    'vue/require-default-prop': 'off',
    'vue/require-explicit-emits': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always'
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/multi-word-component-names': 'off'
  }
}
