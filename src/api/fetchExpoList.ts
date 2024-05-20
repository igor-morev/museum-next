import { ExpoDto } from './types';
import { promises as fs } from 'fs';

export async function fetchExpoList() {
  const file = await fs.readFile(process.cwd() + '/src/api/expo.json', 'utf8');

  return JSON.parse(file) as ExpoDto[];
}
