const n = parseInt(process.argv[2], 10);

if (isNaN(n) || n < 1) {
  console.error("Usage: node fibonacci.js <n>  (n must be a positive integer)");
  process.exit(1);
}

// 1-based: F(1)=0, F(2)=1, F(3)=1, F(4)=2, ...
function fibonacci(n) {
  if (n === 1) return 0n;
  if (n === 2) return 1n;
  let a = 0n, b = 1n;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log(fibonacci(n).toString());
