var formatArrayIntoGrid = function(itemArray, nCols) {
  var result = [];
  var tempRow = [];

  for (let i = 0; i < itemArray.length; i++) {
    tempRow.push(itemArray[i]);
    if (i % nCols === nCols - 1 || i === itemArray.length - 1) {
      result.push(tempRow);
      tempRow = [];
    }
  }

  return result;
}

module.exports = { 
  formatArrayIntoGrid: formatArrayIntoGrid,
}