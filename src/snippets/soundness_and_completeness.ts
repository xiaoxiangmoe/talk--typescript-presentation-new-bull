function incomplete_demo_1() {
  let a: number;
  [1].forEach(() => {
    a = 1;
  });
  // @ts-expect-error
  console.log(1 + a);
}

function unsound_demo_1() {
  let a: number;
  [].forEach(() => {
    a = 1;
  });
  const run = () => {
    console.log(a + 1);
  };
  run();
}

function unsound_demo_2(arr: Array<string>) {
  const itShouldBeStringOrUndefined = arr[10];
  console.log(itShouldBeStringOrUndefined.toLowerCase());
  console.log(arr[-1].length);
}

function unsound_demo_3() {
  const subTypeArray: Array<{ x: string; y: { z: string } }> = [];
  const superTypeArray: Array<{ x: string }> = subTypeArray;
  superTypeArray.unshift({ x: '123' });
  console.log(subTypeArray[0].y.z);
}

const sleep = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

class unsound_demo_4 {
  public foo?: string;

  async run() {
    if (this.foo === undefined) {
      return;
    }
    await sleep(1000);
    console.log(`foo is ${this.foo} and length is ${this.foo.length}`);
  }
}

async function unsound_demo_5(bar: { baz: number | string }) {
  if (typeof bar.baz === 'number') {
    await sleep(1000);
    console.log(bar.baz.toFixed());
  }
}
