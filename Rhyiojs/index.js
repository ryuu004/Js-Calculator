let value;
let str;
let val1 = 0;
let val2 = 0;
let val3 = 0;
let val4 = 0;
let val5 = 0;
let val6 = 0;

document.getElementById("0").onclick = function(){
    document.getElementById("userinput").innerHTML += "0";
    val1 += "0";
}

document.getElementById("1").onclick = function(){
    document.getElementById("userinput").innerHTML += "1";
    val1 += "1";
}

document.getElementById("2").onclick = function(){
    document.getElementById("userinput").innerHTML += "2";
    val1 += "2";
}

document.getElementById("3").onclick = function(){
    document.getElementById("userinput").innerHTML += "3";
    val1 += "3";
}

document.getElementById("4").onclick = function(){
    document.getElementById("userinput").innerHTML += "4";
    val1 += "4";
}

document.getElementById("5").onclick = function(){
    document.getElementById("userinput").innerHTML += "5";
    val1 += "5";
}

document.getElementById("6").onclick = function(){
    document.getElementById("userinput").innerHTML += "6";
    val1 += "6";
}

document.getElementById("7").onclick = function(){
    document.getElementById("userinput").innerHTML += "7";
    val1 += "7";
}

document.getElementById("8").onclick = function(){
    document.getElementById("userinput").innerHTML += "8";
    val1 += "8";
}

document.getElementById("9").onclick = function(){
    document.getElementById("userinput").innerHTML += "9";
    val1 += "9";
}

// Clear Entry //

document.getElementById("clearentry").onclick = function(){
    document.getElementById("userinput").innerHTML = "";
    val1 = "";
    console.log(val1)
}


//Clear//

document.getElementById("clear").onclick = function(){
    str = document.getElementById("userinput").innerHTML;
    document.getElementById("userinput").innerHTML = str.slice(0, -1);
    val1 = val1.slice(0, -1);
}


//ADDITION//

document.getElementById("add").onclick = function(){
    document.getElementById("userinput").innerHTML = "";

    document.getElementById("0").onclick = function(){
        document.getElementById("userinput").innerHTML += "0";
        val2 += "0";
    }
    
    document.getElementById("1").onclick = function(){
        document.getElementById("userinput").innerHTML += "1";
        val2 += "1";
    }
    
    document.getElementById("2").onclick = function(){
        document.getElementById("userinput").innerHTML += "2";
        val2 += "2";
    }
    
    document.getElementById("3").onclick = function(){
        document.getElementById("userinput").innerHTML += "3";
        val2 += "3";
    }
    
    document.getElementById("4").onclick = function(){
        document.getElementById("userinput").innerHTML += "4";
        val2 += "4";
    }
    
    document.getElementById("5").onclick = function(){
        document.getElementById("userinput").innerHTML += "5";
        val2 += "5";
    }
    
    document.getElementById("6").onclick = function(){
        document.getElementById("userinput").innerHTML += "6";
        val2 += "6";
    }
    
    document.getElementById("7").onclick = function(){
        document.getElementById("userinput").innerHTML += "7";
        val2 += "7";
    }
    
    document.getElementById("8").onclick = function(){
        document.getElementById("userinput").innerHTML += "8";
        val2 += "8";
    }
    
    document.getElementById("9").onclick = function(){
        document.getElementById("userinput").innerHTML += "9";
        val2 += "9";
    }
    document.getElementById("clear").onclick = function(){
        str = document.getElementById("userinput").innerHTML;
        document.getElementById("userinput").innerHTML = str.slice(0, -1);
        val2 = val2.slice(0, -1);
    }
    document.getElementById("clearentry").onclick = function(){
        document.getElementById("userinput").innerHTML = "";
        val2 = "";
    }
    
    document.getElementById("equals").onclick = function(){  
        console.log(val1)
        val1 = Number(val1) + Number(val2);
        console.log(val2)

        document.getElementById("userinput").innerHTML = val1;
        val2 = 0;
        val1 = String(val1);
        val2 = String(val2);

        document.getElementById("clear").onclick = function(){
            str = document.getElementById("userinput").innerHTML;
            document.getElementById("userinput").innerHTML = str.slice(0, -1);
            val1 = val1.slice(0, -1);
        }
       
    }

}

//SUBTRACTION//

