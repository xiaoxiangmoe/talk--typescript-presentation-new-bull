type PromiseType<T extends Promise<unknown>> = T extends Promise<infer R>
  ? R
  : 'any_type_here_is_ok';

type PromiseTypeDemo = PromiseType<Promise<[number, string]>>;

namespace arithmetic {
  type Equal<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;

  type Nat = Array<undefined>;
  type Zero = [];
  type Succ<T extends Nat> = [undefined, ...T];

  // prettier-ignore
  type Prev<T extends Nat> = T extends [undefined, ...infer p] ? p : Zero;

  type Plus<A extends Nat, B extends Nat> = A extends Zero
    ? B
    : Plus<Prev<A>, Succ<B>>;

  type Plus_v2<A, B> = A extends Nat
    ? B extends Nat
      ? Plus<A, B>
      : never
    : never;

  type NatToNumber<T extends Nat> = T['length'];

  type NumberToNatHelper<T extends number, N extends Nat> = true extends Equal<
    N['length'],
    T
  >
    ? N
    : NumberToNatHelper<T, Succ<N>>;

  type NumberToNat<T extends number> = NumberToNatHelper<T, Zero>;

  // @ts-expect-error Type instantiation is excessively deep and possibly infinite.
  export type add<a extends number, b extends number> = NatToNumber<
    // @ts-expect-error
    Plus_v2<NumberToNat<a>, NumberToNat<b>>
  >;
}

type eleven = arithmetic.add<6, 5>;

function add<A extends number, B extends number>(
  a: A,
  b: B,
): A extends number
  ? B extends number
    ? arithmetic.add<A, B>
    : never
  : never {
  return (a + b) as any;
}

declare const value123: 1 | 2 | 3;
declare const value134: 1 | 3 | 4;

const valueAdded = add(value123, value134);
