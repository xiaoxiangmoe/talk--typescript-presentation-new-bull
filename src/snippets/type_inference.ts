// @ts-expect-error 'quick_sort' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions.
function quick_sort(xs: ReadonlyArray<number>) {
  if (xs.length === 0) {
    return xs;
  }
  const [head, ...tail] = xs;
  return [
    ...quick_sort(tail.filter(x => x < head)),
    head,
    ...quick_sort(tail.filter(x => x >= head)),
  ];
}

const filter = <X>(predicate: (value: X) => boolean) => (
  xs: ReadonlyArray<X>,
) => xs.filter(predicate);

// @ts-expect-error
const numbers: number[] = filter(x => x !== 1)([1, 2, 3, 4]);
