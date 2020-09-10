type Loggable = {
  log(name: string): void;
};
type HasName = {
  readonly name: string;
};

type HasNameAndLoggable = Loggable & HasName;

// prettier-ignore
type IntersectionsReducedByDiscriminantProperties =
  & { kind: 'foo' }
  & { kind: 'bar' };
