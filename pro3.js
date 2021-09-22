let id=0;
let down=document.getElementById("down");
let down1=document.getElementById('down1');
let down2=document.getElementById('down2');
let down3=document.getElementById('down3');
let down4=document.getElementById('down4');
//input
let monthlyPayment=document.getElementById('input1');
let interestRate=document.getElementById('input2');
let monthlyIncome=document.getElementById('input3');
let years=document.getElementById('input4');

function result(){
    id++;
    if(monthlyPayment.value==""||monthlyPayment.value=='!'||monthlyPayment.value=='@'||monthlyPayment.value=='#'
    ||monthlyPayment.value=='$'||monthlyPayment.value=='%'||monthlyPayment.value=='^'||monthlyPayment.value=='&'
    ||monthlyPayment.value=='*'||monthlyPayment.value=='('||monthlyPayment.value==')'||monthlyPayment.value=='-'
    ||monthlyPayment.value=='+'||monthlyPayment.value=='='||monthlyPayment.value=="|"||monthlyPayment.value=='~'
    ||monthlyPayment.value=='`'||isNaN(monthlyPayment.value)){
    alert("The amount of the loan isn't correct");
    id--}

    else if(interestRate.value==""||interestRate.value=='!'||interestRate.value=='@'||interestRate.value=='#'
    ||interestRate.value=='$'||interestRate.value=='%'||interestRate.value=='^'||interestRate.value=='&'
    ||interestRate.value=='*'||interestRate.value=='('||interestRate.value==')'||interestRate.value=='-'
    ||interestRate.value=='+'||interestRate.value=='='||interestRate.value=="|"||interestRate.value=='~'
    ||interestRate.value=='`'||isNaN(interestRate.value)){
    alert("Interest Rate isn't correct");
    id--}



    else if(monthlyIncome.value==""||monthlyIncome.value=='!'||monthlyIncome.value=='@'||monthlyIncome.value=='#'
    ||monthlyIncome.value=='$'||monthlyIncome.value=='%'||monthlyIncome.value=='^'||monthlyIncome.value=='&'
    ||monthlyIncome.value=='*'||monthlyIncome.value=='('||monthlyIncome.value==')'||monthlyIncome.value=='-'
    ||monthlyIncome.value=='+'||monthlyIncome.value=='='||monthlyIncome.value=="|"||monthlyIncome.value=='~'
    ||monthlyIncome.value=='`'||isNaN(monthlyIncome.value)){
    alert("Monthly Income isn't correct");
    id--}

    else if(years.value==""||years.value=='!'||years.value=='@'||years.value=='#'
    ||years.value=='$'||years.value=='%'||years.value=='^'||years.value=='&'
    ||years.value=='*'||years.value=='('||years.value==')'||years.value=='-'
    ||years.value=='+'||years.value=='='||years.value=="|"||years.value=='~'
    ||years.value=='`'||isNaN(years.value)){
    alert("Number of years isn't correct");
    id--}

    else if(id>=2)
    { 
    alert("You must refresh the page to change the values")}
    else{
        
    //create span and h3 element for down1
    let newspan1 =document.createElement('span');
    newspan1.setAttribute('class','input-group-text');
    let newtext1=document.createTextNode('Monthly Payment');
    newspan1.appendChild(newtext1);
    down1.appendChild(newspan1);
    let newh1=document.createElement('input');
    newh1.setAttribute('id','month');
    newh1.setAttribute('type','text');
    newh1.setAttribute('disabled','true');
    newh1.setAttribute('class','form-control');
    newh1.setAttribute('value',monthly(monthlyPayment.value,(interestRate.value/100),years.value))
    down1.appendChild(newh1);


//create span and h3 element for down2
let newspan2 =document.createElement('span');
newspan2.setAttribute('class','input-group-text');
let newtext2=document.createTextNode('Total Payment');
newspan2.appendChild(newtext2);
down2.appendChild(newspan2);
let newh2=document.createElement('input');
newh2.setAttribute('id','total');
newh2.setAttribute('type','text');
newh2.setAttribute('disabled','true');
newh2.setAttribute('class','form-control');
newh2.setAttribute('value',totalPayment(monthlyPayment.value,totalInterest(monthlyPayment.value,(interestRate.value/100),years.value)))
down2.appendChild(newh2);


//create span and h3 element for down3
let newspan3 =document.createElement('span');
newspan3.setAttribute('class','input-group-text');
let newtext3=document.createTextNode('Total Interest');
newspan3.appendChild(newtext3);
down3.appendChild(newspan3);
let newh3=document.createElement('input');
newh3.setAttribute('id','interest');
newh3.setAttribute('type','text');
newh3.setAttribute('disabled','true');
newh3.setAttribute('class','form-control');
newh3.setAttribute('value',totalInterest(monthlyPayment.value,(interestRate.value/100),years.value))
down3.appendChild(newh3);


//create span and h3 element for down4
let newspan4 =document.createElement('span');
newspan4.setAttribute('class','input-group-text');
let newtext4=document.createTextNode(' Can You Afford It??');
newspan4.appendChild(newtext4);
down4.appendChild(newspan4);
let newh4=document.createElement('input');
newh4.setAttribute('id','afford');
newh4.setAttribute('type','text');
newh4.setAttribute('disabled','true');
newh4.setAttribute('class','form-control');
newh4.setAttribute('value',canPay(monthlyIncome.value,monthly(monthlyPayment.value,(interestRate.value/100),years.value)))
down4.appendChild(newh4);


}
}


function monthly(v1,v2,v3){
v1=v1/(12*v3);
    v2=v2*v1;
    v1=v1+v2
    return v1;
}


function totalPayment(v1,v2){
   return Number(v1)+Number(v2);
}


function totalInterest(v1,v2,v3){
    v1=v1/(12*v3);
    v2=v2*v1;
    v2=v2*(12*v3);
    return v2
}


function canPay(v1,v2){
    if(v2>v1)
    return "No You Cant't";
    else 
    return"Yes YOu Can";
}