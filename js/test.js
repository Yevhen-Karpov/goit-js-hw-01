const chooseOptimalDistance = (t, k, ls) => {
  const array = [];
  const combinations = [];
  const sum = [];

  if (ls.length > k) {
    const getCombination = (lvl) => {
      for (let i = 0; i < ls.length; i++) {
        if (!combinations.includes(ls[i])) {
          combinations[lvl] = ls[i];
          if (lvl < k - 1) {
            getCombination(lvl + 1);
          }
          array.push([...combinations]);
        }
      }
    };

    getCombination(0);

    for (let i = 0; i < array.length; i++) {
      const prevSum = array[i].reduce((acc, el) => {
        return acc + el;
      }, 0);

      if (!sum.includes(prevSum) && prevSum < t) {
        sum.push(prevSum);
      }
    }
  }

  if (sum.length) {
    const maxSum = Math.max.apply(null, sum);
    return maxSum;
  }
  return null;
};
const res = chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]);
const res2 = chooseOptimalDistance(163, 2, [50]);
console.log(res);
