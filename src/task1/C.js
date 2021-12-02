
const array = [1, 1, 2, 3, 3, 2, 4, 5, 5, 6, 6]

const getUniqElem = function (num) {
  const uniq = new Set();

  let sumOfUniq = 0;
  let sumOfAllNum = 0;

  for (let i = 0; i < num.length; i++) {
    const current = num[i];

    if (!uniq.has(current)) {
      uniq.add(current);
      sumOfUniq += current;
    }
    sumOfAllNum += current;
  }
  const QUANTITY = 2;
  const result = sumOfUniq * QUANTITY - sumOfAllNum
  return result;

}
console.log(getUniqElem(array));