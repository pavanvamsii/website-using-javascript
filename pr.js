// burger

let menu=document.querySelector(".menu");
let rmenu=document.querySelector(".rmenu");
let burger=document.querySelector(".burger");

burger.addEventListener('click',()=>{
    rmenu.classList.toggle("active");
    burger.classList.toggle("toggle")
})


// sec2

let faq=document.querySelectorAll(".faq");

faq.forEach((faq) =>{
    faq.addEventListener('click',() =>{
        faq.classList.toggle('active')
    })
})


// sec3

let rm=document.querySelector('.rm');
let rmp=document.querySelector('.rmp');

rm.addEventListener('click',()=>{
    rmp.classList.toggle("rmp-active");
    rm.classList.toggle('rm-active')
})