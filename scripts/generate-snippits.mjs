#!/usr/bin/env node

// @ts-check
import * as fs from 'fs';
import lodash from 'lodash';
import prettier from 'prettier';

const names = lodash
  .difference(fs.readdirSync('./src/snippets'), ['index.ts', 'tsconfig.json'])
  .map(name => name.replace(/.ts$/, ''));

const code = `
const snippets = { ${names
  .map(
    name => `"${name}":require("!!raw-loader!./${name}.ts").default as string`,
  )
  .join(',')} } as const;

export default snippets;`;

const formattedCode = prettier.format(code, { parser: 'typescript' });

fs.writeFileSync('./src/snippets/index.ts', formattedCode);
