module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react',
            'react-hooks'
          ],
  rules: {
    "prettier/prettier": [
        "error",
        {
          "printWidth": 80,
          "tabWidth": 2,
          "singleQuote": true,
          "traillingComma": "none",
          "arrowParens": "always",
          "semi": false,
          "endOfLine": "auto"
        }
    ] 
  
  }
}