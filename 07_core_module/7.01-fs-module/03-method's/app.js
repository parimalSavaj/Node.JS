const fs = require("node:fs/promises");

// for read file only
fs.readFile();

// rewrite file only
fs.writeFile();

// dynamically write file
fs.appendFile();

// rename of file and move file
fs.rename();

// copy only single file
fs.copyFile();

// copy folder with it's file
fs.cp();

// delete file
fs.unlink();

// delete empty folder
fs.rmdir();

// delete folder with file
fs.rm();
