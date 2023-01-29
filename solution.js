// for this solution
// Avarage Case Complexity o(n)
// Worst Case [if ar.length < n &&  n>2^32 ] o(n)
// space complexity  is o(1);
function rotateLeft(ar, n) {
  n = n % ar.length;
  let temp = 0;
  while (n > 0) {
    temp = ar[0];
    ar.shift();
    ar.push(temp);
    n--;
  }
  return ar;
}

//let ar = [1, 2, 3, 4, 5];

//console.log(rotateLeft(ar, 1723334834));
