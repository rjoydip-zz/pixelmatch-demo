const { createWriteStream } = require("fs");
const PNG = require("pngjs").PNG;
const png = new PNG({
    width: 100,
    height: 100,
    filterType: -1
});

png.pack().pipe(createWriteStream('newOut.png'));