import { ExpoDto } from './types';
import { promises as fs } from 'fs';

export async function fetchExpoList() {
  console.log(process.cwd());
  const file = await fs.readFile(`${process.cwd()}/public/expo.json`, 'utf8');

  const result = JSON.parse(file) as ExpoDto[];

  return result.map((item, i) => {
    if (i === 0) {
      item.prevId = null;
    }

    if (i > 0) {
      item.prevId = result[i - 1].id;
    }

    if (i === result.length - 1) {
      item.nextId = null;
    }

    if (i < result.length - 1) {
      item.nextId = result[i + 1].id;
    }

    return item;
  });
}
