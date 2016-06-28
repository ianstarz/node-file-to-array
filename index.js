'use strict';

const fs = require('fs');
const readline = require('readline');

const RSVP = require('rsvp');

function fileToArray(file) {
  return new RSVP.Promise(function(resolve, reject) {
    const read = readline.createInterface({
      input: fs.createReadStream(file)
    });

    const array = [];
    read.on('line', function(line) {
      array.push(line);
    });

    read.on('close', function() {
      resolve(array);
    });

    read.on('error', function(error) {
      reject(error);
    });
  });
}

module.exports = fileToArray;
