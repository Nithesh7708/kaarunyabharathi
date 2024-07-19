let menu_btn=document.querySelector('.nav_container .right .menu_icon');
let close_btn=document.querySelector('.nav_container .right .menu_close');
menu_btn.addEventListener("click",()=>{
    document.body.classList.add('scroll')
    document.getElementById("menubar").classList.add("open")
})
close_btn.addEventListener('click',()=>{
    document.body.classList.remove('scroll')
    document.getElementById("menubar").classList.remove("open")
})

// -------Class menu CLose functionallt--------

document.getElementById('our_class').addEventListener('click',()=>{
    document.body.classList.remove('scroll')
    document.getElementById("menubar").classList.remove("open")  
})

