/* eslint-disable import/no-webpack-loader-syntax */

import * as React from 'react';
import {
  Deck,
  Slide,
  Heading,
  Markdown,
  Text,
  UnorderedList,
  ListItem,
} from 'spectacle';
import MonacoBox from './components/MonacoBox';
import snippets from './snippets';
import Hasse_diagram_of_powerset_of_3 from './Hasse_diagram_of_powerset_of_3.svg';
import Hasse_diagram_of_type_system from './Hasse_diagram_of_type_system.svg';

function App() {
  return (
    <Deck>
      <Slide>
        <Heading>TypeScript 101</Heading>
        <Markdown>### ZHAO Jinxiang</Markdown>
      </Slide>
      <Slide>
        <Heading>Welcome to TypeScript</Heading>

        <Markdown>
          {
            /* md */ `
TOC

* 类型入门介绍和工具配置
* 基本类型
* 组合类型，type constructor，variance，type lattice
* advanced types
          `
          }
        </Markdown>
      </Slide>

      <Slide>
        <Markdown>{
          /* md */ `
类型系统是这样一个东西：

* 在有些人眼里它很复杂，处处给自己添麻烦，碍手碍脚。
* 另外一些人运用它概述和限制一个系统，使得编程变成这样一种活动
   1. 从全局思考新的系统约束，或约束更改应该是什么
   2. 从全局思考如何引入新的信息和让信息怎样流动可以满足1所提出的新约束
   3. 根据1和2 调整类型定义
   4. 根据编译器的错误提示更改代码
`
        }</Markdown>
      </Slide>
      <Slide>
        <Slide>
          <Markdown>{
            /* md */ `
这个过程看起来很复杂，其实基本上就是思考10%的时间，然后90%的时间一边看电视或者电影，一边无脑改程序的过程，改完了都不知道自己改了啥。然后一跑test全过。
这种开发方式又叫做careless driven programming，即：即使三心二意，也可以写出正确的程序，且保持系统可以三心二意的更改的属性。这里的重中之重，是要maintain系统的“三心二意”性。

by 阿萊克西斯
`
          }</Markdown>
        </Slide>
        <Heading>Introduction to typing</Heading>
        <UnorderedList>
          <ListItem>基本术语</ListItem>
          <ListItem>
            常见的类型系统
            <UnorderedList>
              <ListItem>Dynamic typing / Static typing</ListItem>
              <ListItem>Nominal typing / Structural typing</ListItem>
              <ListItem>Gradual typing</ListItem>
            </UnorderedList>
          </ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <div>
          <Markdown>
            {
              /* md */ `
基本术语

* term: 项，一个表达式
* type: 一个有相同性质的 term 的集合
* typing context/environment 定型环境: Map<[变量名,类型]>
* typing: 在某个 context 中赋予某个 term 以某个 type
* typed: term 被标上 type 啦
* typing rule: 已知 typing environment 中的某些 term 的类型，推出新的某些 term 的 type 的规则
* type checking: 确认 term 是否能在 context 中标记成 type
`
            }
          </Markdown>
        </div>
      </Slide>

      <Slide>
        <Text>常见的类型系统</Text>
        <UnorderedList>
          <ListItem>Dynamic typing / Static typing</ListItem>
          <ListItem>Nominal typing / Structural typing</ListItem>
          <ListItem>Gradual typing</ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>环境配置</Heading>
        <UnorderedList>
          <ListItem>node</ListItem>
          <ListItem>vscode</ListItem>
          <ListItem>ts-node</ListItem>
        </UnorderedList>
      </Slide>

      <Slide>
        <Heading>Basic Types</Heading>
      </Slide>
      <Slide>
        <Text>undefined / null</Text>
        <MonacoBox value={snippets.unit_type} />
      </Slide>
      <Slide>
        <Text>boolean / number / bigint / string / symbol</Text>
        <MonacoBox value={snippets.boolean_number_bigint_string_symbol} />
      </Slide>
      <Slide>
        <Text>void</Text>
        <Text>
          void 是一个非常复杂的类型，在某些情况下等价于 any，大部分情况下类似于
          undefined 的别名
        </Text>
        <MonacoBox value={snippets.void_type} />
      </Slide>
      <Slide>
        <Text>bottom type / never / 0</Text>
        <Text>
          类型论中底类型(常常被记为up tack (⊥) symbol)，在 ts 中对应的是
          never，这个 type 只有 0 个实际的
          instance，多用于表示死循环或者抛错停机
        </Text>
      </Slide>
      <Slide>
        <Text>bottom type: infinity loop</Text>
        <MonacoBox value={snippets.bottom_type_infinity_loop} />
      </Slide>
      <Slide>
        <Text>bottom type: throw error</Text>
        <MonacoBox value={snippets.bottom_type_throw_error} />
      </Slide>
      <Slide>
        <Text>bottom type: bottom type assignment</Text>
        <MonacoBox value={snippets.bottom_type_assignment} />
      </Slide>
      <Slide>
        <Text>top type</Text>
        <Text>
          类型论中的顶类型（常被记为down tack symbol (⊤)），在 ts 中是
          unknown，任何类型都是其子类型
        </Text>
        <MonacoBox value={snippets.top_type} />
      </Slide>
      <Slide>
        <Text>any</Text>
        <Text>动态类型，不安全的类型，危险的功能，可以不禁止，但得慎用</Text>
        <MonacoBox value={snippets.dynamic_typing_any} />
      </Slide>
      <Slide>
        <Slide>
          <Heading>Composing Types</Heading>
          <Text>{'type -> type'}</Text>
          <Text>接下来的内容都是组合上面的类型，主要介绍各种类型构造器</Text>
        </Slide>
      </Slide>
      <Slide>
        <Text>Tuple type</Text>
        <Text>
          tuple 是最常见的类型构造器，js 中没有 tuple，由 array
          来模拟，比如二元组就是一个 {'(type,type)->type'}
          的类型构造器，常常用于有限长度的数据表示
        </Text>
        <MonacoBox value={snippets.tuple_type} />
      </Slide>

      <Slide>
        <Text>Array type</Text>
        <Text>
          Array 是一个一元类型构造器 {'type->type'}，接受一个类型
          T，返回一个新类型 {'Array<T>'}
        </Text>
        <MonacoBox value={snippets.array_type} />
      </Slide>
      <Slide>
        <Markdown>{
          /* md */ `
Tuple or Array?

* length
* Number of type parameters
`
        }</Markdown>
      </Slide>
      <Slide>
        <Text>Type literal / object literal type</Text>
        <MonacoBox value={snippets.type_literals} />
      </Slide>

      <Slide>
        <Text>Intersection type</Text>
        <Text>
          an intersection type {'σ & τ'} can be allocated to values that can be
          assigned both the type σ and the type τ.
        </Text>
        <MonacoBox value={snippets.intersection_type} />
      </Slide>

      <Slide>
        <Text>Union type</Text>
        <Text>
          A union type describes a value that can be one of several types.
        </Text>
        <MonacoBox value={snippets.union_type} />
      </Slide>

      <Slide>
        <Text>Lattice</Text>
        <Text>
          <a
            href="https://en.wikipedia.org/wiki/Lattice_(order)#Bounded_lattice"
            about="_blank"
          >
            Bounded lattice
          </a>
        </Text>
        <img
          src={Hasse_diagram_of_powerset_of_3}
          alt="Hasse diagram of powerset of 3"
        />
      </Slide>
      <Slide>
        <Text>Type lattice</Text>
        <img
          style={{
            width: 631,
            height: 502,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          src={Hasse_diagram_of_type_system}
          alt="Hasse diagram of type system"
        />
      </Slide>

      <Slide>
        <Text>Type lattice</Text>
        <MonacoBox value={snippets.type_lattice} />
      </Slide>
      <Slide>
        <Text>string literals and enum type</Text>
        <Text>enum is nominal typing.</Text>
        <MonacoBox value={snippets.string_literals_and_enum_types} />
      </Slide>

      <Slide>
        <Text>variance : covariant / contravariant / invariant</Text>
        <MonacoBox value={snippets.variance} />
      </Slide>
      <Slide>
        <Text>bivariance</Text>
        <MonacoBox value={snippets.variance_bivariance} />
      </Slide>

      <Slide>
        <Text>discriminated union</Text>
        <MonacoBox value={snippets.discriminated_union} />
      </Slide>
      <Slide>
        <Text>function</Text>
        <MonacoBox value={snippets.function_type} />
      </Slide>
      <Slide>
        <Text>index types</Text>
        <MonacoBox value={snippets.index_types} />
      </Slide>
      <Slide>
        <Text>mapped types</Text>
        <MonacoBox value={snippets.mapped_types} />
      </Slide>
      <Slide>
        <Text>contextual typing</Text>
        <MonacoBox value={snippets.contextual_typing} />
      </Slide>
      <Slide>
        <Text>class</Text>
        <MonacoBox value={snippets.class_type} />
      </Slide>
      <Slide>
        <Text>conditional types</Text>
        <MonacoBox value={snippets.conditional_types} />
      </Slide>
      <Slide>
        <Text>type guards and asserts</Text>
        <MonacoBox value={snippets.type_guards_and_asserts} />
      </Slide>
      <Slide>
        <Text>Nominal typing and structural typing</Text>
        <Text>
          A static type checker uses either the names or the structure of the
          types in order to compare them against other types. Checking against
          the name is nominal typing and checking against the structure is
          structural typing.
        </Text>
      </Slide>
      <Slide>
        <Text>
          Structural typing is a way of relating types based solely on their
          members.
        </Text>
        <MonacoBox value={snippets.structural_typing} />
      </Slide>
      <Slide>
        <Text>Declaration spaces</Text>
        <Text>
          <MonacoBox value={snippets.declaration_spaces} />
        </Text>
      </Slide>
      <Slide>
        <Text>Soundness and Completeness of the Type System</Text>
        <MonacoBox value={snippets.soundness_and_completeness} />
      </Slide>

      <Slide>
        <Text>Soundness and Completeness of the Type System</Text>
        <UnorderedList>
          <ListItem>
            A type-system is sound implies that all of type-checked programs are
            correct (in the other words, all of the incorrect program can't be
            type checked), i.e. there won't be any false negative.
          </ListItem>
          <ListItem>
            A type-system is complete implies that all of the correct program
            can be accepted by the type checker, i.e. there won't be any false
            positive
          </ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Text>
          Besides, according to Godel's incompleteness theorems, if your system
          is expressive enough to represent natural numbers, then it can't be
          both sound and complete.
        </Text>

        <Text>
          Usually, most programming language would prefer soundness over
          completeness, since false negative will result in bad consequence.
        </Text>
      </Slide>

      <Slide>
        <Heading>作业</Heading>

        <Text>omit，Promise.all, SimpleVue</Text>
      </Slide>
    </Deck>
  );
}

export default App;
