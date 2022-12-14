# Hexo-Renderer-BabelJS

[Hexo-Renderer-BabelJS](https://github.com/argvchs/hexo-renderer-babeljs) 插件，使用 Babel 编译转换 JS 文件

## 安装

```bash
npm i hexo-renderer-babeljs -S
```

## 配置

```yaml
babel:
    options:
    exclude:
        - "*.min.js"
        - "**/*.min.js"
```

这是默认设置，`options` 详见 [Options - Babel](https://babel.dev/docs/en/options)

例如这是一种配置

```yaml
# _config.yml
babel:
    options:
        presets:
            - - "@babel/preset-env"
              - targets: "last 5 versions, not dead, > 0.3%"
                modules: false
    exclude:
        - "*.min.js"
        - "**/*.min.js"
```

或者用 `babel.config.json`

```yaml
# _config.yml, without "options"
babel:
    options:
    exclude:
        - "*.min.js"
        - "**/*.min.js"
```

```json
// babel.config.json
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": "last 5 versions, not dead, > 0.3%",
                "modules": false
            }
        ]
    ]
}
```
