// =========================
// Éléments
// =========================

const button = document.getElementById("playButton");
const menu = document.getElementById("menu");

const loading = document.getElementById("loading");
const fill = document.getElementById("fill");
const percent = document.getElementById("percent");

const splash = document.getElementById("splash");

// =========================
// Splash Minecraft
// =========================

const splashes = [

"Bon anniversaire !",
"Niveau 13 débloqué !",
"Minecraft Forever !",
"Powered by blocs !",
"Attention aux Creepers !",
"Mode Survie !",
"Construis tes rêves !",
"100 % Cubique !",
"Version Ferdinand !",
"Profite de tes 13 ans !"

];

function randomSplash(){

    splash.textContent =
    splashes[Math.floor(Math.random()*splashes.length)];

}

randomSplash();

setInterval(randomSplash,4000);

// =========================
// Chargement
// =========================

button.onclick = function(){

    menu.style.display="none";

    loading.style.display="flex";

    let p=0;

    const timer=setInterval(()=>{

        p++;

        fill.style.width=p+"%";

        percent.textContent=p+" %";

        if(p>=100){

            clearInterval(timer);

            fireworks();

            setTimeout(()=>{

                location.href="game.html";

            },3000);

        }

    },35);

};

// =========================
// Feux d'artifice
// =========================

const canvas=document.getElementById("fx");

const ctx=canvas.getContext("2d");

function resize(){

    canvas.width=innerWidth;

    canvas.height=innerHeight;

}

resize();

window.addEventListener("resize",resize);

let particles=[];

function color(){

    const c=[

        "#ff5252",
        "#ffd740",
        "#69f0ae",
        "#40c4ff",
        "#e040fb",
        "#ffffff"

    ];

    return c[Math.floor(Math.random()*c.length)];

}

function fireworks(){

    const timer=setInterval(()=>{

        const cx=Math.random()*canvas.width;

        const cy=Math.random()*canvas.height*0.6;

        for(let i=0;i<120;i++){

            const a=Math.random()*Math.PI*2;

            const s=Math.random()*6+2;

            particles.push({

                x:cx,

                y:cy,

                vx:Math.cos(a)*s,

                vy:Math.sin(a)*s,

                life:100,

                color:color()

            });

        }

    },700);

    setTimeout(()=>{

        clearInterval(timer);

    },3000);

}

// =========================
// Animation
// =========================

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i=particles.length-1;i>=0;i--){

        const p=particles[i];

        p.x+=p.vx;

        p.y+=p.vy;

        p.vy+=0.05;

        p.life--;

        ctx.globalAlpha=p.life/100;

        ctx.fillStyle=p.color;

        ctx.beginPath();

        ctx.arc(p.x,p.y,3,0,Math.PI*2);

        ctx.fill();

        if(p.life<=0){

            particles.splice(i,1);

        }

    }

    ctx.globalAlpha=1;

    requestAnimationFrame(animate);

}

animate();

// =========================
// Étoiles
// =========================

function star(){

    const s=document.createElement("div");

    s.style.position="absolute";

    s.style.width="3px";

    s.style.height="3px";

    s.style.background="white";

    s.style.borderRadius="50%";

    s.style.left=Math.random()*innerWidth+"px";

    s.style.top=Math.random()*innerHeight+"px";

    s.style.opacity=Math.random();

    document.body.appendChild(s);

    setTimeout(()=>{

        s.remove();

    },4000);

}

setInterval(star,200);

// =========================
// Console
// =========================

console.log(
"%c🎉 Joyeux anniversaire Ferdinand !",
"color:lime;font-size:22px;font-weight:bold;"
);

console.log(
"%cNiveau 13 débloqué !",
"color:gold;font-size:18px;"
);
