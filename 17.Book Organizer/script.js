const books=[
    {
    title: "Your Next Five Moves: Master the Art of Business Strategy",
    authorName: "Patrick Bet-David and Greg Dinkin",
    releaseYear: 1937,
    },
    {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear:1943,
    },
    {
    title: "Choose Your Enemies Wisely: Business Planning for the Audacious Few",
    authorName: "Patrick Bet-David",
    releaseYear:2006,
    },
];

function sortByYear(book1,book2){
    let sortResult=book1.releaseYear-book2.releaseYear;

    if(sortResult>0){
        return 1;
    }
    else if(sortResult==0){
        return 0;
    }
    else{
        return -1;
    }

}

const filteredBooks=books.filter((book)=>book.releaseYear<1950);
filteredBooks.sort(sortByYear)
console.log(filteredBooks);
    