import"./hoisted.ysCn3VhS.js";function d(){const t=document.getElementById("feature6__video"),s=document.getElementById("feature6__play-button"),o=document.getElementById("feature6__video-items"),e=document.getElementById("feature6__backdrop-button"),n=document.getElementById("feature6__close-button");s?.addEventListener("click",()=>{o?.classList.toggle("hidden"),e?.classList.toggle("feature6__backdrop-button--show"),t?.play()}),e?.addEventListener("click",()=>{t?.pause(),o?.classList.add("hidden"),e?.classList.remove("feature6__backdrop-button--show")}),n?.addEventListener("click",()=>{t?.pause(),o?.classList.add("hidden"),e?.classList.remove("feature6__backdrop-button--show")})}d();document.addEventListener("astro:after-swap",d);
