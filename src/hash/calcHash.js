import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';

const calculateHash = async () => {
  const filePath = path.join('hash', 'files', 'fileToCalculateHashFor.txt');

  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => hash.update(chunk));
    stream.on('end', () => {
      const result = hash.digest('hex');
      console.log(result);
      resolve();
    });
    stream.on('error', (err) => reject(err));
  });
};

await calculateHash();
