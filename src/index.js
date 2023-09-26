
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined){
    return [];
  }else{
    let arr = [];
    let result = [];
    // развернули нечетные массивы внутри
    matrix.forEach((elem, index) => {
        if(index % 2 != 0){
            arr.push(elem.reverse());
        }
        else{
            arr.push(elem);
        }
    });
    // переобразовываем в один
    arr.map(elem => {
        for(let i = 0; i < elem.length; i++){
            result.push(elem[i])
        }
    })
    return result;
  }
}
