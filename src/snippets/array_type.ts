const array_type_demo0: number[] = [1, 2, 3];
const array_type_demo1: Array<number> = [1, 2, 3];

const array_type_demo2: ReadonlyArray<number> = [1, 2, 3];
const array_type_demo3: readonly number[] = [1, 2, 3];

const array_type_demo0_length = array_type_demo0.length;

type array_type_length = Array<string>['length'];
