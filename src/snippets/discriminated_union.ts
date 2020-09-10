enum Status {
  OK,
  Error,
}

type Result<V, E> =
  | {
      status: Status.OK;
      value: V;
    }
  | {
      status: Status.Error;
      error: E;
    };

declare const a: Result<string, number>;

function exhaustiveCheck(v: never) {}

if (a.status === Status.OK) {
  a.value;
} else if (a.status === Status.Error) {
  a.error;
} else {
  exhaustiveCheck(a);
}
