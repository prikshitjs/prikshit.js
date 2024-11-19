const bgcolor = ["#f18e00", "#00beeb", "#9100eb", "#a7d600"];
let body = document.querySelector("body");
let menubar = document.querySelector("#menubar");
let menu    = document.querySelector(".menu");


let bgcolorchange = () => {
  let random1 = bgcolor[Math.floor(Math.random() * bgcolor.length)];
  console.log(random1);
  body.style.background = random1;
  menubar.style.color = random1;
  menu.style.background = random1+"a1";
};

setInterval(bgcolorchange,3000);

menubar.addEventListener("click", ()=> {
    if(menubar.className == "fa-solid fa-bars") {
        menubar.className = "fa-solid fa-xmark";
        menu.style.transform = "translateX(0)"
    }else{
        menubar.className = "fa-solid fa-bars";
        menu.style.transform = "translateX(150px)"
    }
})
