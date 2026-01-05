function getAverage(scores){
  let sum=0;
  for(let i=0;i<scores.length;i++){
    sum+=scores[i];
  }

  return sum/scores.length;
}

function getGrade(score){
  if(score==100){
    return "A+";
  }
  else if(score<100 && score >=90){
    return "A";
  }
  else if(score<90 && score >=80){
    return "B";
  }
  else if(score<80 && score >=70){
    return "C";
  }
  else if(score<70 && score >=60){
    return "D";
  }
  else if(score<60 && score >=0){
    return "F";
  }
}

function hasPassingGrade(score){
  let grade=getGrade(score);
  if(grade=="F"){
    return false;
  }
  else{
    return true;
  }
}

function studentMsg(scores,score){
  let avg=getAverage(scores);
  let grade=getGrade(score);
  let haspassed=hasPassingGrade(score);
  if(haspassed){
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  }
  else{
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  }
  
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));


