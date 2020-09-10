const variance_test_value = [{ x: 114 }, { y: { z: 514 } }] as const;

let func_parameter_is_supertype: (a: number) => void;

const func_parameter_is_subtype: (a: 1) => void = a => {
  console.log(variance_test_value[a].y.z);
};

// @ts-expect-error Type 'number' is not assignable to type '1'.
func_parameter_is_supertype = func_parameter_is_subtype;

func_parameter_is_supertype(0); // Uncaught TypeError: Cannot read property 'z' of undefined
