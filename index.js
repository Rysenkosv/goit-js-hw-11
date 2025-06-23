import{a as d,S as p,i as l}from"./assets/vendor-C5BuWtzx.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",h="50874397-c6e917ec67a94e5ad530eed0e";function g(r){return d.get(m,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}})}function y(r){return r.map(({id:o,webformatURL:i,largeImageURL:s,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
    <li class="list-item" data-id="${o}">
      <a href="${s}">
        <img class="image" src="${i}" alt="${e}" width="360" />
      </a>
      <ul class="info">
        <li><h3>Likes</h3><p class="info-text">${t}</p></li>
        <li><h3>Views</h3><p class="info-text">${n}</p></li>
        <li><h3>Comments</h3><p class="info-text">${u}</p></li>
        <li><h3>Downloads</h3><p class="info-text">${f}</p></li>
      </ul>
    </li>
    `).join("")}function L(r){const o=document.querySelector(".gallery");o.innerHTML=y(r),new p(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const c=document.querySelector(".loader");function b(){c.style.display="block"}function x(){c.style.display="none"}const a=document.querySelector(".form"),S=document.querySelector(".gallery");a.addEventListener("submit",$);function $(r){r.preventDefault();const o=a.elements["search-text"].value.trim();if(o===""){l.warning({message:"Введіть назву зображення!",position:"topRight"});return}b(),g(o).then(i=>{const s=i.data.hits;s.length===0?(S.innerHTML="",l.info({message:"Зображень не знайдено.",position:"topRight"})):(console.log(s),L(s)),a.reset()}).catch(i=>{l.error({message:"Сталася помилка при запиті!",position:"topRight"}),console.error("Помилка:",i)}).finally(()=>{x()})}
//# sourceMappingURL=index.js.map
