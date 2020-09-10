import * as React from 'react';
import { useRef, useEffect, CSSProperties } from 'react';
import * as monaco from 'monaco-editor';

// This require context needs typescript as a dev dependency
// Note this will add all of those files to your build even if you don't use them
const ctx = require.context(
  '!!raw-loader!typescript/lib',
  true,
  /lib(\.\w+)+\.d\.ts$/, // lib.**.d.ts
);

monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
  target: monaco.languages.typescript.ScriptTarget.ESNext,
  allowNonTsExtensions: true,
  strict: true,
});

ctx
  .keys()
  .map(filename => ({
    filename,
    content: ctx(filename).default,
  }))
  .forEach(({ filename, content }) => {
    monaco.languages.typescript.typescriptDefaults.addExtraLib(
      content,
      filename,
    );
  });

type MonacoBoxProps = {
  readonly value: string;
  readonly style?: CSSProperties;
};

export default function MonacoBox({ value, style }: MonacoBoxProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const editor = monaco.editor.create(ref.current!, {
      value,
      language: 'typescript',
      fontSize: 24,
      theme: 'vs-dark',
    });

    return () => editor.dispose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={ref} style={{ height: '70vh', ...style }} />;
}
