import { createReadStream } from 'fs';
import path from 'path';

const read = async () => {
  const filePath = path.join('streams', 'files', 'fileToRead.txt');

  const readStream = createReadStream(filePath);

  readStream.pipe(process.stdout);
};

await read();
