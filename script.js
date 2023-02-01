const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener('click',addNewImages)

imageNum=10;

function addNewImages(){
 for (let i=0;i<imageNum;i++){
  const newImgEl=document.createElement('img');
  const randomNum = Math.floor(Math.random() * 2000);
  newImgEl.src = `https://picsum.photos/300?random=${randomNum}`;

  imageContainerEl.append(newImgEl)
 }
}