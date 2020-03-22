//simple calculator made with html and js
//author : João Vitor Sinedino

//Dom Elements definitions
let btn0 = document.getElementById('btn0');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');
let btn6 = document.getElementById('btn6');
let btn7 = document.getElementById('btn7');
let btn8 = document.getElementById('btn8');
let btn9 = document.getElementById('btn9');
let btnplus = document.getElementById('btn+');
let btnequal = document.getElementById('btn=');
let btnsub = document.getElementById('btn-');
let btnMulti = document.getElementById('btnx');
let btnDiv = document.getElementById('btn/');
let text = document.getElementById("textShow");
alert("One operation at time !!")

//DOM manipulation;
btn0.addEventListener("click", myClick);
btn1.addEventListener("click", myClick);
btn2.addEventListener("click", myClick);
btn3.addEventListener("click", myClick);
btn4.addEventListener("click", myClick);
btn5.addEventListener("click", myClick);
btn6.addEventListener("click", myClick);
btn7.addEventListener("click", myClick);
btn8.addEventListener("click", myClick);
btn9.addEventListener("click", myClick);
btnplus.addEventListener("click", mySum);
btnsub.addEventListener("click", mySub);
btnMulti.addEventListener("click", myMulti);
btnDiv.addEventListener("click", myDiv);


//sum function
function mySum() {
    var result = false;
    var sum;
    var arr = [];
    var res = 0;
    //while for function running
    while (result != true) {
        //plus sign append
        text.value += "+";
        //check for result
        document.getElementById('btn=').onclick = function () {
            //creating a array of values for latter parsing
            sum = text.value.split('+');
            //parsing onf values
            for (i = 0; i < sum.length; i++){
                arr[i] = sum[i];
                arr[i] = parseInt(arr[i]);
            }
            //array that will store the final result and sum
            for (j = 0; j < arr.length; j++){
                res += arr[j];
            }
            text.value = res.toString();
        }
        result = true;
    }
    
}

//multiplications function//

function myMulti() {
    var result = false;
    var sum;
    var arr = [];
    var res = 1;
    //while for function running
    while (result != true) {
        //plus sign append
        text.value += "x";
        //check for result
        document.getElementById('btn=').onclick = function () {
            //creating a array of values for latter parsing
            sum = text.value.split('x');
            //parsing onf values
            for (i = 0; i < sum.length; i++){
                arr[i] = sum[i];
                arr[i] = parseInt(arr[i]);
            }
            //array that will store the final result and sum
            for (j = 0; j < arr.length; j++){
                res = res * arr[j];
            }
            text.value = res.toString();
        }
        result = true;
    }
    
}

//division function

function myDiv() {
    var result = false;
    var sum;
    var arr = [];
    var res = 1;
    var count = 0;
    //while for function running
    while (result != true) {
        //plus sign append
        text.value += "/";
        //check for result
        document.getElementById('btn=').onclick = function () {
            //creating a array of values for latter parsing
            sum = text.value.split('/');
            //parsing onf values
            for (i = 0; i < sum.length; i++){
                arr[i] = sum[i];
                arr[i] = parseInt(arr[i]);
            }
            //array that will store the final result and sum
            for (j = 0; j < arr.length; j++){
                if (res != 1 || count != 0) {
                    res = res / arr[j];
                }
                else {
                    res = res * arr[j];
                    count++;
                }  
            }
            text.value = res.toString();
        }
        result = true;
    }
    
}

//subtraction function
function mySub() {
    var result = false;
    var sum;
    var arr = [];
    var res = 0;
    //while for function running
    while (result != true) {
        //plus sign append
        text.value += "-";
        //check for result
        document.getElementById('btn=').onclick = function () {
            //creating a array of values for latter parsing
            sum = text.value.split('-');
            //parsing of values
            for (i = 0; i < sum.length; i++){
                arr[i] = sum[i];
                if (i == 0) {
                    arr[i] = parseInt(arr[i]);
                }
                else {
                    arr[i] = -(parseInt(arr[i]));
                }
                
            }
            //array that will store the final result and sum
            for (j = 0; j < arr.length; j++){
                res += arr[j];
            }
            text.value = res.toString();
        }
        result = true;
    }
    
}
//function for general number input;
function myClick(e) {
    text.value += e.target.innerHTML;
}



