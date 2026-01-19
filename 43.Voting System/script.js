const poll=new Map();

const addOption=((option)=>{
    if(!poll.has(option)){
        if(option===""){
            return "Option cannot be empty.";
        }
        poll.set(option, new Set());
        return `Option "${option}" added to the poll.`
    }else{
        return `Option "${option}" already exists.`
    }
})

const vote=((option,voterId)=>{
    if(!poll.has(option)){
        return `Option "${option}" does not exist.`
    }

    const voter=poll.get(option);
    if(voter.has(voterId)){
        return `Voter ${voterId} has already voted for "${option}".`
    }
    voter.add(voterId);
    return `Voter ${voterId} voted for "${option}".`
    
})

const displayResults=(()=>{
    let result=["Poll Results:"];

    poll.forEach((voterList, options)=>{
        result.push(`${options}: ${voterList.size} votes`)
    })
    return result.join("\n")
})

console.log(addOption("Coffee"));
console.log(addOption("Tea"));
console.log(addOption("Juice"));

console.log(vote("Coffee", "User1")); 
console.log(vote("Coffee", "User2")); 
console.log(vote("Tea", "User3"));

console.log(addOption("Coffee"));     // Should say already exists
console.log(vote("Coffee", "User1"));

console.log(displayResults());