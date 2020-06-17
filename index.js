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
var operation;
$('.b').click(function(){
    let value = $(this).text();

    // alert(typeof value);
    let parsedval = parseInt(value);
    if(!isNaN(parsedval)){
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
                calculate(number1, number2, operation);
            }else{
                alert("Operation allready there")
            }
        
        }else{
            if(number1){
                operation = value;
            }else{
                alert("Enter number first")
            }
        }
    }

    // let display = number1+
    document.getElementById("display").value = 
    console.log(number1, operation, number2)

})

function calculate(number1, number2, operation){
    console.log("hh")
     number1 = parseInt(number1);
     number2 = parseInt(number2);
    if(operation == "+"){
        alert(number1+number2)
    }
    else if(operation == "-"){
        alert(number1-number2);
    }else if (operation == "*"){
        alert(number1*number2);
    }else if(operation == "/"){
        alert(number1/number2);
    }
}