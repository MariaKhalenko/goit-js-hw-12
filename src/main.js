import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const formSearch = document.querySelector('.form-search');
const searchBox = document.querySelector('.search-box');
const galleryImage = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-btn')

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23963114-6d0d5d874ae460d9125bacd21';

loader.style.display = 'none';
loadMoreBtn.style.display = 'none';

let currentPage = 1;
let totalHits = 0;
let page = 1; 
const perPage = 40;

formSearch.addEventListener('submit', async function (event) {
  event.preventDefault();

  const query = encodeURIComponent(searchBox.value.trim());

  if (query.trim() === '') {
    iziToast.error({
      title: 'Error',
      message: 'Enter search data',
    });
    return;
  }   
  loadMoreBtn.style.display = 'none';
   loader.style.display = 'block';

   const clearSearch = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captions: true,
    captionDelay: 250,
  });

 function displayImages(images) {
  galleryImage.innerHTML = '';
    
   
  if (images.length === 0) {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
    
  }
      
   if (images.length === 40) {
    loadMoreBtn.style.display = 'block';
  } else {
    
    loadMoreBtn.style.display = 'none';
    showEndMessage();
  }
   
   loadMoreBtn.addEventListener("click", async () => {
  try {
    const img = await fetchPosts();
    renderPosts(img);
    page += 1;
  } catch (error) {
    console.log(error);
  }
});
   
   
  const markup = createMarkup(images);
   galleryImage.innerHTML = markup;
  
   clearSearch.refresh();
   window.scrollBy({ top: cardHeight * 2, behavior: 'smooth' });
   }
  formSearch.reset();
   
  
 try {
    const response = await axios.get(`${BASE_URL}/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${currentPage}&per_page=40`);
   totalHits = response.data.totalHits;
   displayImages(response.data.hits);
  } catch (error) {
    console.error(error);
     } finally {
   loader.style.display = 'none';
   currentPage++;
  } 
    });













function showEndMessage() {
  iziToast.info({
    title: 'Info',
    message: "We're sorry, but you've reached the end of search results.",
  });
}

function getGalleryCardHeight() {
  const galleryItem = document.querySelector('.gallery-item');
  const cardHeight = galleryItem.getBoundingClientRect().height;
  return cardHeight;
}



function createMarkup(images) {
  return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
    `<li class="gallery-item">
          <a class="gallery-link" href="${largeImageURL}">
            <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
              width="360"
            />
          </a>
          <div class="info-section">
            <div class="section">
              <h2 class="tittle">Likes</h2>
              <p class="quantity">${likes}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Views</h2>
              <p class="quantity">${views}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Comments</h2>
              <p class="quantity">${comments}</p>
            </div>
            <div class="section">
              <h2 class="tittle">Downloads</h2>
              <p class="quantity">${downloads}</p>
            </div>
          </div>
        </li>`)
    .join('');
}
