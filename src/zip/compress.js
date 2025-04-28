import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { pipeline } from 'stream/promises';

const compress = async () => {
  const sourcePath = path.join('zip', 'files', 'fileToCompress.txt');
  const destinationPath = path.join('zip', 'files', 'archive.gz');

  const readStream = createReadStream(sourcePath);
  const gzipStream = createGzip();
  const writeStream = createWriteStream(destinationPath);

  await pipeline(readStream, gzipStream, writeStream);
};

await compress();
