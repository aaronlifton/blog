import { readdir, mkdir, existsSync } from "fs";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const processImages = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const directoryPath = path.join(__dirname, "public");
  const relativeOutputDirectory = "public/homepage-images";
  const outputDirectory = path.join(__dirname, relativeOutputDirectory);

  const dirExists = existsSync(relativeOutputDirectory);
  if (!dirExists) {
    mkdir(`./${relativeOutputDirectory}`);
  }
  readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log(`Unable to scan directory: ${err}`);
    }

    for (const file of files) {
      console.log({ file });
      if (path.extname(file) === ".jpg" || path.extname(file) === ".png") {
        sharp(`${directoryPath}/${file}`)
          .resize(300, 300, {
            fit: "cover",
            position: "center",
          })
          .toFile(`${outputDirectory}/${file}`, (err, _info) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`Image ${file} has been resized.`);
            }
          });
      }
    }
  });
};

export default {
  name: "custom-image-resizer-integration",
  hooks: {
    "astro:config:setup": () => {
      processImages();
    },
  },
};
