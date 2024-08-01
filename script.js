document.querySelector("#btnSumar").addEventListener("click",SumarUno);
document.querySelector("#btnResta").addEventListener("click",RestarUno);

document.querySelector("#btnSumar1").addEventListener("click",SumarDos);
document.querySelector("#btnRestaEmerson").addEventListener("click",RestaDos);



let ContadorJosue =0;
let ContadorEmerson =0;


function SumarUno(){
  ContadorJosue = ContadorJosue+1;
  document.querySelector("#msgContador").innerHTML=ContadorJosue
  
}

function RestarUno(){
	ContadorJosue = ContadorJosue-1;
    document.querySelector("#msgContador").innerHTML=ContadorJosue
}





function SumarDos(){
  ContadorEmerson = ContadorEmerson+1;
  document.querySelector("#msgContador1").innerHTML=ContadorEmerson
  
}

function RestaDos(){
	ContadorEmerson = ContadorEmerson-1;
    document.querySelector("#msgContador1").innerHTML=ContadorEmerson
}