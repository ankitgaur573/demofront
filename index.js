// function action(value){
//     let number1;
//     let number2;

//     if(typeof value == 'number'){
//         if(number1){

//         }else{
//             number1 = number1.toString()
//             alert(number1);
//         }
//     }else{

//     }
// }

var number1;
var number2;
var answer;
var operation;
$('.c').click(function(){
    number1 = number2 = operation = answer = undefined;
    document.getElementById("display").value = ""
});

$('.b').click(function(){
    let value = $(this).text();

    // alert(typeof value);
    let parsedval = parseInt(value);
    if(answer || answer === 0) number1 = answer.toString();
    answer = undefined;
    if(!isNaN(parsedval) || value == '.'){
        if(operation){
            if(number2){
                number2 = number2+value;
            }else{
                number2 = value;
            }
            
        }else{
            if(number1){
                number1 = number1+value;
            }else{
                number1 = value;
            }
        }
    }else{
        if(operation){
            if(value == "="){
                answer = calculate(number1, number2, operation);
                // answer = toString
                number1 = undefined;
                number2 = undefined;
                operation = undefined;
            }else{
                alert("Operation allready there")
            }
        
        }else{
            if(value == "="){
                alert("Not valid");
            }else{
                if(number1){
                    operation = value;
                }else{
                    alert("Enter number first")
                }
            }
        }
    }


    let display = number1;
    if(operation){
        display = display+operation
        if(number2){
            display = display+number2
        }
    }

    
    if(answer) display=answer;
    if(answer === 0) display = '0';
    if(display)
     document.getElementById("display").value = display
    console.log(number1, operation, number2)

})

function calculate(number1, number2, operation){
    console.log(number1, number2, operation)
     number1 = parseFloat(number1);
     number2 = parseFloat(number2);
     let answer;
    if(operation == "+"){
        answer = number1+number2;
    }
    else if(operation == "-"){
        answer= number1-number2;
    }else if (operation == "*"){
       answer = number1*number2;
    }else if(operation == "/"){
        answer = number1/number2;
        
    }
    // console.log(answer)
    return answer
}