class BankAccount{
    constructor(){
        this.balance=0;
        this.transactions=[];
    }

    deposit(depo_amt){
        if(depo_amt>0){
            this.transactions.push({type: "deposit", amount: depo_amt});
            this.balance+=depo_amt;
            return `Successfully deposited $${depo_amt}. New balance: $${this.balance}`;
        }else{
            return `Deposit amount must be greater than zero.`;
        }
    }

    withdraw(with_amt){
        if(with_amt>0 && with_amt<=this.balance){
            this.transactions.push({type: "withdraw", amount: with_amt});
            this.balance-=with_amt;
            return `Successfully withdrew $${with_amt}. New balance: $${this.balance}`;
        }else if(with_amt<=0 || with_amt>this.balance){
            return "Insufficient balance or invalid amount.";
        }
    }

    checkBalance(){
        return `Current balance: $${this.balance}`;
    }

    listAllDeposits(){
        let amt=[];
        this.transactions.filter(e=>e.type=="deposit").forEach(item=>{
            amt.push(item.amount);
        })
        let amt_str=amt.join(",");
        return `Deposits: ${amt_str}`
    }

    listAllWithdrawals(){
        let amt=[];
        this.transactions.filter(e=>e.type=="withdraw").forEach(item=>{
            amt.push(item.amount);
        })
        let amt_str=amt.join(",");
        return `Withdrawals: ${amt_str}`
    }
}

const myAccount=new BankAccount();
console.log(myAccount.deposit(100));
console.log(myAccount.deposit(400));
console.log(myAccount.withdraw(120));
console.log(myAccount.withdraw(200));
console.log(myAccount.deposit(150));
console.log(myAccount.listAllDeposits());







