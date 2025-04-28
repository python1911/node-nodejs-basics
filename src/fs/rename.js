import { rename as fsRename, access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

const rename = async () => {
  const wrongFile = path.join('fs', 'files', 'wrongFilename.txt');
  const properFile = path.join('fs', 'files', 'properFilename.md');

  try {
    await access(wrongFile, constants.F_OK);
    try {
      await access(properFile, constants.F_OK);
      throw new Error('FS operation failed');
    } catch {
      await fsRename(wrongFile, properFile);
    }
  } catch {
    throw new Error('FS operation failed');
  }
};

await rename();
