let inventory=[];

function findProductIndex(prodName){
    let lowerName=prodName.toLowerCase();
    for(let i=0;i<inventory.length;i++){
        if(inventory[i].name===lowerName){
            return i;
        }
        
    }
    return -1;
    
}

function addProduct(product){
    product.name=product.name.toLowerCase();
    let index=findProductIndex(product.name);
    if(index!==-1){
        inventory[index].quantity+=product.quantity;
        console.log(`${product.name} quantity updated`);       
    }
    else{
        inventory.push(product);
        console.log(`${product.name} added to inventory`);   
    }
}

function removeProduct(prodName,prodQuantity){
    prodName=prodName.toLowerCase();
    let index=findProductIndex(prodName);
    if(index!==-1){
        if(inventory[index].quantity>prodQuantity){
            inventory[index].quantity-=prodQuantity;
            console.log(`Remaining ${prodName} pieces: ${inventory[index].quantity}`);           
        }
        else if(inventory[index].quantity==prodQuantity){
            inventory.splice(index, 1);
        }
        else{
            console.log(`Not enough ${prodName} available, remaining pieces: ${inventory[index].quantity}`);
            
        }
    }
    else{
        console.log(`${prodName} not found`);
        
    }
    
}

addProduct({name: "FLOUR", quantity: 5});
removeProduct("FLOUR", 2);
console.log(inventory);


