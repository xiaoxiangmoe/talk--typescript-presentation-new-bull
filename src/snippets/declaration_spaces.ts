const X: string = ''; // Value named X

type X = { y: number }; // Type named X

namespace X {
  // Namespace named X
  export type Y = string;
}
const n: X = { y: 1 }; // X references type
const s: X.Y = X; // First X references namespace, second X references value
const r: X['y'] = 2; // X references type

/**
 * Value and type named C
 */
class C {
  // Instance and static members in a class are in separate declaration spaces
  x?: string; // Instance member
  static x: string = '123'; // Static member
}

// typeof C
const C2 = C;

const C3: { new (): C } = C;

const C4: new () => C = C;
