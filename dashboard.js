let count=0;
const button1 = document.getElementById("bt1");
    const button2 = document.getElementById("bt2");
    const button4 = document.getElementById("bt4");
    const button3 = document.getElementById("bt3");
    const button5 = document.getElementById("bt5");
    const counter = document.getElementById("counter");
    const counter1 = document.getElementById("counter1");

    function incrementCount() {
        if(count<=4){
      count++;
      counter.textContent = count;
      counter1.textContent=count;
        }
        else{
            alert("You Cant choose More than 5 books!!");
        }
    }

    bt1.addEventListener("click", incrementCount);
    bt2.addEventListener("click", incrementCount);
    bt3.addEventListener("click", incrementCount);
    bt4.addEventListener("click", incrementCount);
    bt5.addEventListener("click", incrementCount);

    const b1 = document.getElementById("btt1");
    const b2 = document.getElementById("btt2");
    const b4 = document.getElementById("btt4");
    const b3 = document.getElementById("btt3");
    const b5 = document.getElementById("btt5");

    btt1.addEventListener("click", decrementCount);
    btt2.addEventListener("click", decrementCount);
    btt3.addEventListener("click", decrementCount);
    btt4.addEventListener("click", decrementCount);
    btt5.addEventListener("click", decrementCount);

    function decrementCount()
    {
        if(count>0)
        {
            count--;
            counter.textContent = count;
            counter1.textContent=count;
        }
        else{
            alert("No books left.");
        }
    }
    