hexo.config.babel = Object.assign(
    {
        options: {},
        exclude: ["*.min.js"],
    },
    hexo.config.babel
);
hexo.extend.renderer.register("js", "js", require("./lib/renderer.js"));
