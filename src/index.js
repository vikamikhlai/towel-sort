
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    let newArr = [];
    matrix.forEach((el, i) => {
      if (i % 2 !== 0) el.reverse();
      el.forEach(element => newArr.push(element))
    })
    return newArr;
};