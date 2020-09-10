type Equal<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;

type a = {
  foo: number;
  bar: string;
};

type b = {
  bar: string;
  baz: boolean;
};

type c = {
  foo: number;
  baz: boolean;
};

// 子类型关系是一个类型上的非严格偏序关系，存在二元运算 union 和 intersection 满足三个公理
// 三个公理恒等式， for all a, b, c ∈ Type，
// 交换律
type CommutativeLaw1 = Equal<a | b, b | a>;
type CommutativeLaw2 = Equal<a & b, b & a>;
// 结合律
type AssociativeLaw1 = Equal<a | (b | c), (a | b) | c>;
type AssociativeLaw2 = Equal<a & (b & c), (a & b) & c>;
// 吸收律
type AbsorptionLaw1 = Equal<a | (a & b), a>;
type AbsorptionLaw2 = Equal<a & (a | b), a>;

// 可以推出 幂等律
type IdempotentLaw1 = Equal<a, a | a>;
type IdempotentLaw2 = Equal<a, a & a>;

// 而且存在 ⊤ 和 ⊥
type neverIsTheBottomType = never extends a ? true : false;
type unknownIsTheTopType = a extends unknown ? true : false;
// 或者可以定义恒等律
type IdentityLaw1 = Equal<a & unknown, a>;
type IdentityLaw2 = Equal<a | never, a>;

// （Type, union, intersection, never, unknown）构成一个 bounded lattice
