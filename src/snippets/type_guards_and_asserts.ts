function isNotNil<T>(x: T): x is NonNullable<T> {
  return x != null;
}

const type_guard_demo_1 = [1, 2, '', undefined, null].filter(isNotNil);

function type_guard_demo_2(x?: string) {
  return typeof x === 'string' ? x.length : -1;
}

function assertNotNil<T>(x: T): asserts x is NonNullable<T> {
  if (x == null) {
    throw new Error();
  }
}

function asserts_demo_1(x?: string) {
  assertNotNil(x);
  return x.length;
}

function assert(x: unknown): asserts x {
  if (!x) {
    throw new Error();
  }
}

function asserts_demo_2(x?: Array<number>) {
  assert(x instanceof Array);
  return x.length;
}
