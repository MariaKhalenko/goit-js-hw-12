import{i as d,S as m,a as g}from"./assets/vendor-951421c8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h=document.querySelector(".form-search"),$=document.querySelector(".search-box"),y=document.querySelector(".gallery"),u=document.querySelector(".loader"),c=document.querySelector(".load-btn"),p=document.querySelector(".loader-more"),f="https://pixabay.com/api",v="23963114-6d0d5d874ae460d9125bacd21";u.style.display="none";c.style.display="none";p.style.display="none";let l=1,i=0;const L=40;let q="";h.addEventListener("submit",async function(o){o.preventDefault();const r=encodeURIComponent($.value.trim());if(r.trim()===""){d.error({title:"Error",message:"Enter search data"});return}q=r,c.style.display="none",u.style.display="block";const s=new m(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250});function a(e){if(y.innerHTML="",e.length===0){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const t=S(e);y.innerHTML=t,c.style.display="block",s.refresh()}h.reset();try{const e=await g.get(`${f}/?key=${v}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=40`);i=e.data.totalHits,a(e.data.hits)}catch(e){console.error(e)}finally{u.style.display="none"}});c.addEventListener("click",async()=>{try{p.style.display="block";const o=encodeURIComponent(q.trim());l++;const r=await g.get(`${f}/?key=${v}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${l}&per_page=40`);i=r.data.totalHits;const s=r.data.hits,a=Math.ceil(i/L);if(i>0&&l>a){d.info({title:"Info",message:"We're sorry, but you've reached the end of search results."});return}const e=S(s);y.insertAdjacentHTML("beforeend",e),new m(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250}).refresh()}catch(o){console.error(o)}finally{p.style.display="none";const o=k();window.scrollBy({top:o*2,left:0,behavior:"smooth"})}});function k(){return document.querySelector(".gallery-item").getBoundingClientRect().height}function S(o){return o.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:n,downloads:b})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${a}"
              width="360"
            />
          </a>
          <div class="info-section">
            <div class="section">
              <h2 class="tittle">Likes</h2>
              <p class="quantity">${e}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Views</h2>
              <p class="quantity">${t}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Comments</h2>
              <p class="quantity">${n}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${b}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
