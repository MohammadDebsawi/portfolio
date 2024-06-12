document.onclick = (e) => {
    if (e.target.tagName == "IMG") {
        showImg(e.target.src,e.target.alt);
    }
};

function showImg(src,alt){
    const div = document.createElement('div');
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    div.style = `
      width: 100%;
      height: 100%;
      position: absolute;
      top: 50%;
      left: 50%;
      display: flex;
      transform: translate(-50%, -50%);
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(10px)
    `;
    img.style = `
      width: 75vmin;
      height: 75vmin;
      object-fit: cover;
    `;
    div.appendChild(img);
    document.body.appendChild(div);
    div.onclick = () => {
      document.body.removeChild(div);
    };
}

function showMenu(){
  const menuBut = document.querySelector(".menuBut");
  const menu = document.querySelector(".menu");
  menuBut.classList.toggle("change");
  if ([...menuBut.classList].indexOf("change") == -1) {
    console.log('X');
    menu.style.overflow = 'hidden'
  }else{
    console.log('|||');
    menu.style.overflow = 'unset'
  }

}