document.getElementById("minus").onclick = function(){
    document.getElementById("userinput").innerHTML = "";

    document.getElementById("0").onclick = function(){
        document.getElementById("userinput").innerHTML += "0";
        val3 += "0";
    }
    
    document.getElementById("1").onclick = function(){
        document.getElementById("userinput").innerHTML += "1";
        val3 += "1";
    }
    
    document.getElementById("2").onclick = function(){
        document.getElementById("userinput").innerHTML += "2";
        val3 += "2";
    }
    
    document.getElementById("3").onclick = function(){
        document.getElementById("userinput").innerHTML += "3";
        val3 += "3";
    }
    
    document.getElementById("4").onclick = function(){
        document.getElementById("userinput").innerHTML += "4";
        val3 += "4";
    }
    
    document.getElementById("5").onclick = function(){
        document.getElementById("userinput").innerHTML += "5";
        val3 += "5";
    }
    
    document.getElementById("6").onclick = function(){
        document.getElementById("userinput").innerHTML += "6";
        val3 += "6";
    }
    
    document.getElementById("7").onclick = function(){
        document.getElementById("userinput").innerHTML += "7";
        val3 += "7";
    }
    
    document.getElementById("8").onclick = function(){
        document.getElementById("userinput").innerHTML += "8";
        val3 += "8";
    }
    
    document.getElementById("9").onclick = function(){
        document.getElementById("userinput").innerHTML += "9";
        val3 += "9";
    }
    document.getElementById("clear").onclick = function(){
        str = document.getElementById("userinput").innerHTML;
        document.getElementById("userinput").innerHTML = str.slice(0, -1);
        val3 = val3.slice(0, -1);
    }
    
    document.getElementById("equals").onclick = function(){  
        val1 = Number(val1) - Number(val3);
        document.getElementById("userinput").innerHTML = val1;
        console.log(val1)
        val3 = 0;
        val1 = String(val1);
        val3 = String(val3);

        document.getElementById("clear").onclick = function(){
            str = document.getElementById("userinput").innerHTML;
            document.getElementById("userinput").innerHTML = str.slice(0, -1);
            val1 = val1.slice(0, -1);
            val3 = val2.slice(0, -1);
        }
    }

}

//MULTIPLICATION//

document.getElementById("times").onclick = function(){
    document.getElementById("userinput").innerHTML = "";

    document.getElementById("0").onclick = function(){
        document.getElementById("userinput").innerHTML += "0";
        val4 += "0";
    }
    
    document.getElementById("1").onclick = function(){
        document.getElementById("userinput").innerHTML += "1";
        val4 += "1";
    }
    
    document.getElementById("2").onclick = function(){
        document.getElementById("userinput").innerHTML += "2";
        val4 += "2";
    }
    
    document.getElementById("3").onclick = function(){
        document.getElementById("userinput").innerHTML += "3";
        val4 += "3";
    }
    
    document.getElementById("4").onclick = function(){
        document.getElementById("userinput").innerHTML += "4";
        val4 += "4";
    }
    
    document.getElementById("5").onclick = function(){
        document.getElementById("userinput").innerHTML += "5";
        val4 += "5";
    }
    
    document.getElementById("6").onclick = function(){
        document.getElementById("userinput").innerHTML += "6";
        val4 += "6";
    }
    
    document.getElementById("7").onclick = function(){
        document.getElementById("userinput").innerHTML += "7";
        val4 += "7";
    }
    
    document.getElementById("8").onclick = function(){
        document.getElementById("userinput").innerHTML += "8";
        val4 += "8";
    }
    
    document.getElementById("9").onclick = function(){
        document.getElementById("userinput").innerHTML += "9";
        val4 += "9";
    }
    document.getElementById("clear").onclick = function(){
        str = document.getElementById("userinput").innerHTML;
        document.getElementById("userinput").innerHTML = str.slice(0, -1);
        val4 = val4.slice(0, -1);
    }
    
    document.getElementById("equals").onclick = function(){  
        val1 = Number(val1) * Number(val4);
        document.getElementById("userinput").innerHTML = val1;
        console.log(val1)
        val4 = 0;
        val1 = String(val1);
        val4 = String(val4);

        document.getElementById("clear").onclick = function(){
            str = document.getElementById("userinput").innerHTML;
            document.getElementById("userinput").innerHTML = str.slice(0, -1);
            val1 = val1.slice(0, -1);
            val4 = val2.slice(0, -1);
        }
    }

}

//DIVISION//

