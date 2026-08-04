// let mybtn=document.querySelector("#myButton");

// mybtn.onclick=(evt)=>{
//     console.log("Button Clicked");
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.pointerType);
// }

// const fnt=(evt)=>{
//     console.log("Button Clicked");
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.pointerType);
// }

// mybtn.addEventListener("click",fnt);


// dark and light mode

let mode=document.querySelector("#mode");
let isDark=false;

// const bacGroColor=()=>{
//     if(!isDark){
//         console.log("Button Clicked");
//         document.body.style.backgroundColor="black";
//         isDark=true;
//         mode.innerText="Light Mode";

//     }
//     else{
//         console.log("Button Clicked");
//         document.body.style.backgroundColor="pink";
//         isDark=false;
//         mode.innerText="Dark Mode";
//     }
// }





let body=document.querySelector("body");

const bacGroColor=()=>{
    if (!isDark) {
        body.classList.remove("white-mode");
        body.classList.add("dark-mode");
        isDark = true;
    } else {
        body.classList.remove("dark-mode");
        body.classList.add("white-mode");
        isDark = false;
    }
};

mode.addEventListener("click",bacGroColor);     