const undef = undefined;
const nil = null;

let null_in_let_infer_any = null;
let undefined_in_let_infer_any = undefined;

// @ts-expect-error
const undefined_is_not_null: undefined = null;

// @ts-expect-error
const null_is_not_undefined: null = undefined;

// @ts-expect-error
const undefined_is_not_number: number = undefined;
