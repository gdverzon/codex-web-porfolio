'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
// Recreate only this generated deployment folder; copy an explicit allowlist.
fs.rmSync(output, { recursive: true, force: true });
for (const file of [
  'index.html', 'css/style.css', 'js/script.js',
  'assets/favicon.svg', 'assets/project-placeholder.svg',
  'assets/resume-placeholder.txt', 'assets/social-preview.svg'
]) {
  const destination = path.join(output, file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, file), destination);
}
console.log('Prepared 7 public website files in dist/.');
