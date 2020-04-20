// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  return str
    .split(' ')
    .map((s) => s.split('').reverse().join(''))
    .join(' ')
}

console.log(reverseWords('apple'), 'elppa')
console.log(reverseWords('a b c d'), 'a b c d')
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow')
