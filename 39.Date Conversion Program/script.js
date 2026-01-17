const currentDate=new Date();
const currentDateFormat=`Current Date and Time: ${currentDate}`
console.log(currentDateFormat);

function formatDateMMDDYYYY(date){
    return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`
}

function formatDateLong(date){
    const options={
        month:"long",
        day:"numeric",
        year:"numeric"
    }
    return `Formatted Date (Month Day, Year): ${date.toLocaleString("en-US",options)}`
}