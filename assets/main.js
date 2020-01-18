var userinput={
    length: 0, 
    special: false,
    numeric: false,
    upper: false,
    lower: false,

}
function generatePassword(){
    userinput.special=document.getElementById("special").checked;
    userinput.numeric=document.getElementById("numeric").checked;
    userinput.upper=document.getElementById("uppercase").checked;
    userinput.lower=document.getElementById("lowercase").checked;
    userinput.length=Number(document.getElementById("password-length").value);
    if (userinput.length>= 8 && userinput.length<= 128) {
        var characters="";
        if(userinput.special) {
            characters+="!@#$";
        }
        if(userinput.numeric){
            characters+="1234567890";
        }
        if(userinput.upper){
            characters+="QWERTYUIOPASDFGHJKLZXCVBNM";
        }
        if(userinput.lower){
            characters+="qwertyuiopasdfghjklzxcvbnm";
        }
        if(characters.length>0){
            var password="";
            for(var i=0; i<userinput.length; i++){
                var index=Math.floor(Math.random()*characters.length);
                password+=characters.charAt(index);
            }
            document.getElementById("passarea").innerHTML=password;
        }
        else{ 
            alert("Select One of The Check Boxes")
        }

    }
    else {
        alert("Length must be between 8-128 Characters long")
    }

}