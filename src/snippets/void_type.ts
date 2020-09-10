function noop() {}

const type_undefined_is_assignable_to_type_void: void = undefined;

// @ts-expect-error
const type_number_is_not_assignable_to_type_void: void = 1;
