const { transform } = require("@babel/core");
const { isMatch } = require("micromatch");
module.exports = data => {
    const { options, exclude } = this.config.babel;
    const { path, text } = data;
    return new Promise((resolve, reject) => {
        if (isMatch(path, exclude, { basename: true })) resolve(text);
        else
            transform(text, options, (err, ret) => {
                if (err) reject(err);
                else resolve(ret.code);
            });
    });
};
