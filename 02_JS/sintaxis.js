function contadorespacios(obj){
    var max_espacios=299;
    var strlength=obj.value.length

    if(strlength > max_espacios){
        document.getElementById("contadorch").innerHTML = "sin espacios restantes";
    }
    else{
        document.getElementById("contadorch").innerHTML = strlength + "/300";
    }    
}