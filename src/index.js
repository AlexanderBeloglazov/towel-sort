
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let result = [];

  if(matrix === [] || matrix == null) {
    return result;
  }

  else { 

  for (let i = 0; i < matrix.length; i++) {
    if(i === 0 || i % 2 === 0 ) {
      result = result.concat(matrix[i]);
     
    }
    else {
      result =  result.concat(matrix[i].reverse())
      
    }
    
  }
  return result
}
}
