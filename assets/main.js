//ALL BY Abdulkadir9
var btnOyna = document.querySelector(".btn-oyna");
let adet = 0;
let time = 60;
var started = false;
var txtAdet = document.querySelector(".txt-adet");
var txtZaman = document.querySelector(".txt-zaman");
var fHedefAdet = document.querySelector(".f-hedef-adet");
var screenEnd = document.querySelector(".screen-end");
var screenEndWhole = document.querySelector(".screen-end-whole");
var tryGame = document.querySelector(".try-game");

var main = document.querySelector(".main");
var target = document.createElement("span");

//-
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode === 123) {
    e.preventDefault();
  }
});
//-
const finito = () => {
  fHedefAdet.textContent = adet;
  screenEndWhole.style.display = "flex";
  setTimeout(() => {
    screenEndWhole.style.opacity = "1";
  }, 100);
  setTimeout(() => {
    screenEnd.style.transform = "translateY(0px)";
    screenEnd.style.opacity = "1";
  }, 200);
};
//-
btnOyna.addEventListener("click", (btn) => {
  btn.srcElement.style.opacity = "0";
  setTimeout(() => {
    btnOyna.style.display = "none";
    randomTarget();
    startTime();
    started = true;
  }, 100);
});
document.addEventListener("click", (e) => {
  if (e.srcElement == main && started == true) {
    let audio = new Audio("./assets/media/fail.mp3");
    audio.play();
    audio.volume = 0.05;
    adet--;
    txtAdet.innerHTML = adet + " Adet";
  }
});
const startTime = () => {
  const timer = setInterval(() => {
    time--;
    if (time > 9) {
      txtZaman.innerHTML = "00:" + time;
    } else {
      txtZaman.innerHTML = "00:0" + time;
    }
    if (time <= 0) {
      clearInterval(timer);
      finito();
    }
  }, 1000);
};
const randomTarget = () => {
  target.classList.add("target");
  var randomTr = (Math.random() * 90).toFixed();
  console.log("top " + randomTr);
  target.style.top = randomTr + "%";
  randomTr = (Math.random() * 90).toFixed();
  console.log("left " + randomTr);
  target.style.left = randomTr + "%";
  main.appendChild(target);
};

target.addEventListener("click", (e) => {
  let audio = new Audio("./assets/media/shot.mp3");
  audio.play();
  audio.volume = 0.05;
  adet++;
  txtAdet.innerHTML = adet + " Adet";
  randomTarget();
});

tryGame.addEventListener("click", () => {
  screenEnd.style.opacity = "0";
  screenEnd.style.transform = "translateY(-200px)";
  setTimeout(() => {
    screenEndWhole.style.opacity = "0";
  }, 200);
  setTimeout(() => {
    screenEndWhole.style.display = "none";
  }, 280);
  //-
  time = 60;
  adet = 0;
  target.remove();
  btnOyna.style.display = "block";
  btnOyna.style.opacity = "1";
  txtAdet.innerHTML = adet;
  txtZaman.innerHTML = "01:00";
  started = false;
});
