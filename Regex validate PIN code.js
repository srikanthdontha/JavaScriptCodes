// ^       a string that starts with...
// (       either
//   \d    a digit (0-9)...
//   {4}   that repeats four times...
// |       or
//   \d    a digit (0-9)...
//   {6}   that repeats six times...
// )
// $       and then ends


function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}
console.log(validatePIN(254665));