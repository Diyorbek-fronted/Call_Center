document.addEventListener("DOMContentLoaded", ()=>{
    // start heder 
    const headerMein = document.querySelector(".header");
    window.addEventListener("scroll", ()=>{
        headerMein.classList.toggle("hederActive", window.scrollY>0);
    })
    
    // start namber 
    const number1 = document.querySelector(".number");
    const number2 = document.querySelector(".number2");
    const number3 = document.querySelector(".number3");
    const number4 = document.querySelector(".number4");
    let s = 0;
    let n = 0;
    // num1
    let inter = setInterval(setNamber, 0.1);
    function setNamber(){
        s++;
        number1.innerHTML= s;
        if(s==1286){
            clearInterval(inter)
        }
    }
    // num2
    let inter1 = setInterval(setNamber2, 0.1);
    function setNamber2(){
        n++;
        number2.innerHTML= n;
        if(n==30076){
            clearInterval(inter1)
        }
    }
    //num3
    let inter2 = setInterval(setNamber3, 0.1);
    function setNamber3(){
        n++;
        number3.innerHTML= n;
        if(n==16076){
            clearInterval(inter2)
        }
    }
    // num4
    let inter3 = setInterval(setNamber4, 0.1);
    function setNamber4(){
        n++;
        number4.innerHTML= n;
        if(n==10630){
            clearInterval(inter3)
        }
    }
    // search
    const search_icon = document.querySelector(".search_icon");
    const xmark = document.querySelector(".xmark");
    const search = document.querySelector(".search");
    search_icon.addEventListener("click", () =>{
        search.style.display = "flex";
    })
    xmark.addEventListener("click", ()=>{
        search.style.display = "none";
    })


    // ------
    const meinu_list = document.querySelector(".menu-list");
    const burger = document.querySelector(".burger");

    burger.addEventListener("click", ()=>{
        meinu_list.classList.toggle("activeTop");
    })
});