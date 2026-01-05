function pyramid(str, rowcount, bool){
  let rows=[];
  for(let i=1;i<=rowcount;i++){
    let spacecount=rowcount-i;
    let charcount=2*i-1;
    let row=" ".repeat(spacecount)+ str.repeat(charcount);
    rows.push(row);
  }

  if(bool){
    rows.reverse();
  }
  return "\n"+rows.join("\n")+"\n";
}


console.log(pyramid("p", 5, true));
