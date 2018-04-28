window.onload = function (){
    const nomDiv = div => document.getElementById(div);

//Funcion que realiza el proceso

const opera = (opcion) => {    
    let num1 = nomDiv("num1").value;
    let num2 = nomDiv("num2").value;
    let dem1 = nomDiv("dem1").value;
    let dem2 = nomDiv("dem2").value;
    let simbolo = nomDiv("simbolo").value; 
    let num3 = nomDiv("num3").value;
    let dem3 = nomDiv("dem3").value;

    if(num1.length === 0 || num2.length === 0 || dem1.length === 0 || dem2.length ===0 ){
        this.alert("Es necesario completar todos los campos");

        if(num1.length === 0){
            nomDiv("num1").focus();
        }else if(num2.length === 0){
            nomDiv("num2").focus();
        }else if(dem1.length === 0){
            nomDiv("dem1").focus();
        }else{
            nomDiv("dem2").focus();
        }
    }else{
        if(opcion==1){
            console.log("aqui suma");
            nomDiv("simbolo").innerHTML = "+" ;

            if(dem1 == dem2){
                num3 = num1 + num2 ;
                dem3 = dem1;
            }else{
                dem3= dem1*dem2;
                num3= (num1*dem2)+(dem1*num2);
            }      

        }else if(opcion==2){
            console.log("aqui resta");
            nomDiv("simbolo").innerHTML = "-" ;

            if(dem1 == dem2){
                num3 = num1 - num2 ;
                dem3 = dem1;
            }else{
                dem3= dem1*dem2;
                num3= (num1*dem2)-(dem1*num2);
            }

        }else if(opcion==3){
            console.log("aqui multiplica");
            nomDiv("simbolo").innerHTML = "*" ;
            num3 = num1 * num2 ;
            dem3 = dem1 * dem2 ;

        }else if(opcion==4){
            console.log("aqui divide");
            nomDiv("simbolo").innerHTML = "/" ;
            num3 =   num1 * dem2 ;
            dem3 = dem1 * num2 ;
        }else{
            if(num3== 0){
                this.alert("Es necesario realizar una operacion para simplificar el resultado");
            }else{
                console.log("se puede simplificar")
                let divisor = simplificar(num3 , dem3); 
                num3 = num3 / divisor ;
                dem3 = dem3 / divisor ;              
            }
        }
    }
    nomDiv("num3").innerHTML = num3;
    nomDiv("dem3").innerHTML = dem3;
}

const simplificar = (a, b) => {
    while(b !== 0){
        let temp = b ;
        b = a % b ;
        a = temp;
    }
    return a;
}

nomDiv("suma").addEventListener("click",event => {
    opera(1);
});
nomDiv("resta").addEventListener("click",event => {
    opera(2);
});
nomDiv("multiplicacion").addEventListener("click",event => {
    opera(3);
});
nomDiv("division").addEventListener("click",event => {
    opera(4);
});

nomDiv("simplificar").addEventListener("click", event =>{
    opera(5);
})
};