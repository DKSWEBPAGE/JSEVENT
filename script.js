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





// let body=document.querySelector("body");

// const bacGroColor=()=>{
//     if (!isDark) {
//         body.classList.remove("white-mode");
//         body.classList.add("dark-mode");
//         isDark = true;
//     } else {
//         body.classList.remove("dark-mode");
//         body.classList.add("white-mode");
//         isDark = false;
//     }
// };

// mode.addEventListener("click",bacGroColor);    







































const card = document.getElementById('animatedCard');

card.addEventListener('click', function (e) {
    // Calculate click coordinates relative to the card
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Create the particle element
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    // Size the particle dynamically based on element footprint
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    // Position the element right at the cursor position
    ripple.style.left = `${x - size / 2}px`;
    ripple.style.top = `${y - size / 2}px`;

    // Append to card
    this.appendChild(ripple);

    // Clean up DOM after animation completes
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
});
