const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('show');
}
});
},{
threshold:0.15
});

reveals.forEach(el=>observer.observe(el));

const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;
const target = +counter.dataset.target;

let current = 0;

const update = ()=>{

const increment = target / 120;

current += increment;

if(current < target){

counter.textContent = Math.floor(current).toLocaleString();
requestAnimationFrame(update);

}else{

counter.textContent = target.toLocaleString();

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{
counterObserver.observe(counter);
});

const testimonials = document.querySelectorAll('.testimonial');

let currentSlide = 0;

setInterval(()=>{

testimonials[currentSlide].classList.remove('active');

currentSlide++;

if(currentSlide >= testimonials.length){
currentSlide = 0;
}

testimonials[currentSlide].classList.add('active');

},4000);

const galleryItems = document.querySelectorAll('.gallery-item');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

galleryItems.forEach(item=>{

item.addEventListener('click',()=>{

const bg = getComputedStyle(item)
.backgroundImage
.slice(5,-2);

lightbox.style.display='flex';
lightboxImg.src=bg;

});

});

document.querySelector('.close-lightbox')
.addEventListener('click',()=>{
lightbox.style.display='none';
});

lightbox.addEventListener('click',(e)=>{
if(e.target===lightbox){
lightbox.style.display='none';
}
});

window.addEventListener('scroll',()=>{

const hero = document.querySelector('.hero');

hero.style.backgroundPositionY =
window.scrollY * 0.4 + 'px';

});

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove',(e)=>{

if(!glow) return;

glow.style.left=e.clientX+'px';
glow.style.top=e.clientY+'px';

});

const glowStyle = document.createElement('style');

glowStyle.innerHTML=`
.cursor-glow{
position:fixed;
width:350px;
height:350px;
background:radial-gradient(circle,
rgba(212,175,55,.12),
transparent 70%);
pointer-events:none;
transform:translate(-50%,-50%);
z-index:1;
}
`;

document.head.appendChild(glowStyle);

document.querySelector('.contact-form')
.addEventListener('submit',(e)=>{
e.preventDefault();
alert('Thank you for contacting Happi Time.');
});