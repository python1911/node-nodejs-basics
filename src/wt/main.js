import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performWorkerTask = (workerData) => {
  return new Promise((resolve) => {
    const workerPath = path.join(__dirname, 'worker.js');  

    const worker = new Worker(workerPath);

    worker.postMessage(workerData);

    worker.on('message', (data) => {
      resolve({ status: 'resolved', data });
    });

    worker.on('error', () => {
      resolve({ status: 'error', data: null });
    });
  });
};

const main = async () => {
  const numCores = os.cpus().length;
  const promises = [];

  for (let i = 0; i < numCores; i++) {
    promises.push(performWorkerTask(10 + i));
  }

  const results = await Promise.all(promises);
  console.log(results);
};

await main();
