const imageData = [

/* NATURE */
{src:"https://picsum.photos/id/1018/600/400",title:"Forest Lake",cat:"nature"},
{src:"https://picsum.photos/id/1040/600/400",title:"Mountain View",cat:"nature"},
{src:"https://picsum.photos/id/1039/600/400",title:"Green Valley",cat:"nature"},
{src:"https://picsum.photos/id/1056/600/400",title:"Waterfall",cat:"nature"},
{src:"https://picsum.photos/id/106/600/400",title:"River Flow",cat:"nature"},
{src:"https://picsum.photos/id/1080/600/400",title:"Snow Mountains",cat:"nature"},

/* CITY */
{src:"https://picsum.photos/id/1015/600/400",title:"Modern City",cat:"city"},
{src:"https://picsum.photos/id/1063/600/400",title:"Night Lights",cat:"city"},
{src:"https://picsum.photos/id/1011/600/400",title:"City Skyline",cat:"city"},
{src:"https://picsum.photos/id/1020/600/400",title:"Urban Bridge",cat:"city"},
{src:"https://picsum.photos/id/1043/600/400",title:"City Sunset",cat:"city"},
{src:"https://picsum.photos/id/1050/600/400",title:"Glass Buildings",cat:"city"},

/* ANIMALS */
{src:"https://picsum.photos/id/237/600/400",title:"Cute Dog",cat:"animals"},
{src:"https://picsum.photos/id/593/600/400",title:"Wild Lion",cat:"animals"},
{src:"https://picsum.photos/id/1025/600/400",title:"Parrot Bird",cat:"animals"},
{src:"https://picsum.photos/id/219/600/400",title:"Majestic Horse",cat:"animals"},
{src:"https://picsum.photos/id/433/600/400",title:"Sleeping Cat",cat:"animals"},
{src:"https://picsum.photos/id/582/600/400",title:"Flying Eagle",cat:"animals"}

];

const gallery = document.getElementById("gallery");

/* RENDER */
function render(data){
  gallery.innerHTML="";
  data.forEach(img=>{
    const card=document.createElement("div");
    card.className="card "+img.cat;
    card.innerHTML=`
      <img src="${img.src}">
      <div class="overlay">
        <h3>${img.title}</h3>
        <span>${img.cat}</span>
      </div>
    `;
    card.onclick=()=>openLightbox(img.src);
    gallery.appendChild(card);
  });
}
render(imageData);

/* SEARCH */
function searchImages(text){
  const filtered=imageData.filter(img =>
    img.title.toLowerCase().includes(text.toLowerCase())
  );
  render(filtered);
}

/* FILTER */
function filterGallery(cat,e){
  document.querySelectorAll(".filters button")
    .forEach(b=>b.classList.remove("active"));
  e.target.classList.add("active");

  if(cat==="all") render(imageData);
  else render(imageData.filter(i=>i.cat===cat));
}

/* LIGHTBOX */
let current=0;
const lightbox=document.getElementById("lightbox");
const lightboxImg=document.getElementById("lightboxImg");

function openLightbox(src){
  current=imageData.findIndex(i=>i.src===src);
  lightboxImg.src=src;
  lightbox.style.display="flex";
}

function closeLightbox(){
  lightbox.style.display="none";
}

function changeSlide(step){
  current+=step;
  if(current<0) current=imageData.length-1;
  if(current>=imageData.length) current=0;
  lightboxImg.src=imageData[current].src;
}