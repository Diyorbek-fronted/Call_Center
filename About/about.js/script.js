document.addEventListener("DOMContentLoaded", ()=>{
    // start heder 
    const headerMein = document.querySelector(".header");
    window.addEventListener("scroll", ()=>{
        headerMein.classList.toggle("hederActive", window.scrollY>0);
    })
});