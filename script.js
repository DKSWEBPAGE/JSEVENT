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

// 1. Gentle 3D Tilt Effect
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Dialed back values for minimal tilt rotation
    const rotateX = -(y / rect.height) * 10; 
    const rotateY = (x / rect.width) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Smoothly restore default placement on mouse leave
card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// 2. Click Interaction Handler (Ripple & Upgraded Exploding Spark Burst)
card.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Trigger core expanding click ripple
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${clickX - size / 2}px`;
    ripple.style.top = `${clickY - size / 2}px`;
    this.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());

    // Generate 24 explosive bright spark pieces
    const colors = ['#ff007f', '#00dfd8', '#ffeb3b', '#ffffff', '#a855f7'];
    for (let i = 0; i < 24; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Blast radius velocity for a prominent pop layout
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 90 + 40; 
        const destinationX = Math.cos(angle) * velocity;
        const destinationY = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--x', `${destinationX}px`);
        particle.style.setProperty('--y', `${destinationY}px`);
        particle.style.setProperty('--duration', `${Math.random() * 0.4 + 0.3}s`);
        
        // Apply random color scheme matching the sparkles array
        const chosenColor = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = chosenColor;
        particle.style.color = chosenColor; // Powers the CSS box-shadow glow
        particle.style.left = `${clickX}px`;
        particle.style.top = `${clickY}px`;
        
        this.appendChild(particle);
        particle.addEventListener('animationend', () => particle.remove());
    }
});

