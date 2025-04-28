import { createWriteStream } from 'fs';
import path from 'path';

const write = async () => {
  const filePath = path.join('streams', 'files', 'fileToWrite.txt');

  const writeStream = createWriteStream(filePath);

  process.stdin.pipe(writeStream);
};

await write();
