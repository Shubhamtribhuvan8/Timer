

    document.getElementById("js-start").style.cursor = "grab";
    document.getElementById("js-stop").style.cursor = "grab";
    var id=0;
    var i=0;
 function counter(){
    var ele=document.getElementById("js-timer");
    id=setInterval(function(){
        // if(i==0){
        //     clearInterval(id);
        // }
        ele.innerText=i;
        i++;
    },1000);
 }
 function stopcounter(){
    clearInterval(id);
 }