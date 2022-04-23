function sumSquares(array) {
  let a = array.map(x => x ** 2)
  let b = a.reduce((acc, cv) => acc + cv, 0)
  return b;
}
