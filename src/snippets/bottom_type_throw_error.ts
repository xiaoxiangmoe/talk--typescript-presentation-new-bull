function throw_error(): never {
  throw new Error('');
  console.log('Unreachable code detected.');
}

throw_error();
console.log('Unreachable code detected.');
