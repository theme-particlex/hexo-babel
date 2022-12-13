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
        presets:
            - - "@babel/preset-env"
    exclude:
        - "*.min.js"
        - "**/*.min.js"
```

这是默认设置，`options` 设置详见 [Options · Babel](https://babel.dev/docs/en/options)，要转换为 YAML
