var slugify = require('slugify')

const text = 'some string first second';

console.log(slugify(text));  // some-string

// if you prefer something other than '-' as separator

console.log(slugify('some string first second', '_')) // some_string