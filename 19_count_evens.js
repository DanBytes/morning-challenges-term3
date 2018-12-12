/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array. 

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes. 

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/
let assert = require('assert');
const countEvens = (arr) => {
    let count = 0;
    for (elem of arr) {
        if (elem % 2 === 0) {
            count += 1;
        }
    }
    return count;
}

// Your tests here

describe('Find total of occuring even numbers', function () {
    context('When all numbers in array are even', function () {
        it('It should return 4 in array [2,4,6,4]', function () {
            assert.equal(4, countEvens([2, 4, 6, 4]))
        });

        it('It should return 2 in array [12, 20]', function () {
            assert.equal(2, countEvens([12, 20]))
        });

        it('It should return 6 in array [10, 14, 8, 12, 12, 50]', function () {
            assert.equal(6, countEvens([10, 14, 8, 12, 12, 50]));
        });
    });
    context('When all numbers in array are odd', function () {
        it('It should return 0 in array [1,3,5]', function () {
            assert.equal(0, countEvens([1, 3, 5]));
        });

        it('It should return 0 in array [9,13,7]', function () {
            assert.equal(0, countEvens([9, 13, 7]));
        });
    });

    context('When array is empty', function () {
        it('It should return 0 in array []', function () {
            assert.equal(0, countEvens([]));
        });
    })

    context('When array contains numbers and strings', function () {
        it('It should return 4 in array ["s", 2, 6, "a", 8, 4]', function () {
            assert.equal(4, countEvens(["s", 2, 6, "a", 8, 4]));
        });
    })

});