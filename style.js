
var date=new Date();


function renderfun(){
   
document.getElementById("fulldate").innerHTML=date.toLocaleString();

var months=['Janaury','February','March','April','May','June','July','August','September','October','November','December'];
document.getElementById("mth").innerHTML=months[date.getMonth()];


var today=new Date().getDate();
console.log(today);

var day=date.getDay();

console.log(date.getDay());// return prev days
var nodays="";

var predate=new Date(date.getFullYear(),date.getMonth(),0).getDate();

for(x=day;x>1;x--){

    
    nodays=nodays+"<div class='prevdate'>"+(predate-x+1)+"</div>";
}

var enddate=new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
console.log(enddate);


for(i=1;i<=enddate;i++){
    if(i==today){
        nodays=nodays+"<div class='today'>"+i+"</div>";


    }
    else{
        nodays=nodays+"<div>"+i+"</div>";

    }
    
  
     
    
}
document.getElementsByClassName("days")[0].innerHTML=nodays;

}


function goto(a){
    if(a=="prev"){
        date.setMonth(date.getMonth()-1);
        renderfun();

    }
    else if(a=="next"){
        date.setMonth(date.getMonth()+1);
    }
    renderfun();
}


