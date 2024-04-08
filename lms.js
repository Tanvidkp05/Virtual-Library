var p=document.getElementById("exampleInputPassword1").inputMode;
document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    if(p==="qwerty"){
        window.location.assign("/lms");
    }
});