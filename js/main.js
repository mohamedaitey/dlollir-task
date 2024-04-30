function validate(){
    var pen = document.getElementById("input").value;
    var result = document.getElementById("result");
    if(isNaN(pen)){
        result.innerHTML = "Enter Number Not Text";
        return false;        
    }else if (pen<0){
        result.innerHTML = "Enter Postive Number";
        return false;
    }else if (pen==0){
        result.innerHTML = "Enter Number Rather Than 0";
        return false;
    }else{
        result.innerHTML = pen *50 +"Epyption Pound";
        return false;
    }
    

}





    function bitwenw() {
        var capmet = document.getElementById("mohamed").value;
        var pxslzz = document.getElementById("pxslzz");
        if (isNaN(capmet)) {
            pxslzz.innerHTML = "Enter Number Not Text";
            return false;
        } else if (capmet < 0) {
            pxslzz.innerHTML = "Enter Postive Number";
            return false;
        } else if (capmet == 0) {
            pxslzz.innerHTML = "Enter Number Rather Than 0";
            return false;
        } else {
            pxslzz.innerHTML = capmet * 33 + "Epyption Pound";
            return false;
        }
    }


