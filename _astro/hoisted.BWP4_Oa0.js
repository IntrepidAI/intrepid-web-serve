import"./hoisted.ysCn3VhS.js";import"./Pricing4.astro_astro_type_script_index_0_lang.BrPl5KOD.js";import"./Pricing1.astro_astro_type_script_index_0_lang.BrPl5KOD.js";import"./Accordion.astro_astro_type_script_index_0_lang.DRQtq_hu.js";function s(){const r=document.querySelector(".pricing-plan__toggle"),e=document.querySelector(".pricing-plan__slider"),i=document.querySelector(".pricing-plan__dot");document.querySelectorAll(".pricing-plan").forEach(n=>{const t=n.querySelector(".pricing-plan__monthly-price"),c=n.querySelector(".pricing-plan__yearly-price");r&&i&&e&&t&&c&&r.addEventListener("change",o=>{r.checked?(t.classList.add("hidden"),c.classList.remove("hidden"),i.classList.add("translate-x-[26px]"),e.classList.add("border-primary-400"),e.classList.add("dark:border-primary-600")):(t.classList.remove("hidden"),c.classList.add("hidden"),i.classList.remove("translate-x-[26px]"),e.classList.remove("border-primary-400"),e.classList.remove("dark:border-primary-600"))})})}s();document.addEventListener("astro:after-swap",s);
