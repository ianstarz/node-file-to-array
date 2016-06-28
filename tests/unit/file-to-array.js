'use strict';

const path = require('path');

const assert = require('chai').assert;
const fileToArray = require('../../index');

describe('fileToArray', function() {
  it('works on .txt files', function () {
    const file = path.join(__dirname, '../fixtures/file.txt');

    return fileToArray(file).then(function(array) {
      assert.deepEqual(array, ['a', 'b', 'c']);
    });
  });
});
