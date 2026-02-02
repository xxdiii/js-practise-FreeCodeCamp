const generateElement=()=>{
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    return randomNumber;
}

const generateArray=()=>{
    let arr=[];
    for(let i=0;i<5;i++){
        arr.push(generateElement());
    }
    return arr;
}

const generateContainer=()=>{
    const container = document.createElement('div');
    return container;
}

const fillArrContainer=(element, arr)=>{
    element.innerHTML="";

    for(let i=0;i<5;i++){
        const spancontainer=document.createElement("span");
        spancontainer.textContent=arr[i];
        element.appendChild(spancontainer);
    }
}

const isOrdered=(first,second)=>{
    if(first<=second){
        return true;
    }else{
        return false;
    }
}

const swapElements=(arr, index)=>{
    if (isOrdered(arr[index],arr[index+1])===true){
        return;
    }else{
        let temp=arr[index];
        arr[index]=arr[index+1];
        arr[index+1]=temp;
    }
}

const highlightCurrentEls=(element, index)=>{
    const spanelem1=element.children[index];
    const spanelem2=element.children[index+1];
    spanelem1.style.border = "3px dashed red";
    spanelem2.style.border = "3px dashed red";
}

const generateBtn=document.getElementById("generate-btn");
const startingArr=document.getElementById("starting-array");
const sortBtn = document.getElementById("sort-btn");
const arrayContainer = document.getElementById("array-container");

let currentArray = [];

generateBtn.addEventListener("click",()=>{
    currentArray=generateArray();
    arrayContainer.innerHTML="";
    arrayContainer.appendChild(startingArr);
    fillArrContainer(startingArr, currentArray);
    
})

sortBtn.addEventListener("click",()=>{
    for(let i=0;i<currentArray.length-1;i++){
        for(let j=0;j<currentArray.length-i-1;j++){
            let containerToHighlight;

            if(i===0 && j===0){
                containerToHighlight=startingArr;
            }else{
                const stepContainer=generateContainer();
                fillArrContainer(stepContainer, currentArray);
                arrayContainer.appendChild(stepContainer);
                containerToHighlight=stepContainer;
            }

            highlightCurrentEls(containerToHighlight, j);
            swapElements(currentArray, j);
        }
    }

    const sortedContainer=generateContainer();
    fillArrContainer(sortedContainer,currentArray);
    arrayContainer.appendChild(sortedContainer);
})

