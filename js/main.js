const badgesEl = document.querySelector('.badges');

//debounce, throttle
//debounce와 throttle은 이벤트가 연속적으로 발생하여 자원을 낭비하게 되는 것을 방지하는 기능을 말한다.

// window.addEventListener('scroll', _.throttle(()=>{
//   if(window.scrollY){
//     gsap.to(badgesEl, .6,{
//       opacity: 0,
//       display: 'none',
//     });
//   } else {
//     gsap.to(badgesEl, .6,{
//       opacity: 1,
//       display: 'block',
//     });
//   }
// }, 300));

//바닐라 자바스크립트로 스크롤 애니메이션 구현

window.addEventListener('scroll', _.throttle(()=>{
  if(window.scrollY > 500){
    badgesEl.classList.add('opacityZero');
    if(+(getComputedStyle(badgesEl).opacity) === 0){
      badgesEl.style.visibility = 'hidden';
    }
  } else {
    badgesEl.style.visibility = 'visible';
    badgesEl.classList.remove('opacityZero');
  }
}, 200));

//배너 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, index) => {
  //gsap.to(요소, 지속시간(transition), 옵션(객체))
  gsap.to(fadeEl, 1, {
    //delay(css : animation-dalay) 애니메이션 수행을 시작하기 전에 애니메이션을 요소에 적용하는 데 걸리는 시간을 지정
    delay: (index + 1)* .7, // index에 따라서 0.7, 1.4, 2.1, 2.7 후에 실행
    opacity: 1,
  });
})

//new Swiper(선택자, {옵션})
const noticeLineSwiper = new Swiper('.notice-line .mySwiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

const promotionSwiper = new Swiper('.promotion .mySwiper',{
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false, //사용자가 슬라이드를 조작 하더라도 슬라이드가 멈추지 않게하는 프로퍼티
  },
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next", //슬라이드 다음 버튼
    prevEl: ".promotion .swiper-button-prev", //슬라이드 이전 버튼
  }
});

const promotionToggleBtn = document.querySelector('.inner__right .toggle-promotion');
const promotionSection = document.querySelector('.notice .promotion');

promotionToggleBtn.addEventListener('click', (e)=>{
  promotionSection.classList.toggle('promotionView');
});

const floatingEls = document.querySelectorAll('.floating');

const random = (min,max) => {
  //toFixed : 아규먼트로 전해준 숫자 만큼의 소수점을 올린다 ex) Number('0.123').toFixed(2) => 0.13
  //parseFloat : 부동 소수점 숫자를 반환한다(실수)
  return parseFloat((Math.random() * (max - min) + min).toFixed(2)); 
}

const floatingObject = (selector, delay, size) => {
  gsap.to(selector, random(1.5, 2.5),{
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  })
}

floatingObject(floatingEls[0], 1, 15);
floatingObject(floatingEls[1], .5, 25);
floatingObject(floatingEls[2], 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');

spyEls.forEach((spyEl) => {
  new ScrollMagic
  .Scene({
    triggerElement: spyEl,
    triggerHook: .8,
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});

const awasrdsSwiper = new Swiper('.awards .mySwiper',{
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false, //사용자가 슬라이드를 조작 하더라도 슬라이드가 멈추지 않게하는 프로퍼티
  },
  navigation: {
    nextEl: ".awards .swiper-button-next", //슬라이드 다음 버튼
    prevEl: ".awards .swiper-button-prev", //슬라이드 이전 버튼
  },
});