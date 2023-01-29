## Possible Solution

<code>
<pre>
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
</pre>
</code>
<pre>
// for this solution
// Avarage Case Complexity o(n)
// Worst Case [if ar.length < n &&  n>2^32 ] o(n)
// space complexity  is o(1);
</pre>
