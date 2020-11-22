function disemvowel(str) {
    var diemvoweledStr = str.replace(/[aeiou]/gi,"");
    return diemvoweledStr;
  }
//   g tells to find all matches, not just the first.

// i tells to be case insensitive.

// What goes inside the // is the pattern.

// [] tells to match any character in a set.

// aeiou are the characters in the set.