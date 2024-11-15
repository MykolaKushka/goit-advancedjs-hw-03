import{a as d,S as p,i}from"./assets/vendor-61TxKDl8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u="11098125-871cfab26b5ca42e81d1a6284";async function f(o){try{return(await d.get("https://pixabay.com/api/",{params:{key:u,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch{throw new Error("Помилка завантаження зображень")}}const c=document.getElementById("gallery");function m(o){const r=o.map(s=>`
    <a href="${s.largeImageURL}" class="gallery-item">
      <img src="${s.webformatURL}" alt="${s.tags}" />
      <div class="image-info">
        <div>Likes <span>${s.likes}</span></div>
        <div>Views <span>${s.views}</span></div>
        <div>Comments <span>${s.comments}</span></div>
        <div>Downloads <span>${s.downloads}</span></div>
      </div>
    </a>
  `).join("");c.innerHTML=r,new p(".gallery-item",{captionsData:"alt",captionDelay:250}).refresh()}function y(){c.innerHTML=""}const g=document.getElementById("search-form"),l=document.getElementById("loader");g.addEventListener("submit",async o=>{o.preventDefault();const r=document.getElementById("search-input").value.trim();if(!r){i.warning({title:"Попередження",message:"Введіть ключове слово для пошуку"});return}y(),l.style.display="block";try{const n=await f(r);if(l.style.display="none",n.length===0){i.info({title:"Результати відсутні",message:"На жаль, нічого не знайдено."});return}m(n)}catch(n){l.style.display="none",i.error({title:"Помилка",message:n.message})}});
//# sourceMappingURL=index.js.map
