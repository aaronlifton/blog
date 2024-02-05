import { readdir, mkdir, existsSync } from "fs";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const size = {
  width: 300,
  height: 300,
} 
const processImages = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const directoryPath = path.join(__dirname, "src/content/blog/assets");
  const relativeOutputDirectory = "src/content/blog/assets/homepage-images";
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
      if (path.extname(file) === ".jpg" || path.extname(file) === ".png") {
        sharp(`${directoryPath}/${file}`)
          .resize(size.width, size.height, {
            fit: "cover",
            position: "center",
          })
          .toFile(`${outputDirectory}/${file}`, (err, _info) => {
            if (err) {
              console.log(err);
            } else {
              console.log(`Image ${file} ->\t ${size.width}x${size.height}.`);
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
