import{i as l,S as f,a as h}from"./assets/vendor-951421c8.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=document.querySelector(".form-search"),m=document.querySelector(".search-box"),u=document.querySelector(".gallery"),c=document.querySelector(".loader"),n=document.querySelector(".load-btn"),g="https://pixabay.com/api",v="23963114-6d0d5d874ae460d9125bacd21";c.style.display="none";n.style.display="none";let y=1,b=0,q=1;d.addEventListener("submit",async function(i){i.preventDefault();const s=encodeURIComponent(m.value.trim());if(s.trim()===""){l.error({title:"Error",message:"Enter search data"});return}n.style.display="none",c.style.display="block";const a=new f(".gallery a",{captionsData:"alt",captions:!0,captionDelay:250});function o(e){if(u.innerHTML="",e.length===0){l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}e.length===40?n.style.display="block":(n.style.display="none",L()),n.addEventListener("click",async()=>{try{const r=await fetchPosts();renderPosts(r),q+=1}catch(r){console.log(r)}});const t=S(e);u.innerHTML=t,a.refresh(),window.scrollBy({top:cardHeight*2,behavior:"smooth"})}d.reset();try{const e=await h.get(`${g}/?key=${v}&q=${s}&image_type=photo&orientation=horizontal&safesearch=true&page=${y}&per_page=40`);b=e.data.totalHits,o(e.data.hits)}catch(e){console.error(e)}finally{c.style.display="none",y++}});function L(){l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})}function S(i){return i.map(({webformatURL:s,largeImageURL:a,tags:o,likes:e,views:t,comments:r,downloads:p})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${o}"
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
              <p class="quantity">${r}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${p}</p>
            </div>
          </div>
        </li>`).join("")}
//# sourceMappingURL=commonHelpers.js.map
