# Hexo-Babel

[Hexo-Babel](https://github.com/argvchs/hexo-babel) 插件，使用 Babel 编译转换 JS 文件

## 安装

```bash
pnpm add hexo-babel
```

## 配置

```yaml
babel:
    options:
    exclude:
```

`options` 详见 [Options · Babel](https://babel.dev/docs/en/options) 和 [@babel/preset-env · Babel](https://babel.dev/docs/en/babel-preset-env#options)

例如这是一种配置

```yaml
babel:
    options:
        presets:
            - - "@babel/preset-env"
              - targets: last 5 versions, not dead, > 0.3%
        sourceType: script
    exclude:
```

或者不填 `options` 参数，使用 `babel.config.json`

```json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": "last 5 versions, not dead, > 0.3%"
            }
        ]
    ],
    "sourceType": "script"
}
```
