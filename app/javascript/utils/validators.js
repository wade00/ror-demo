// taken from: http://www.brainjar.com/js/validation/
export function checkSum (num) {
  // Run through each digit and calculate the total.

  let n = 0;
  for (i = 0; i < num.length; i += 3) {
    n += parseInt(num.charAt(i),     10) * 3
      +  parseInt(num.charAt(i + 1), 10) * 7
      +  parseInt(num.charAt(i + 2), 10);
  }

  // If the resulting sum is an even multiple of ten (but not zero),
  // the aba routing number is good.

  if (n != 0 && n % 10 == 0) {
    return true;
  } else {
    return false;
  }
}
