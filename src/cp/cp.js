import { spawn } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
  const scriptPath = path.join('cp', 'files', 'script.js');

  const child = spawn('node', [scriptPath, ...args], {
    stdio: ['pipe', 'pipe', 'inherit']
  });

  process.stdin.pipe(child.stdin);
  child.stdout.pipe(process.stdout);
};

await spawnChildProcess(["arg1", "arg2"]); // this line is just for example, you may remove it for clean final version
