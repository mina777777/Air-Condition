const head= document.getElementById('head');
window.onscroll = function() {
    if(this.scrollY >= 200) {
        head.classList.add("scroll");
    }else {
        head.classList.remove("scroll")
    }
}
let linkOne = document.getElementById("linkOne");
let linkTwo = document.getElementById("linkTwo");
let linkThree = document.getElementById("linkThree");
let linkFour = document.getElementById("linkFour");
const menu = document.getElementById("menu");
const menu2 = document.getElementById("menu2");
let links = document.getElementById('links');
const home = document.getElementById('home');
const body = document.querySelector('body');
const about = document.getElementById("about");
const img = document.getElementById("gallary");
const contact = document.getElementById("contact");
function showLinks(){
    links.style.cssText = "display:block;"
    links.setAttribute("id","shown");
    body.style.cssText = "height:100vh;"
    about.style.cssText = "display:none";
    home.style.cssText = "display:none";
    menu.style.cssText = "display:none";
    menu2.style.cssText = "display:flex;"
    img.style.cssText = "display:none";
    contact.style.cssText = "display:none";
    linkOne.addEventListener('click',function(){
        links.style.cssText = "display:none"
        home.style.cssText = "display:flex";
        menu.style.cssText = "display:flex";
        menu2.style.cssText = "display:none;"
        about.style.cssText = "display:flex ";
        img.style.cssText = "display: initial;";
        contact.style.cssText = "display: initial;";
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    })
    linkTwo.addEventListener('click',function(){
        links.style.cssText = "display:none"
        home.style.cssText = "display:flex";
        menu.style.cssText = "display:flex";
        menu2.style.cssText = "display:none;"
        about.style.cssText = "display:flex ";
        img.style.cssText = "display: initial;";
        contact.style.cssText = "display: initial;";
        window.scrollTo({
            top:530,
            behavior:"smooth"
        })
    })
    linkThree.addEventListener('click',function(){
        links.style.cssText = "display:none"
        home.style.cssText = "display:flex";
        menu.style.cssText = "display:flex";
        menu2.style.cssText = "display:none;"
        about.style.cssText = "display:flex ";
        img.style.cssText = "display: initial;";
        contact.style.cssText = "display: initial;";
        window.scrollTo({
            top:1296,
            behavior:"smooth"
        })
    })
    linkFour.addEventListener('click',function(){
        links.style.cssText = "display:none"
        home.style.cssText = "display:flex";
        menu.style.cssText = "display:flex";
        menu2.style.cssText = "display:none;"
        about.style.cssText = "display:flex ";
        img.style.cssText = "display: initial;";
        contact.style.cssText = "display: initial;";
        window.scrollTo({
            top:2122,
            behavior:"smooth"
        })
    })
}
window.onscroll = function(){
    console.log(scrollY);
}
menu.addEventListener("click",showLinks);
function hidden(){
    links.style.cssText = "display:none"
    home.style.cssText = "display:flex";
    menu.style.cssText = "display:flex";
    menu2.style.cssText = "display:none;"
    about.style.cssText = "display:flex ";
    img.style.cssText = "display: initial;";
    contact.style.cssText = "display: initial;";
}
menu2.addEventListener("click",hidden);
const face = document.getElementById("face");
const whats = document.getElementById("whats");
const gmail= document.getElementById("gmail");
const phone= document.getElementById("phone");
face.addEventListener("click",function(){
    window.open("https://www.facebook.com/%D8%AA%D9%83%D9%8A%D9%8A%D9%81-%D9%85%D8%B5%D8%B1-%D9%84%D8%A3%D9%86%D8%B8%D9%85%D9%87-%D8%A7%D9%84%D8%AA%D9%83%D9%8A%D9%8A%D9%81-%D9%88%D8%A3%D8%B9%D9%85%D8%A7%D9%84-%D8%A7%D9%84%D8%AA%D9%87%D9%88%D9%8A%D8%A9-100298115104397/"," ");
})
whats.addEventListener("click",function(){
    window.open("https://api.whatsapp.com/send?phone=+201225690504"," ");
})
phone.addEventListener("click",function(){
    window.open("tel:+201225690504");
})
gmail.addEventListener("click",function(){
    window.open("https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=fadyibrahem01@gmail.com"," ");
})
