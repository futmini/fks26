const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const size = '1024x1024';

fs.readdir(dir, (err, files) => {
  if (err) throw err;
  files.filter(f => f.toLowerCase().endsWith('.png')).forEach(file => {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, `resized_${file}`);
    const cmd = `magick convert "${inputPath}" -resize ${size} "${outputPath}"`;
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error resizing ${file}:`, stderr);
      } else {
        console.log(`Resized ${file} -> ${outputPath}`);
      }
    });
  });
});