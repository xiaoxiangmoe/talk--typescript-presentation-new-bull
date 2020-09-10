type TupleTypeDemo = readonly [name: string, age?: number];

const xianbei: TupleTypeDemo = ['田所浩二', 24];

type TupleTypeDemo2 = [string, number?];

const jiege: TupleTypeDemo2 = ['杰哥'];
jiege[1] = 114514;

const the_answer = ['the answer to life the universe and everything', 'is', 42] as const;

const jiege_length = jiege.length

type TupleTypeDemo_length = TupleTypeDemo['length']
