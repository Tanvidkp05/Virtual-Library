var btnlen=document.querySelectorAll(".tbtn").length;
var count=0;
const counter = document.getElementById("counter");
const counter1 = document.getElementById("counter1");
for(var i=0;i<btnlen; i++){
document.querySelectorAll(".tbtn")[i].addEventListener("click", function(){
    if(count<=4){
        // if(document.querySelectorAll(".numBooks")[i].innerHTML>0)
        {
            var a=document.querySelectorAll(".numBooks")[i+1].innerHTML;
            const s=document.querySelectorAll(".numBooks")[i+1];
            s.textContent=a-1;
            count++;
            counter.textContent = count;
            counter1.textContent=count;
        }
        // else
        {
            // alert("hello");                                                             
        }
    }
          else{
              alert("You Cant choose More than 5 books!!");
          }
});
}