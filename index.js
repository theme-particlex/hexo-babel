hexo.config.babel = Object.assign({ options: {}, exclude: [] }, hexo.config.babel);
hexo.extend.renderer.register("js", "js", require("./lib/renderer.js"));
