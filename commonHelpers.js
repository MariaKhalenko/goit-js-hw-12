import{i as a,a as f,S as E}from"./assets/vendor-951421c8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const g=document.querySelector(".form-search"),k=document.querySelector(".search-box"),u=document.querySelector(".gallery"),y=document.querySelector(".loader"),l=document.querySelector(".load-btn"),p=document.querySelector(".loader-more"),b="https://pixabay.com/api",v="23963114-6d0d5d874ae460d9125bacd21";y.style.display="none";l.style.display="none";p.style.display="none";let d=1,i=0;const w=40;let S="";const q=m();g.addEventListener("submit",async function(n){n.preventDefault();const o=encodeURIComponent(k.value.trim());if(o.trim()===""){a.error({title:"Error",message:"Enter search data"});return}S=o,d=1,l.style.display="none",y.style.display="block",m();function s(t){if(u.innerHTML="",t.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const e=L(t);u.innerHTML=e,l.style.display="block",q.refresh()}g.reset();try{const t=await f.get(`${b}/?key=${v}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&page=${d}&per_page=40`);if(i=t.data.totalHits,s(t.data.hits),i>0&&i<=w){a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none";return}}catch(t){console.error(t),a.warning({title:"Error",message:"Something went wrong"})}finally{y.style.display="none"}});l.addEventListener("click",async()=>{try{p.style.display="block";const n=encodeURIComponent(S.trim());d++;const o=await f.get(`${b}/?key=${v}&q=${n}&image_type=photo&orientation=horizontal&safesearch=true&page=${d}&per_page=40`);i=o.data.totalHits;const s=o.data.hits,t=Math.ceil(i/w);if(i>0&&d>t){a.info({title:"Info",message:"We're sorry, but you've reached the end of search results."}),l.style.display="none";return}const e=L(s);u.insertAdjacentHTML("beforeend",e),m(),q.refresh()}catch(n){console.error(n),a.warning({title:"Error",message:"Something went wrong"})}finally{p.style.display="none";const n=I();window.scrollBy({top:n*2,left:0,behavior:"smooth"})}});const h=document.querySelector(".scroll-to-top-btn");window.addEventListener("scroll",function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?h.style.display="block":h.style.display="none"});h.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});function I(){return document.querySelector(".gallery-item").getBoundingClientRect().height}function m(){return new E(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250})}function L(n){return n.map(({webformatURL:o,largeImageURL:s,tags:t,likes:e,views:r,comments:c,downloads:$})=>`<li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img
              class="gallery-image"
              src="${o}"
              alt="${t}"
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
              <p class="quantity">${r}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Comments</h2>
              <p class="quantity">${c}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${$}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
