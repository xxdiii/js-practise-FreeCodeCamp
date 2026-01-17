 const form=document.getElementById('form');
function validateForm() {
    
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value;
    const orderNo = document.getElementById('order-no').value;
    const productCode = document.getElementById('product-code').value;
    const quantity = Number(document.getElementById('quantity').value);
   

    const complaintsChecked = document.querySelectorAll('#complaints-group input[name="complaint"]:checked');
    const isOtherComplaintChecked = document.getElementById('other-complaint').checked;
    const complaintDesc = document.getElementById('complaint-description').value.trim();

    const solutionsChecked = document.querySelector('input[name="solutions"]:checked');
    const isOtherSolutionChecked = document.getElementById('other-solution').checked;
    const solutionDesc = document.getElementById('solution-description').value.trim();

   
    return {
        "full-name": fullName !== "",
        "email": /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        "order-no": /^2024\d{6}$/.test(orderNo),
        "product-code": /^[a-z]{2}\d{2}-[a-z]\d{3}-[a-z]{2}\d$/i.test(productCode),
        "quantity": quantity > 0 && Number.isInteger(quantity),
        "complaints-group": complaintsChecked.length > 0,
        "complaint-description": !isOtherComplaintChecked || complaintDesc.length >= 20,
        "solutions-group": solutionsChecked !== null,
        "solution-description": !isOtherSolutionChecked || solutionDesc.length >= 20
    };
}

function isValid(obj){
    return Object.values(obj).every(item=> item===true);
}

form.addEventListener("change",(event)=>{
    const result=validateForm();
    const target=event.target;
    let validationKey;
    let elementToColor;

    if(target.name=="complaint"){
        validationKey="complaints-group"
        elementToColor=document.getElementById("complaints-group");
    }else if(target.name=="solutions"){
        validationKey="solutions-group"
        elementToColor=document.getElementById("solutions-group");
    }else{
        validationKey=target.id;
        elementToColor=target;
    }
    
    if(result[validationKey]){
        elementToColor.style.borderColor="green";
    }else{
        elementToColor.style.borderColor="red";
    }
})

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const result=validateForm();

    if(isValid(result)){
        console.log("Form submitted successfully");
    }else{
        for(const key in result){
            const isFiledVaild=result[key];
            const element=document.getElementById(key);

            if(element){
                if(isFiledVaild){
                    element.style.borderColor="green";
                }else{
                    element.style.borderColor="red";
                }
            }
        }
    }
})


