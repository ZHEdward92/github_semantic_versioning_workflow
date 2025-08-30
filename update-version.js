const fs = require('fs');
const path = require('path');

const newVersion = process.argv[2]; // Get version from CLI argument
if (!newVersion) {
  console.error('No version provided');
  process.exit(1);
}

const pkgPath = path.resolve(__dirname, '../package.json');
const pkg = require(pkgPath);

pkg.version = newVersion;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log(`Updated package.json to version ${newVersion}`);
