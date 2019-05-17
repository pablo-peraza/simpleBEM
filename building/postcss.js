const fs = require("fs");
const rimraf = require("rimraf");
const postcss = require("postcss");
const atImport = require("postcss-import");
const mixins = require("postcss-sassy-mixins");
const variables = require("postcss-simple-vars");
const nested = require("postcss-nested");

const immutableCss = require("immutable-css");

const file = "src/index.pcss";
const css = fs.readFileSync(file, "utf8");

postcss()
  .use(atImport())
  .use(mixins())
  .use(variables())
  .use(nested())
  .use(immutableCss())
  .process(css, {
    from: file,
  })
  .then(result => write(result.css));


function write(result) {
  rimraf.sync("dist");
  fs.mkdirSync("dist");
  fs.writeFileSync("dist/simplebem.css", result);
}
