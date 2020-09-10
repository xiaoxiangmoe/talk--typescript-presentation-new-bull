function infinity_loop(): never {
  // type system 一般是 incomplete 的
  // while (1 === 1) {}
  while (true) {}
  console.log('Unreachable code detected.');
}

infinity_loop();
console.log('Unreachable code detected.');
