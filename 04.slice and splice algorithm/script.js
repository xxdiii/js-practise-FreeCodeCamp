function frankenSplice(arr1,arr2,index){
  let y=arr2.slice();
  for(let i=arr1.length-1;i>=0;i--){
    let x=arr1[i];
    y.splice(index,0,x);
    
  }
  return y;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));