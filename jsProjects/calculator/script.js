const numbersAndDots = document.querySelectorAll('.numbers div:not(#equal, #clear)');
const operators = document.querySelectorAll('.operators div');

const equal = document.getElementById('equal');
const clear = document.getElementById('clear');

const header = document.querySelector('.header');


clear.addEventListener('click', ()=>{
    header.innerHTML = '';
});

numbersAndDots.forEach((ele) =>{
    ele.addEventListener('click', ()=>{
        header.innerHTML = header.innerHTML + `${ele.textContent}`;
    });
})

operators.forEach((ele)=>{
    ele.addEventListener('click', ()=>{
        let text = header.innerHTML
        if( text == "" || text[text.length-1] == '.' ){
            return;
        }else if( isNaN(text[text.length-1])){
            text = text.slice(0, text.length-1)+`${ele.textContent}`;
        }else{
            text = text.slice(0, text.length)+`${ele.textContent}`;
        }
        header.innerHTML = text;
    });
});

equal.addEventListener('click', ()=>{
    let experssion = header.innerHTML;
    if(experssion == ''){
        return;
   }

   let numbers = experssion.split(/[+\-x÷]/g);
   let operators = experssion.replace(/[0-9]|\./g, "").split("");
   
   numbers = numbers.map((ele) => {
    return Number(ele);
   })
   
   let division = operators.indexOf('÷');
   while(division != -1){
        numbers.splice(division, 2, numbers[division]/numbers[division+1]);
        operators.splice(division, 1);
        division = operators.indexOf('÷');
   }

    
   let multiply = operators.indexOf('x');
   while(multiply != -1){
        numbers.splice(multiply, 2, numbers[multiply]*numbers[multiply+1]);
        operators.splice(multiply, 1);
        multiply = operators.indexOf('x');
   }


   let addition = operators.indexOf('+');
   while(addition != -1){
        numbers.splice(addition, 2, numbers[addition]+numbers[addition+1]);
        operators.splice(addition, 1);
        addition = operators.indexOf('+');
   }

   let subtraction = operators.indexOf('-');
   while(subtraction != -1){
        numbers.splice(subtraction, 2, numbers[subtraction]-numbers[subtraction+1]);
        operators.splice(subtraction, 1);
        subtraction = operators.indexOf('-');
   }

   header.innerHTML = numbers[0];
   

})