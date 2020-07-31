document.addEventListener('click', (e) => {
  let elem = e.target;
  console.log(e);
  let rect = elem.getBoundingClientRect();
  let client = elem.getClientRects();
  console.log(`client x : ${rect.x}, client y : ${rect.y}`);
  console.log(`page x : ${elem.offsetLeft}, page Y : ${elem.offsetTop}`);  
});

document.querySelector('.Btn1').addEventListener('click', (e) => {
  window.scrollBy({ top : 100, left : 0, behavior : "smooth"});
});

document.querySelector('.Btn2').addEventListener('click', (e) => {
  window.scrollTo({ top : 100, left : 0, behavior : "smooth"});
});

const orange = document.querySelector('.orange');
console.log(orange);
document.querySelector('.Btn3').addEventListener('click', (e) => {
  orange.scrollIntoView( { behavior : "smooth" } );
});



