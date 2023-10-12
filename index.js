module.exports = {
  semi: false,
  singleQuote: true,
  /**  选项：none | es5 | all， 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）*/
  trailingComma: 'es5',
  overrides: [
    {
      files: [
        '**/node_modules/**',
        '**/dist/**',
        '**/output/**',
        '**/coverage/**',
        '**/temp/**',
        '**/.vitepress/cache/**',
        '**/.nuxt/**',
        '**/.vercel/**',
        '**/.changeset/**',
        '**/.idea/**',
        '**/.output/**',
        '**/.vite-inspect/**',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
        '**/pnpm-lock.yaml',
      ],
      options: {
        /** 上面files匹配的文件，在文件顶部需要加上 @prettier 或 @format 才会被格式化 */
        requirePragma: true,
      },
    },
  ],
}
