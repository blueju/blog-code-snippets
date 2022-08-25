const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const I18WebpackPlugin = require("i18n-webpack-plugin");
const glob = require("glob");

const translation = {
  "zh": require(path.resolve(__dirname, "./lang/zh.json")),
  "en": require(path.resolve(__dirname, "./lang/en.json"))
};

function config() {
  let config = [];
  const jsPathArray = glob.sync(path.resolve(__dirname, "./src/*.js"));
  const translationPathArray = glob.sync(
    path.resolve(__dirname, "./lang/*.json")
  );
  for (const jsPath of jsPathArray) {
    for (const translationPath of translationPathArray) {
      let res = {
        entry: {},
        output: {
          path: path.resolve(__dirname, "./dist")
        },
        plugins: []
      };
      let chunkName = path.basename(jsPath, path.extname(jsPath));
      let lang = path.basename(translationPath, path.extname(translationPath));
      res.entry[chunkName + "." + lang] = jsPath;
      res.output.filename = `[name].[hash:8].js`;
      res.plugins[0] = new htmlWebpackPlugin({
        // 要解析的HTML
        template: path.resolve(__dirname, "./page/" + chunkName + ".html"),
        // 输出的HTML文件名称
        filename: chunkName + "." + lang + ".html",
        // 对应的JS文件块
        chunks: chunkName + "." + lang
      });
      res.plugins[1] = new I18WebpackPlugin(translation[lang]);
      config.push(res);
    }
  }
  return config;
}

module.exports = config();
