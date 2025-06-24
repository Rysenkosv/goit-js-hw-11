import{a as d,S as m,i as l}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",y="50874397-c6e917ec67a94e5ad530eed0e";async function g(r){return(await d.get(h,{params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}let a=null;function L(r){return r.map(({id:o,webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:f,downloads:p})=>`
    <li class="list-item" data-id="${o}">
      <a href="${s}">
        <img class="image" src="${i}" alt="${e}" width="360" />
      </a>
      <ul class="info">
        <li><h3>Likes</h3><p class="info-text">${t}</p></li>
        <li><h3>Views</h3><p class="info-text">${n}</p></li>
        <li><h3>Comments</h3><p class="info-text">${f}</p></li>
        <li><h3>Downloads</h3><p class="info-text">${p}</p></li>
      </ul>
    </li>
    `).join("")}function b(r){const o=document.querySelector(".gallery");o.innerHTML=L(r),a?a.refresh():a=new m(".gallery a",{captionsData:"alt",captionDelay:250})}function x(){const r=document.querySelector(".gallery");r.innerHTML=""}const u=document.querySelector(".loader");function S(){u.style.display="block"}function w(){u.style.display="none"}const c=document.querySelector(".form");c.addEventListener("submit",$);function $(r){r.preventDefault();const o=c.elements["search-text"].value.trim();if(o===""){l.warning({message:"Введіть назву зображення!",position:"topRight"});return}x(),S(),g(o).then(i=>{i.length===0?l.info({message:"Зображень не знайдено.",position:"topRight"}):b(i),c.reset()}).catch(i=>{l.error({message:"Сталася помилка при запиті!",position:"topRight"}),console.error("Помилка:",i)}).finally(()=>{w()})}
//# sourceMappingURL=index.js.map
