export const getBlogPosts = fs.readDirSync(folderPath, (error, files) => {
  if (error) {
    console.error("Error:", error);
  } else {
    const filteredFiles = files.filter((file) => {
      const extension = path.extname(file);
      return extension === ".mdx" || extension === ".md";
    });
    for (let file of filteredFiles) {
      themePaths.push(`${folderPath}/${file}`);
    }
  }
});
