/**
 * @Author: vickiWu
 * @Date: 2022-03-23 17:31:50
 * @LastEditTime: 2022-03-23 17:52:52
 * @LastEditors: vickiWu
 * @Description: eslint 配置
 * @FilePath: \wwy-map\.eslintrc.js
 */
module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', 'prettier'],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
}
