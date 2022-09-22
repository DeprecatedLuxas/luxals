import { describe, expect, it } from 'vitest';

import { merge } from '../src';

describe('merge test', () => {
  it('only merge plain objects', () => {
    class A {
      a = 1;
    }

    class B {
      b = 2;
    }

    const a = new A();
    const b = new B();

    const object1 = {
      class: a,
      value: "Hello, World",
      foo: {
        bar: 'baz'
      }
    }

    const object2 = {
      class: b,
      value: "Bye, World",
      foo: {
        baz: 'bar'
      }
    }

    const combinedObject = merge(object1, object2);

    expect(combinedObject).toStrictEqual({
      class: b,
      value: "Bye, World",
      foo: {
        bar: 'baz',
        baz: 'bar'
      }
    });
  });
});
