declare let bottom: never;

const bottom_type_is_assignable_to_type_number: number = bottom;
const bottom_type_is_assignable_to_type_string: string = bottom;
const bottom_type_is_assignable_to_type_object: object = bottom;
const bottom_type_is_assignable_to_type_function: Function = bottom;
const bottom_type_is_assignable_to_bottom_type: never = bottom;

// @ts-expect-error
bottom = 1;
// @ts-expect-error
bottom = '';
// @ts-expect-error
bottom = {};
