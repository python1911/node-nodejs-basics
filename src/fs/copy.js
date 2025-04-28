import { mkdir, readdir, copyFile, access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

const copy = async () => {
  const srcFolder = path.join('fs', 'files');
  const destFolder = path.join('fs', 'files_copy');

  try {
    await access(srcFolder, constants.F_OK);
    try {
      await access(destFolder, constants.F_OK);
      throw new Error('FS operation failed');
    } catch {
      await mkdir(destFolder);
      const files = await readdir(srcFolder);
      await Promise.all(files.map(file =>
        copyFile(path.join(srcFolder, file), path.join(destFolder, file))
      ));
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await copy();
