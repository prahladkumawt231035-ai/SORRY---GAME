// ==============================
// Elements
// ==============================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const glass = document.querySelector(".glass");
const secondPage = document.getElementById("secondPage");

const typingText = document.getElementById("typingText");

const music = document.getElementById("music");

// ==============================
// Running NO Button
// ==============================

function moveButton(){

const x=Math.random()*220-110;

const y=Math.random()*160-80;

noBtn.style.transform = `translate(${x}px, ${y}px)`;

}

noBtn.addEventListener("mouseover",moveButton);

noBtn.addEventListener("touchstart",(e)=>{

e.preventDefault();

moveButton();

});

// ==============================
// Your Message
// ==============================

const message=`

लास्ट बार माफ़ कर दो...🥺

मैं हमारा रिश्ता खोना नहीं चाहता।❤️

मुझे पता है कि तुम मुझसे बहुत नाराज़ हो,
और शायद तुम्हारी नाराज़गी बिल्कुल सही भी है।

मैं अपनी गलती को सही साबित करने नहीं आया,
बस अपने दिल की बात कहना चाहता हूँ।

जब से तुमने मुझसे बात करना कम कर दिया है,
तब से मुझे एहसास हुआ कि तुम मेरी ज़िंदगी में कितनी अहम हो।

तुम्हारी ख़ामोशी ने
मुझे मेरी हर गलती का एहसास कराया है।

अगर मेरी किसी बात ने तुम्हारा दिल दुखाया है,
तो उसके लिए मैं दिल से माफ़ी चाहता हूँ।

मैं यह नहीं कहता कि पहले सब जैसा हो जाएगा,
लेकिन मैं कोशिश ज़रूर करना चाहता हूँ।

क्योंकि मेरी सुबह की पहली सोच तुम हो,
और रात का आख़िरी ख़्याल भी तुम ही हो।

अगर हो सके,
तो मुझे एक मौका और दे देना।

क्योंकि मैं लड़ाई नहीं,
सिर्फ़ हमारा रिश्ता बचाना चाहता हूँ।

🥺❤️ हमेशा तुम्हारा...

Prahlad ❤️

`;

// ==============================
// Typewriter
// ==============================

let index=0;

function typeWriter(){

if(index<message.length){

typingText.innerHTML+=message.charAt(index);

index++;

setTimeout(typeWriter,35);

}

}

// ==============================
// YES Button
// ==============================

yesBtn.addEventListener("click",()=>{

glass.style.display="none";

secondPage.classList.remove("hidden");

// Music

music.volume=.7;

music.play().catch(()=>{});

// Start typing

typingText.innerHTML="";

index=0;

typeWriter();

});
// ==============================
// PHOTO SLIDESHOW
// ==============================

const photos = document.querySelectorAll(".gallery img");

let currentPhoto = 0;

function startSlideshow() {

    if (photos.length === 0) return;

    setInterval(() => {

        photos.forEach(img => {

            img.style.opacity = ".4";
            img.style.transform = "scale(.9)";

        });

        photos[currentPhoto].style.opacity = "1";
        photos[currentPhoto].style.transform = "scale(1.08)";

        currentPhoto++;

        if (currentPhoto >= photos.length) {
            currentPhoto = 0;
        }

    }, 2500);

}

// ==============================
// HEART RAIN
// ==============================

function heartRain() {

    const hearts = ["❤️","💖","💕","💗","💘","💞"];

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (18 + Math.random() * 20) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 3) + "s";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 7000);

    }, 250);

}

// ==============================
// ROSE PETALS
// ==============================

function roseRain(){

setInterval(()=>{

const rose=document.createElement("div");

rose.className="heart";

rose.innerHTML="🌹";

rose.style.left=Math.random()*100+"vw";

rose.style.fontSize=(22+Math.random()*15)+"px";

rose.style.animationDuration=
(5+Math.random()*2)+"s";

document.body.appendChild(rose);

setTimeout(()=>{

rose.remove();

},7000);

},700);

}

// ==============================
// CONFETTI
// ==============================

function blastConfetti(){

confetti({

particleCount:250,

spread:120,

origin:{y:0.6}

});

setTimeout(()=>{

confetti({

particleCount:180,

angle:60,

spread:80,

origin:{x:0}

});

confetti({

particleCount:180,

angle:120,

spread:80,

origin:{x:1}

});

},350);

}

// ==============================
// START EFFECTS
// ==============================

yesBtn.addEventListener("click",()=>{

startSlideshow();

heartRain();

roseRain();

blastConfetti();

});
// ==============================
// LOVE METER
// ==============================

const fill = document.getElementById("fill");
const percent = document.getElementById("percent");
const finalMessage = document.getElementById("finalMessage");

function startLoveMeter(){

let value = 0;

const timer = setInterval(()=>{

value++;

fill.style.width = value + "%";

percent.innerHTML = value + "% ❤️";

if(value >= 100){

clearInterval(timer);

setTimeout(()=>{

finalMessage.classList.remove("hidden");

finalMessage.scrollIntoView({
behavior:"smooth"
});

bigConfetti();

},1000);

}

},45);

}

// ==============================
// BIG CONFETTI
// ==============================

function bigConfetti(){

const end = Date.now()+5000;

(function frame(){

confetti({

particleCount:8,

angle:60,

spread:80,

origin:{x:0}

});

confetti({

particleCount:8,

angle:120,

spread:80,

origin:{x:1}

});

if(Date.now()<end){

requestAnimationFrame(frame);

}

})();

}

// ==============================
// FLOATING SPARKLES
// ==============================

function sparkle(){

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top="100vh";

star.style.fontSize=(15+Math.random()*20)+"px";

star.style.transition="5s linear";

star.style.pointerEvents="none";

document.body.appendChild(star);

setTimeout(()=>{

star.style.top="-10vh";

star.style.opacity="0";

},50);

setTimeout(()=>{

star.remove();

},5000);

},500);

}

// ==============================
// START EVERYTHING
// ==============================

yesBtn.addEventListener("click",()=>{

setTimeout(()=>{

startLoveMeter();

},4000);

sparkle();

});

// ==============================
// END MESSAGE
// ==============================

console.log("❤️ Website Made With Love By Prahlad ❤️");