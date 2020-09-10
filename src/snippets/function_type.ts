async function asyncFunctionReturn1() {
  return 1;
}

const add_v1: (a: number) => (b: number) => number = (
  a: number,
): ((b: number) => number) => (b: number): number => a + b;

const add_v2 = (a: number) => (b: number) => a + b;

const sum_of_all = (...xs: ReadonlyArray<number>) =>
  xs.reduce((a, b) => a + b, 0);

function add_v3(a: number, b: number): number;
function add_v3(a: bigint, b: bigint): bigint;
function add_v3(a: number | bigint, b: number | bigint) {
  // 实现往往类型不安全
  // @ts-expect-error
  return a + b;
}

// prettier-ignore
const add_v4:
  & ((a: number, b: number) => number)
  & ((a: bigint, b: bigint) => bigint)
  = add_v3;

function identity<T>(x: T) {
  return x;
}

const identityOf1 = identity(1);

function map<X, Y>(xs: ReadonlyArray<X>, mapper: (x: X) => Y) {
  return xs.map(mapper);
}
