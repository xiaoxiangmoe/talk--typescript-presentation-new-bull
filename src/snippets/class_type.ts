interface ClassTypeDemo1Interface {
  bar(): string;
}

class ClassTypeDemo1 implements ClassTypeDemo1Interface {
  baz;

  tux?: Object;
  constructor(
    private readonly foo: number,
    bar: { v: readonly [number, { readonly x: string }] },
  ) {
    this.baz = bar.v;
  }

  bar() {
    return '';
  }
}
