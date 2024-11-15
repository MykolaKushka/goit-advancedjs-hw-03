import{a as d,S as u,i}from"./assets/vendor-61TxKDl8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="11098125-871cfab26b5ca42e81d1a6284";async function f(o){try{return(await d.get("https://pixabay.com/api/",{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch{throw new Error("Error during loading images")}}const c=document.getElementById("gallery");function p(o){const r=o.map(n=>`
    <a href="${n.largeImageURL}" class="gallery-item">
      <img src="${n.webformatURL}" alt="${n.tags}" />
      <div class="image-info">
        <div>Likes <span>${n.likes}</span></div>
        <div>Views <span>${n.views}</span></div>
        <div>Comments <span>${n.comments}</span></div>
        <div>Downloads <span>${n.downloads}</span></div>
      </div>
    </a>
  `).join("");c.innerHTML=r,new u(".gallery-item",{captionsData:"alt",captionDelay:250}).refresh()}function y(){c.innerHTML=""}const g=document.getElementById("search-form"),l=document.getElementById("loader");g.addEventListener("submit",async o=>{o.preventDefault();const r=document.getElementById("search-input").value.trim();if(!r){i.warning({title:"Warning",message:"Enter keyword for searching"});return}y(),l.style.display="block";try{const s=await f(r);if(l.style.display="none",s.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please, try again!"});return}p(s)}catch(s){l.style.display="none",i.error({title:"Error",message:s.message})}});
//# sourceMappingURL=index.js.map
