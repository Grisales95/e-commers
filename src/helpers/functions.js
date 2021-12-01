const sumTotal = (array, val) => {
  let totalItem = [];
  for (let i = 0; i < array.length; i++) {
    totalItem.push(Number(array[i]?.[val]));
  }
  let total = totalItem.reduce((a, b) => a + b, 0);

  return total;
};

export { sumTotal };
