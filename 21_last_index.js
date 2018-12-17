/*
Find Last Index
Iterate through an array in reverse, returning the index closest
to the end where the predicate truth test passes.

Try adding some tests.
One example could be what if the object is not found in the array
at all.

Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Matthew', 'last': 'McConaughey'},
             {'id': 4, 'name': 'Kanye', 'last': 'West'}];
_.findLastIndex(users, {
  name: 'Kanye'
});
=> 3
*/

const findLastIndex = (array, needle) => {

  needle = JSON.stringify(needle);
  needle = needle.substring(1, needle.length - 1);

  for (let i = array.length - 1; i >= 0; i -= 1) {

    if (JSON.stringify(array[i]).includes(needle)) {
      return array.indexOf(array[i])
    }

  }
}


// Check your solution by running these tests: mocha last_index.js
const assert = require('assert');

describe('Find Last Index', () => {
  it('finds the last index', () => {
      const objects = [{
          a: 0,
          b: 0
        },
        {
          a: 1,
          b: 1
        },
        {
          a: 2,
          b: 2
        },
        {
          a: 0,
          b: 0
        }
      ];

      const result = findLastIndex(objects, {
        a: 0
      });
      assert.equal(result, 3);
    }),

    it('Findnds users index based on the given atribute', () => {
      const users = [{
          id: 1,
          name: 'Bob',
          last: 'Brown'
        },
        {
          id: 2,
          name: 'Ted',
          last: 'White'
        },
        {
          id: 3,
          name: 'Matthew',
          last: 'McConaughey'
        },
        {
          id: 4,
          name: 'Kanye',
          last: 'West'
        }
      ];

      const result = findLastIndex(users, {
        name: 'Bob'
      });
      assert.equal(result, 0);
    })
});