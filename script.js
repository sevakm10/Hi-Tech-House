let nav = document.getElementById("nav");
let header = document.getElementById("header");
let info_1_blok = document.querySelectorAll(".info_1_blok");
let anim_right = document.getElementById("anim_right")

let arrayBackgroundImage = ["url(img/home1.jpeg)","url(img/home2.jpeg)","url(img/home3.jpeg)","url(img/home4.jpeg)"]
let arrayElement = 0;

let circle_icon_1 = document.getElementById("circle_icon_1");
let circle_icon_2 = document.getElementById("circle_icon_2");
let circle_icon_3 = document.getElementById("circle_icon_3");
let circle_icon_4 = document.getElementById("circle_icon_4");

let info_3_img1 = document.getElementById("info_3_img1")
let info_3_img2 = document.getElementById("info_3_img2")

let price_anim1 = document.getElementById("price_anim1")
let price_anim2 = document.getElementById("price_anim2")
let price_anim3 = document.getElementById("price_anim3")
let price_anim4 = document.getElementById("price_anim4")



// function backgroundImageUpdate(){
//     header.style.backgroundImage = arrayBackgroundImage[arrayElement]
//     arrayElement++
//     if(arrayElement >= 4){
//         arrayElement = 0
//     }
// }
// setInterval(backgroundImageUpdate,10000) // Функция меняет фон header каждые 5 секунд

window.addEventListener("scroll", function(){
    if(window.scrollY > 10){
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.8)"
    }
    else{
        nav.style.backgroundColor = "transparent"
    }
})

function obs (name,ms,anim) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {      
        setTimeout(() => {
          entry.target.style.visibility = "visible";
          entry.target.style.animation = anim;
        }, ms);
      }
    });
  }, { threshold: 0.5 }); 
  observer.observe(name);
}


info_1_blok.forEach(box => {
  obs(box,100,"text-focus-in 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both");
});
obs(anim_right,100,"fade-in-bottom 0.6s cubic-bezier(0.390, 0.575, 0.565, 1.000) both")
obs(circle_icon_1,0,"slide-in-blurred-left 1.2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both")
obs(circle_icon_2,200,"slide-in-blurred-left 1.2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both")
obs(circle_icon_3,400,"slide-in-blurred-left 1.2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both")
obs(circle_icon_4,600,"slide-in-blurred-left 1.2s cubic-bezier(0.230, 1.000, 0.320, 1.000) both")

obs(info_3_img1,50,"fade-in-left 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both")
obs(info_3_img2,50,"fade-in-right 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both")

obs(price_anim1,100,"fade-in-bottom 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both")
obs(price_anim2,300,"fade-in-bottom 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both")
obs(price_anim3,500,"fade-in-bottom 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both")
obs(price_anim4,700,"fade-in-bottom 0.8s cubic-bezier(0.390, 0.575, 0.565, 1.000) both")

let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  // },
});
swiper.slideTo(3); // делаем активным третий слайд


document.querySelectorAll('.question').forEach((question, index) => {
  const answer = document.getElementById(`answer_${index + 1}`);
  const arrow = document.getElementById(`openCloseArrow_${index+1}`)
  question.addEventListener('click', () => {
      if (!answer.style.height) {
          closeAllAnswers(); // Закрываем все ответы перед открытием нового
          answer.style.height = '110px';
          question.style.backgroundColor = "rgb(206, 203, 203)"
          arrow.style.transform = "rotate(0deg)"
      } else {
          answer.style.height = null;
          question.style.backgroundColor = "rgb(241, 241, 241)"
          arrow.style.transform = "rotate(-90deg)"
      }
  });
});

function closeAllAnswers() {
  document.querySelectorAll('.hiddenText').forEach(answer => {
      answer.style.height = null;
  });
  document.querySelectorAll(".question").forEach(question => {
    question.style.backgroundColor = "rgb(241, 241, 241)"
  })
  document.querySelectorAll(".openCloseArrow").forEach(arrow => {
    arrow.style.transform = 'rotate(-90deg)'
  })
}

let swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  }
);

