type is_a_supertype_of<a, b> = [b] extends [a] ? true : false;

declare let value_of_supertype: number;
declare let value_of_subtype: 1;
value_of_supertype = value_of_subtype; // OK
// @ts-expect-error Type 'number' is not assignable to type '1'.
value_of_subtype = value_of_supertype;

type variance_test = is_a_supertype_of<number, 1>;

/*
 * contravariant
 */

declare let parameter_is_supertype: (a: number) => void;
declare let parameter_is_subtype: (a: 1) => void;

// @ts-expect-error Type 'number' is not assignable to type '1'.
parameter_is_supertype = parameter_is_subtype;
parameter_is_subtype = parameter_is_supertype; // OK

type contravariant_test = is_a_supertype_of<
  (a: 1) => void,
  (a: number) => void
>;

/*
 * covariant
 */
declare let return_is_supertype: () => number;
declare let return_is_subtype: () => 1;

return_is_supertype = return_is_subtype; // OK
// @ts-expect-error Type 'number' is not assignable to type '1'.
return_is_subtype = return_is_supertype;

type covariant_test = is_a_supertype_of<() => number, () => 1>;

/*
 * invariant
 */

declare let parameter_and_return_is_supertype: (a: number) => number;
declare let parameter_and_return_is_subtype: (a: 1) => 1;

// @ts-expect-error Type 'number' is not assignable to type '1'.
parameter_and_return_is_supertype = parameter_and_return_is_subtype;
// @ts-expect-error Type 'number' is not assignable to type '1'.
parameter_and_return_is_subtype = parameter_and_return_is_supertype;

// false
type invariant_test_1 = is_a_supertype_of<(a: number) => number, (a: 1) => 1>;
// false
type invariant_test_2 = is_a_supertype_of<(a: 1) => 1, (a: number) => number>;
