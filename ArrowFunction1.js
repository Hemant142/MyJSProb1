const sumThreeNumbers=(n1,n2,n3)=>{
  return n1+n2+n3
}
const ans=sumThreeNumbers(4,8,6);
console.log("Sum of three number is",ans)
const isEven= ans=>ans%2===0;

console.log("The sum of three number is Even ",isEven(ans))