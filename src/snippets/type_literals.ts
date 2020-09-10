type Handler = Function;
const key = 'key';

type Foo = {
  baz: [
    1,
    number,
    {
      y: Array<string>;
    },
  ];
  readonly handler: Handler;
  toString(): string;
  readonly [Symbol.iterator]: '123';
  [key]: 2333;
  0x1: 'foo';
  bar: number;
};
