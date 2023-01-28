const babel = require("@babel/core");
const { isMatch } = require("micromatch");
const config = Object.assign(
    {
        options: {
            presets: [["@babel/preset-env"], {}],
        },
        exclude: [],
    },
    hexo.config.babel
);
hexo.extend.renderer.register(
    "js",
    "js",
    data =>
        new Promise((resolve, reject) => {
            if (isMatch(data.path, config.exclude, { basename: true })) resolve(data.text);
            else
                babel.transform(data.text, config.options, (err, res) => {
                    if (err) reject(err);
                    else resolve(res.code);
                });
        })
);
