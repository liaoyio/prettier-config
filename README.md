# @ooyi/prettier-config


My personal Prettier config ( 我的 Prettier 配置 )

## Configs ( 配置 )

- No semi ( 不使用分号 )
- Use single quotes ( 使用单引号 )
- Ignore space around HTML tags ( 忽略 HTML 标签周围空格 )


## Install ( 安装 )

```bash
npm i -D prettier  @ooyi/prettier-config
```

## Usage ( 使用 )

Edit `package.json` ( 编辑 `package.json` )

```jsonc
// config
"prettier": "npm i @ooyi/prettier-config"

// script
"scripts": {
  "format": "prettier --cache --write ."
}
```
