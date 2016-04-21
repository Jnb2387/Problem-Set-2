//Problem 1
function firstReverse(str){
    str =str.split(' ').reverse().join(' ');
    return str;
}
console.log(firstReverse( 'REVERSED is string This'));

//Problem 2
function swapCase(str){
    var swapped='';
        for(var i=0;i<str.length;i++){
          if(str[i].toLowerCase() == str[i]){
              swapped+=str[i].toUpperCase();
          } 
          else {
              swapped+=str[i].toLowerCase();
          }
        }return swapped;
}
console.log(swapCase('CapItaL'));

//Problem 3
// function letterCount(str){
    
// }
// console.log(letterCount('Today, is the greatest day ever!'));