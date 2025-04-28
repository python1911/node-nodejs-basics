import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import path from 'path';

const decompress = async () => {
  const sourcePath = path.join('zip', 'files', 'archive.gz');
  const destinationPath = path.join('zip', 'files', 'fileToCompress.txt');

  const readStream = createReadStream(sourcePath);
  const unzipStream = createUnzip();
  const writeStream = createWriteStream(destinationPath);

  readStream.pipe(unzipStream).pipe(writeStream);
};

await decompress();
