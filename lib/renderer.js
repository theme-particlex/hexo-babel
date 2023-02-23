const { transform } = require("@babel/core");
const { isMatch } = require("micromatch");
module.exports = function (data) {
    const { options, exclude } = this.config.babel;
    const { path, text } = data;
    return new Promise((resolve, reject) => {
        if (isMatch(path, exclude, { basename: true })) resolve(text);
        else
            transform(text, options, (err, res) => {
                if (err) reject(err);
                else resolve(res.code);
            });
    });
};
