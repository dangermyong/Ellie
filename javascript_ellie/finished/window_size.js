const tag = document.querySelector('.tag');
const tag1 = document.getElementsByClassName('tag');
console.log(tag);
console.log(tag1[0]); // querySelector 와 getElements~ 의 차이 사용법
// 태그앞에 .(class구분자) 유뮤, 테그뒤에 [0] 유무

function updateTag() {
  tag1[0].innerHTML = `
  window.screen : ${window.screen.width}, ${window.screen.height} <br/>
  window.outer : ${window.outerWidth}, ${window.outerHeight} <br/>
  window.inner : ${window.innerWidth}, ${window.innerHeight} <br/>
  documentElement.clientWidth : ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}`;
}
window.addEventListener('resize', () => {
  updateTag();
});
updateTag();


