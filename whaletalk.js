var input = 'hi human';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];
for(let i=0; i < input.length; i++){
  //console.log(i)
 //console.log(input[i]);
 for(let j=0; j < vowels.length; j++){
   if(input[i] === vowels[j]){
     resultArray.push(input[i]);
   };
 }
 if(input[i] === 'e'){
  resultArray.push(input[i]);
 }
 else if(input[i] === 'u'){
  resultArray.push(input[i]);
 }
}
console.log(resultArray.join('').toUpperCase());



