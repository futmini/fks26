const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const size = '1024x1024';

fs.readdirSync(dir)
  .filter(file => file.toLowerCase().endsWith('.png'))
  .forEach(file => {
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file); // Overwrite original
    const cmd = `magick convert "${inputPath}" -resize ${size} "${outputPath}"`;
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        console.error(`Error resizing ${file}:`, stderr);
      } else {
        console.log(`Resized ${file}`);
      }
    });
  });