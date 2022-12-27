function findTarget(array,target){
  for(let i =0;i<array.length;i++){
    if(array[i]===target){
      return i;
    }
  }
  return -1;
}
const myArray=[1,25,3,4,5,9]
const ans=findTarget((myArray,9));
console.log(ans);