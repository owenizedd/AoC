import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const filename = process.argv[2];
const currentYear = new Date().getFullYear();
const scriptPath = path.join(currentYear.toString(), `${filename}.js`);

if (fs.existsSync(scriptPath)) {
  spawn(`reset`);
  const child = spawn('node', ['--max-old-space-size=20177', '--watch', scriptPath], { stdio: 'inherit' });
  child.on('error', (err) => {
    console.error('Failed to start subprocess.', err);
  });
} else {
  console.error(`Error: Cannot find module '${scriptPath}'`);
}