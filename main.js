const { readFileSync, writeFileSync } = require("fs");
const PNG = require("pngjs").PNG;
const pixelmatch = require("pixelmatch");

const img1 = PNG.sync.read(readFileSync("images/pic1.png"));
const img2 = PNG.sync.read(readFileSync("images/pic2.png"));
const { width, height } = img1;
const diff = new PNG({ width, height });

pixelmatch(img1.data, img2.data, diff.data, width, height, {
  threshold: 0.3,
  includeAA: false,
  alpha: 1
});

writeFileSync("result/diff.png", PNG.sync.write(diff));
