function generatePassword(length){
    const char="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
    let pass="";
    for(let i=0;i<length;i++){
        pass+=char.charAt(Math.floor(Math.random()*char.length));
    }
    return pass;
}

let password=generatePassword(5);
console.log("Generated password: " + password);

