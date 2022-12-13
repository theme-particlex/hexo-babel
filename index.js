const babel = require("@babel/core");
const { isMatch } = require("micromatch");
const config = Object.assign(
    {
        config: {},
        exclude: [],
    },
    hexo.config.babel
);
hexo.extend.renderer.register("js", "js", data => {
    return new Promise((resolve, reject) => {
        if (isMatch(data.path, config.exclude, { basename: true })) resolve(data.text);
        babel.transform(data.text, config.config, (err, res) => {
            if (err) reject(err);
            else resolve(res.code);
        });
    });
});
