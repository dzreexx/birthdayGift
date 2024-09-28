// window.addEventListener('click' , function () {
//     const music = this.document.querySelector('#music');
//     setTimeout(() => {
//         console.log('mainkan......');
//         music.setAttribute('autoplay', '');
//         music.play()
//         .then(() => {console.log('mantepppppp....')})
//         .catch(error => {console.error('gagal memuat brooo', error)})
//     }, 1000);
// })
// window.addEventListener('keypress' , function (value) {
//     if (value = 'Space') {
//         music.pause()
//     }
// })
const pacar = document.querySelector("#pacar");
const tombol = document.querySelector("#tombol");
const welcome = document.querySelector(".welcome");
const judul = document.querySelector(".judul");
const formData = document.querySelector(".formData");
const letter = document.querySelector(".letter");
const hint = document.createElement("p");
hint.classList = "hint";
// const zulfikar = pacar.value.toLowerCase();
const container = document.querySelector(".container");
const items = document.querySelectorAll(".item");
const music = this.document.querySelector("#music");
tombol.addEventListener("click", function () {
  if (pacar.value.toLowerCase() === "zulfikar") {
    formData.style.opacity = 0;
    tombol.style.opacity = 0;
    judul.style.fontSize = "60px";
    hint.style.opacity = 0;
    setTimeout(() => {
      judul.style.opacity = 0;
      console.log("gila luuuu");
      letter.style.display = "flex";
    }, 3000);
    setTimeout(() => {
      container.style.display = "flex";
      letter.style.opacity = 1;
      container.style.opacity = 1;
      music.setAttribute("autoplay", "");
      music.play();
      welcome.style.display = "none";
      console.log("gila luuuu");
    }, 7000);
  } else {
    welcome.appendChild(hint);
    hint.innerHTML = "Bukannya Pacar Kamu zulfikar ya namanya?";
  }
});

window.addEventListener("scroll", () => {
  items.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      // Ketika elemen berada di viewport
      item.classList.add("show");
    }
  });
});

const wish = document.querySelector("#wish");
const surat = document.querySelector("#surat");
const btnWish = document.querySelector("#btnWish");
btnWish.addEventListener("click", function () {
  const dataWish = wish.value;
  const encodeData = encodeURIComponent(dataWish);
  const a = document.createElement("a");
  surat.appendChild(a);
  a.setAttribute(
    "href",
    `https://wa.me/6285156005641?text=Keinginan%20kamu,%20${encodeData}`
  );
  a.setAttribute("target", "_blank");
  a.innerHTML = "Kirim";
});
