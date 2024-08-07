const { transformSync } = require("@babel/core");
const { isMatch } = require("micromatch");
hexo.extend.renderer.register("js", "js", ({ path, text }) => {
    const { options = {}, exclude = [] } = hexo.config.babel;
    if (isMatch(path, exclude, { basename: true })) return text;
    return transformSync(text, options).code;
});
