
function getAllPaths(iconsPath) {
	let allFilePaths = [];
	const files = fs.readdirSync(iconsPath, {  withFileTypes: true});

	const getFilePath = (file) => path.join(file.path , file.name);

	for (const file of files) {
		const filePath = getFilePath(file);
		if (file.isDirectory()) {
			// search subdirectories
		  allFilePaths = allFilePaths.concat(getAllPaths(filePath));
		} else {
			allFilePaths.push(filePath);
		}
	};

	return allFilePaths;
}

