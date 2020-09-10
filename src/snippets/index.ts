const snippets = {
  array_type: require("!!raw-loader!./array_type.ts").default as string,
  boolean_number_bigint_string_symbol: require("!!raw-loader!./boolean_number_bigint_string_symbol.ts")
    .default as string,
  bottom_type_assignment: require("!!raw-loader!./bottom_type_assignment.ts")
    .default as string,
  bottom_type_infinity_loop: require("!!raw-loader!./bottom_type_infinity_loop.ts")
    .default as string,
  bottom_type_throw_error: require("!!raw-loader!./bottom_type_throw_error.ts")
    .default as string,
  class_type: require("!!raw-loader!./class_type.ts").default as string,
  conditional_types: require("!!raw-loader!./conditional_types.ts")
    .default as string,
  contextual_typing: require("!!raw-loader!./contextual_typing.ts")
    .default as string,
  declaration_spaces: require("!!raw-loader!./declaration_spaces.ts")
    .default as string,
  discriminated_union: require("!!raw-loader!./discriminated_union.ts")
    .default as string,
  dynamic_typing_any: require("!!raw-loader!./dynamic_typing_any.ts")
    .default as string,
  function_type: require("!!raw-loader!./function_type.ts").default as string,
  index_types: require("!!raw-loader!./index_types.ts").default as string,
  intersection_type: require("!!raw-loader!./intersection_type.ts")
    .default as string,
  mapped_types: require("!!raw-loader!./mapped_types.ts").default as string,
  object_type: require("!!raw-loader!./object_type.ts").default as string,
  soundness_and_completeness: require("!!raw-loader!./soundness_and_completeness.ts")
    .default as string,
  string_literals_and_enum_types: require("!!raw-loader!./string_literals_and_enum_types.ts")
    .default as string,
  structural_typing: require("!!raw-loader!./structural_typing.ts")
    .default as string,
  top_type: require("!!raw-loader!./top_type.ts").default as string,
  tuple_type: require("!!raw-loader!./tuple_type.ts").default as string,
  type_guards_and_asserts: require("!!raw-loader!./type_guards_and_asserts.ts")
    .default as string,
  type_inference: require("!!raw-loader!./type_inference.ts").default as string,
  type_lattice: require("!!raw-loader!./type_lattice.ts").default as string,
  type_literals: require("!!raw-loader!./type_literals.ts").default as string,
  union_type: require("!!raw-loader!./union_type.ts").default as string,
  unit_type: require("!!raw-loader!./unit_type.ts").default as string,
  variance: require("!!raw-loader!./variance.ts").default as string,
  variance_bivariance: require("!!raw-loader!./variance_bivariance.ts")
    .default as string,
  void_type: require("!!raw-loader!./void_type.ts").default as string,
} as const;

export default snippets;
