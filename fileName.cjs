const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, '26_minikits');
const outputJson = path.join(__dirname, 'minikits.json');

fs.readdir(dirPath, (err, files) => {
  if (err) throw err;
  const pngFiles = files.filter(file => file.toLowerCase().endsWith('.png'));
  fs.writeFileSync(outputJson, JSON.stringify(pngFiles, null, 2), 'utf8');
  console.log(`Found ${pngFiles.length} PNG files. JSON saved to minikits.json.`);
});