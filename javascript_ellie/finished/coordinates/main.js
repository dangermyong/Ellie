const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");
const targetRect = target.getBoundingClientRect();
const targetHalfWidth = targetRect.width / 2;
const targetHalfHeight = targetRect.height / 2;

window.addEventListener('load', () => {
  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
  
    horizontal.style.transform =`translateY(${y}px)`;
    vertical.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
    tag.style.transform = `translate(${x+10}px, ${y+10}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  
  });
});

