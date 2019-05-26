const fs = require("fs");
const rimraf = require("rimraf");
const postcss = require("postcss");
const postImport = require("postcss-import");
const precss = require("precss");
const utilities = require("postcss-utilities");
const stylelint = require("stylelint");
const reporter = require("postcss-reporter");

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
  .use(reporter())
  .process(css, {
    from: file,
  })
  .then(result => write(validate(result.css)));


function write(cssToWrite) {
  rimraf.sync("dist");
  fs.mkdirSync("dist");
  fs.writeFileSync("dist/simplebem.css", cssToWrite);
}

async function validate(cssToValidate) {
  return cssToValidate;
}