document.getElementById("divide").onclick = function(){
    document.getElementById("userinput").innerHTML = "";

    document.getElementById("0").onclick = function(){
        document.getElementById("userinput").innerHTML += "0";
        val5 += "0";
    }
    
    document.getElementById("1").onclick = function(){
        document.getElementById("userinput").innerHTML += "1";
        val5 += "1";
    }
    
    document.getElementById("2").onclick = function(){
        document.getElementById("userinput").innerHTML += "2";
        val5 += "2";
    }
    
    document.getElementById("3").onclick = function(){
        document.getElementById("userinput").innerHTML += "3";
        val5 += "3";
    }
    
    document.getElementById("4").onclick = function(){
        document.getElementById("userinput").innerHTML += "4";
        val5 += "4";
    }
    
    document.getElementById("5").onclick = function(){
        document.getElementById("userinput").innerHTML += "5";
        val5 += "5";
    }
    
    document.getElementById("6").onclick = function(){
        document.getElementById("userinput").innerHTML += "6";
        val5 += "6";
    }
    
    document.getElementById("7").onclick = function(){
        document.getElementById("userinput").innerHTML += "7";
        val5 += "7";
    }
    
    document.getElementById("8").onclick = function(){
        document.getElementById("userinput").innerHTML += "8";
        val5 += "8";
    }
    
    document.getElementById("9").onclick = function(){
        document.getElementById("userinput").innerHTML += "9";
        val5 += "9";
    }
    document.getElementById("clear").onclick = function(){
        str = document.getElementById("userinput").innerHTML;
        document.getElementById("userinput").innerHTML = str.slice(0, -1);
        val5 = val4.slice(0, -1);
    }
    
    document.getElementById("equals").onclick = function(){  
        val1 = Number(val1) / Number(val5);
        document.getElementById("userinput").innerHTML = val1;
        console.log(val1)
        val5 = 0;
        val1 = String(val1);
        val5 = String(val5);

        document.getElementById("clear").onclick = function(){
            str = document.getElementById("userinput").innerHTML;
            document.getElementById("userinput").innerHTML = str.slice(0, -1);
            val1 = val1.slice(0, -1);
            val5 = val2.slice(0, -1);
        }
    }

}

//MODULUS//

document.getElementById("mod").onclick = function () {
    document.getElementById("userinput").innerHTML = "";

    document.getElementById("0").onclick = function () {
        document.getElementById("userinput").innerHTML += "0";
        val6 += "0";
    }

    document.getElementById("1").onclick = function () {
        document.getElementById("userinput").innerHTML += "1";
        val6 += "1";
    }

    document.getElementById("2").onclick = function () {
        document.getElementById("userinput").innerHTML += "2";
        val6 += "2";
    }

    document.getElementById("3").onclick = function () {
        document.getElementById("userinput").innerHTML += "3";
        val6 += "3";
    }

    document.getElementById("4").onclick = function () {
        document.getElementById("userinput").innerHTML += "4";
        val6 += "4";
    }

    document.getElementById("5").onclick = function () {
        document.getElementById("userinput").innerHTML += "5";
        val6 += "5";
    }

    document.getElementById("6").onclick = function () {
        document.getElementById("userinput").innerHTML += "6";
        val6 += "6";
    }

    document.getElementById("7").onclick = function () {
        document.getElementById("userinput").innerHTML += "7";
        val6 += "7";
    }

    document.getElementById("8").onclick = function () {
        document.getElementById("userinput").innerHTML += "8";
        val6 += "8";
    }

    document.getElementById("9").onclick = function () {
        document.getElementById("userinput").innerHTML += "9";
        val6 += "9";
    }
    document.getElementById("clear").onclick = function () {
        str = document.getElementById("userinput").innerHTML;
        document.getElementById("userinput").innerHTML = str.slice(0, -1);
        val6 = val4.slice(0, -1);
    }

    document.getElementById("equals").onclick = function () {
        val1 = Number(val1) % Number(val6);
        document.getElementById("userinput").innerHTML = val1;
        console.log(val1)
        val6 = 0;
        val1 = String(val1);
        val6 = String(val6);

        document.getElementById("clear").onclick = function () {
            str = document.getElementById("userinput").innerHTML;
            document.getElementById("userinput").innerHTML = str.slice(0, -1);
            val1 = val1.slice(0, -1);
            val6 = val2.slice(0, -1);
        }
    }

}
