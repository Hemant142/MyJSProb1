let char="a";
let lower_char=["a","b","c","d","e","f","g","h"];
let upper_char=["A","B","C","D","E","F","G","H"];
for(let i=0; i<lower_char.length;i++){
  if(char==lower_char[i]){
    char= upper_char[i];
  }
}
console.log(char);