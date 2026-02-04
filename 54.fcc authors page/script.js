const authorContainer = document.getElementById('author-container');
const loadMoreBtn=document.getElementById("load-more-btn");

let startingIndex=0;
let endingIndex=8;
let authorDataArr=[];

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
    .then((res)=>res.json())
    .then(data=>{
        authorDataArr=data;
        displayAuthors(authorDataArr.slice(startingIndex,endingIndex));
        
    })
    .catch(err=>{
        authorContainer.innerHTML=`<p class="error-msg">There was an error loading the authors</p>`
    });

const fetchMoreAuthors=()=>{
    startingIndex+=8;
    endingIndex+=8;
    displayAuthors(authorDataArr.slice(startingIndex,endingIndex))
    if(authorDataArr.length <= endingIndex){
        loadMoreBtn.disabled=true;
        loadMoreBtn.style.cursor="not-allowed";
        loadMoreBtn.textContent="No more data to load"
    }
};


const displayAuthors=(authors)=>{
    let i=0;
    authors.forEach(element =>{
        authorContainer.innerHTML+=`<div id="${i}" class="user-card">
        <h2 class="author-name">${element.author}</h2>
        <img class="user-img" src="${element.image}" alt="${element.author} avatar">
        <div class="purple-divider"></div>
        <p class="bio">${element.bio.length > 50 ? element.bio.slice(0, 50) + '...' : element.bio}</p>
        <a class="author-link" href="${element.url}" target="_blank">${element.author}'s author page</a>
        </div>`;
        i++;
    });
}

loadMoreBtn.addEventListener("click",fetchMoreAuthors)