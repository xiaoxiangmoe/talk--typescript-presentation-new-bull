declare let top_value: unknown;

// @ts-expect-error
const top_type_is_assignable_to_type_number: number = top_value;
// @ts-expect-error
const top_type_is_assignable_to_type_string: string = top_value;
// @ts-expect-error
const top_type_is_assignable_to_type_object: object = top_value;
// @ts-expect-error
const top_type_is_assignable_to_type_function: Function = top_value;
// @ts-expect-error
const top_type_is_assignable_to_bottom_type: never = top_value;

top_value = 1;
top_value = '';
top_value = {};
