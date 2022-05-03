const textarea = document.getElementById('displayAcc');

const btn = document.getElementById('btn'); 


// ✅ Append text on button click
btn.addEventListener('click', function handleClick() {

    const accountName = document.getElementById("accName").value;
    const depositAmount = document.getElementById("depositAmount").value; 
    
    const b= new bankAccount(accountName,depositAmount);    
     b.createAccount();
     b.displayAccount();
  });


  class bankAccount{
      #accountName;
      #depositAmount;  
      accountInfoList = [];

      constructor(accountName,depositAmount){
          this.accountName = accountName;
          this.depositAmount = depositAmount;
      }
        createAccount(){
        this.accountInfoList.push("Account Name : " + this.accountName+ ' ' +  "Balance : " + this.depositAmount);
        }
      displayAccount(){ 
          for(let i=0; i< this.accountInfoList.length; i++){
            textarea.value += this.accountInfoList[i] + '\r\n';
          }      
      
      }
  }