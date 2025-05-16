import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'ct-mui',
    footer: false,
    nav: [{ title: '组件', link: '/components/card' }],
  },
});
