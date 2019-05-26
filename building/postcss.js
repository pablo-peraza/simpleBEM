const fs = require("fs");
const rimraf = require("rimraf");
const postcss = require("postcss");
const postImport = require("postcss-import");
const precss = require("precss");
const utilities = require("postcss-utilities");
const stylelint = require("stylelint");
const cssnano = require("cssnano");
const reporter = require("postcss-reporter");
const autoprefixer = require("autoprefixer");

const file = "src/index.pcss";
const css = fs.readFileSync(file, "utf8");

postcss()
  .use(postImport({
    plugins: [
      stylelint({}),
    ],
  }))
  .use(utilities())
  .use(precss())
  .use(autoprefixer())
  .use(cssnano())
  .use(reporter())
  .process(css, {
    from: file,
    to: "dist/simplebem.css",
    map: { inline: false },
  })
  .then(result => write(result))
  .catch(err => console.error(err.stack));


function write(result) {
  rimraf.sync("dist");
  fs.mkdirSync("dist");
  fs.writeFileSync("dist/simplebem.css", result.css);
  if (result.map) {
    fs.writeFileSync("dist/simplebem.css.map", result.map);
  }
}
