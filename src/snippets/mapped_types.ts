interface Person {
  name: string;
  age: number;
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

type PersonPartial = MyPartial<Person>;
type ReadonlyPerson = MyReadonly<Person>;
