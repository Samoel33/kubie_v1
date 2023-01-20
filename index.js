const nav_links = document.querySelectorAll('.nav-links li');
const burgerButton = document.querySelector('.burger');
const navlinkContainer = document.querySelector('.nav-links');
const content = document.querySelector('.content');
burgerButton.addEventListener('click',()=>{
    burgerButton.classList.toggle('active');
    navlinkContainer.classList.toggle('nav-links-active');
    content.classList.toggle('content-opacity');
    nav_links.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=''
        }else{
            link.style.animation = `navlinksFades 0.8s ease forwards ${index/7 + 0.3}s`;
    }
    })
})

