import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import path from 'path';

const create = async () => {
  const filePath = path.join('fs', 'files', 'fresh.txt'); // ✅ NO extra 'src'

  try {
    await access(filePath, constants.F_OK);
    throw new Error('FS operation failed');
  } catch {
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  }
};

await create();
