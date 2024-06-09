gsap.registerPlugin(ScrollTrigger);
let titleh = document.querySelector(".title-h");
let titlep = document.querySelector(".title-p");
let title2h = document.querySelector(".title-2h");
let img1 = document.querySelector(".contain-img");
const wrapper = document.querySelector(".mobile-layout");
let pressed = false;
let startX = 0;
wrapper.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = "grabbing";
});
wrapper.addEventListener("mouseleave", function (e) {
  pressed = false;
});
window.addEventListener("mouseup", function (e) {
  pressed = false;
  wrapper.style.cursor = "grab";
});
wrapper.addEventListener("mousemove", function (e) {
  if (!pressed) {
    return;
  }
  this.scrollLeft += startX - e.clientX;
});
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("scrollButton");
  const button1 = document.getElementById("scroll-btn1");
  const button2 = document.getElementById("scroll-btn2");
  const button3 = document.getElementById("scroll-btn3");
  const button4 = document.getElementById("scroll-btn4");
  const button5 = document.getElementById("scroll-btn5");

  button.addEventListener("click", () => {
    gsap.to(window, { scrollTo: { y: 805 } });
  });
  button1.addEventListener("click", () => {
    gsap.to(window, { scrollTo: { y: 1 } });
  });
  button2.addEventListener("click", () => {
    gsap.to(window, { scrollTo: { y: 447 } });
  });
  button3.addEventListener("click", () => {
    gsap.to(window, { scrollTo: { y: 1250 } });
  });
  button4.addEventListener("click", () => {
    gsap.to(window, { scrollTo: { y: 1605 } });
  });
  button5.addEventListener("click", () => {
    gsap.to(window, { scrollTo: { y: 2020 } });
  });
});
gsap.to(".page-1", {
  immediateRender: false,
  autoAlpha: 0,
  top: "100%",
  scrollTrigger: {
    trigger: ".side1",
    start: "10% 10%",
    end: "22% 10%",
    scrub: true,
    onLeave: () => gsap.set(".page-1", { display: "none" }),
    onEnterBack: () => gsap.set(".page-1", { display: "block" }),
  },
});

function testprev() {
  titleh.innerHTML = "250+ Download";
  titlep.innerHTML = "On appstore and google playstore";
  title2h.innerHTML = "ABC 123";
  img1.style.display = "block";
}
function test() {
  titleh.innerHTML = "Blockchain";
  titlep.innerHTML = "The next big revolution";
  title2h.innerHTML = "ABC 456";
  img1.style.display = "none";
}
function test1() {
  titleh.innerHTML = "UX Strategy";
  titlep.innerHTML = "Redifing and Ui design";
  title2h.innerHTML = "ABC 678";
}
function test2() {
  titleh.innerHTML = "Text Headline";
  titlep.innerHTML = "Text headline and footer headline";
  title2h.innerHTML = "ABC 789";
}
function test3() {
  titleh.innerHTML = "Text Headline";
  titlep.innerHTML = "Downloadin ERP solutions in future";
  title2h.innerHTML = "ABC 123";
}
function test4() {
  titleh.innerHTML = "East Asia";
  titlep.innerHTML = "Biggest Classified Country";
  title2h.innerHTML = "ABC 23478";
}
let anim = gsap.from(".title , .title-2", {
  y: 10,
});
ScrollTrigger.create({
  trigger: ".side-1",
  start: "23% 10%",
  end: "51% 10%",
  animation: anim,
  scrup: true,
  onEnter: test,
  onLeaveBack: test,
  toggleActions: "restart complete reverse restart",
});
ScrollTrigger.create({
  trigger: ".side-1",
  start: "10% 10%",
  end: "23% 10%",
  animation: anim,
  scrup: true,
  onLeaveBack: testprev,
  toggleActions: "restart complete reverse restart",
});
ScrollTrigger.create({
  trigger: ".side-1",
  start: "52% 10%",
  end: "80% 10%",
  animation: anim,
  scrup: true,
  onEnter: test1,
  onLeaveBack: test1,
  toggleActions: "restart complete reverse restart",
});
ScrollTrigger.create({
  trigger: ".side-1",
  start: "80% 10%",
  end: "106% 10%",
  animation: anim,
  scrup: true,
  onEnter: test2,
  onLeaveBack: test2,
  toggleActions: "restart complete reverse restart",
});
ScrollTrigger.create({
  trigger: ".side-1",
  start: "106% 10%",
  end: "130% 10%",
  animation: anim,
  scrup: true,
  onEnter: test3,
  onLeaveBack: test3,
  toggleActions: "restart complete reverse restart",
});
ScrollTrigger.create({
  trigger: ".side-1",
  start: "130% 10%",
  animation: anim,
  scrup: true,
  onEnter: test4,
  onLeaveBack: test4,
  toggleActions: "restart complete reverse restart",
});
gsap.to(".img-2-1", {
  immediateRender: false,
  display: "block",
  top: "18%",
  scrollTrigger: {
    trigger: ".side1",
    start: "23% 10%",
    end: "35% 10%",
    scrub: true,
  },
});
gsap.to(".img-2-1", {
  immediateRender: false,
  display: "block",
  y: -100,
  scrollTrigger: {
    trigger: ".side1",
    start: "40% 10%",
    end: "52% 10%",
    scrub: true,
  },
});
gsap.to(".img-2-2", {
  immediateRender: false,
  display: "block",
  bottom: "6%",
  scrollTrigger: {
    trigger: ".side1",
    start: "23% 10%",
    end: "35% 10%",
    scrub: true,
  },
});
gsap.to(".img-2-2", {
  immediateRender: false,
  display: "block",
  bottom: "-50%",
  scrollTrigger: {
    trigger: ".side1",
    start: "40% 10%",
    end: "52% 10%",
    scrub: true,
  },
});
gsap.to(".mk", {
  immediateRender: false,
  display: "none",
  scrollTrigger: {
    trigger: ".side1",
    start: "52% 10%",
    end: "52% 10%",
    scrub: true,
    marker: true,
  },
});
gsap.to(".page-2", {
  immediateRender: false,
  display: "block",
  top: "57%",
  scrollTrigger: {
    trigger: ".side1",
    start: "49% 10%",
    end: "64% 10%",
    scrub: true,
    onEnter: () => gsap.set(".page-2", { display: "block" }),
    onLeaveBack: () => gsap.set(".page-2", { display: "none" }),
  },
});
gsap.to(".page-3", {
  immediateRender: false,
  display: "block",
  top: "-7%",
  scrollTrigger: {
    trigger: ".side1",
    start: "49% 10%",
    end: "64% 10%",
    scrub: true,
  },
});
gsap.to(".page-3", {
  immediateRender: false,
  display: "block",
  top: "30%",
  scrollTrigger: {
    trigger: ".side1",
    start: "69% 10%",
    end: "81% 10%",
    scrub: true,
  },
});
gsap.to(".page-3", {
  immediateRender: false,
  display: "none",
  scrollTrigger: {
    trigger: ".side1",
    start: "81% 10%",
    end: "81% 10%",
    scrub: true,
  },
});
gsap.to(".xyz-1", {
  immediateRender: false,
  display: "block",
  top: "-10%",
  scrollTrigger: {
    trigger: ".side1",
    start: "81% 10%",
    end: "93% 10%",
    scrub: true,
  },
});
gsap.to(".xyz-2", {
  immediateRender: false,
  display: "block",
  top: "5%",
  scrollTrigger: {
    trigger: ".side1",
    start: "81% 10%",
    end: "93% 10%",
    scrub: true,
  },
});
gsap.to(".xyz-3", {
  immediateRender: false,
  display: "block",
  top: "20%",
  scrollTrigger: {
    trigger: ".side1",
    start: "81% 10%",
    end: "93% 10%",
    scrub: true,
  },
});
gsap.to(".xyz-1", {
  autoAlpha: 0,
  y: -100,
  scrollTrigger: {
    trigger: ".side1",
    start: "97% 10%",
    end: "105% 10%",
    scrub: true,
  },
});
gsap.to(".xyz-2", {
  autoAlpha: 0,
  x: 100,
  scrollTrigger: {
    trigger: ".side1",
    start: "97% 10%",
    end: "105% 10%",
    scrub: true,
  },
});
gsap.to(".xyz-3", {
  autoAlpha: 0,
  y: 300,
  scrollTrigger: {
    trigger: ".side1",
    start: "97% 10%",
    end: "105% 10%",
    scrub: true,
  },
});
gsap.to(".img-5-1", {
  display: "block",
  top: "12%",
  scrollTrigger: {
    trigger: ".side1",
    start: "105% 10%",
    end: "117% 10%",
    scrub: true,
  },
});
gsap.to(".img-5-1", {
  y: 300,
  autoAlpha: 0,
  scrollTrigger: {
    trigger: ".side1",
    start: "122% 10%",
    end: "130% 10%",
    scrub: true,
  },
});
gsap.to(".contain , .path-slider", {
  immediateRender: false,
  backgroundColor: "#2979FF",
  scrollTrigger: {
    trigger: ".side1",
    start: "23% 10%",
    end: "25% 10%",
    scrub: true,
  },
});
gsap.to(".the-line", {
  immediateRender: false,

  strokeDasharray: 130,
  scrollTrigger: {
    trigger: ".side1",
    start: "20% 10%",
    end: "37% 10%",
    scrub: true,
  },
});
gsap.to(".the-line", {
  immediateRender: false,
  strokeDasharray: 410,
  scrollTrigger: {
    trigger: ".side1",
    start: "38% 10%",
    end: "64% 10%",
    scrub: true,
  },
});
gsap.to(".the-line", {
  immediateRender: false,
  strokeDasharray: 540,
  scrollTrigger: {
    trigger: ".side1",
    start: "64% 10%",
    end: "85% 10%",
    scrub: true,
  },
});
gsap.to(".the-line", {
  immediateRender: false,
  strokeDasharray: 670,
  scrollTrigger: {
    trigger: ".side1",
    start: "106% 10%",
    end: "121% 10%",
    scrub: true,
  },
});
gsap.to(".the-line", {
  immediateRender: false,
  strokeDasharray: 1000,
  scrollTrigger: {
    trigger: ".side1",
    start: "121% 10%",
    start: "140% 10%",
    scrub: true,
  },
});
gsap.to(".contain , .path-slider", {
  immediateRender: false,
  backgroundColor: "#00264A",
  scrollTrigger: {
    trigger: ".side1",
    start: "55% 10%",
    end: "57% 10%",
    scrub: true,
  },
});
gsap.to(".contain , .path-slider", {
  immediateRender: false,
  backgroundColor: "#007FFF",
  scrollTrigger: {
    trigger: ".side1",
    start: "80% 10%",
    end: "82% 10%",
    scrub: true,
  },
});
gsap.to(".contain , .path-slider", {
  immediateRender: false,
  backgroundColor: "#2243b6",
  scrollTrigger: {
    trigger: ".side1",
    start: "106% 10%",
    end: "108% 10%",
    scrub: true,
  },
});
gsap.to(".contain , .path-slider", {
  immediateRender: false,
  backgroundColor: "hsl(148, 84%, 30%)",
  scrollTrigger: {
    trigger: ".side1",
    start: "130% 10%",
    end: "132% 10%",
    scrub: true,
  },
});
function applyScrollTriggerAnimation(target, color, trigger, start, end) {
  gsap.to(target, {
    immediateRender: false,
    backgroundColor: color,
    scrollTrigger: {
      trigger: trigger,
      start: start,
      end: end,
      scrub: true,
    },
  });
}
applyScrollTriggerAnimation(
  ".slide-1",
  "#0D47A1",
  ".side1",
  "23% 10%",
  "28% 10%"
);
applyScrollTriggerAnimation(
  ".slide-1",
  "#041322",
  ".side1",
  "52% 10%",
  "55% 10%"
);
applyScrollTriggerAnimation(
  ".slide-1",
  "#48CAE4",
  ".side1",
  "80% 10%",
  "85% 10%"
);

applyScrollTriggerAnimation(
  ".slide-2",
  "#48CAE4",
  ".side1",
  "80% 10%",
  "85% 10%"
);
applyScrollTriggerAnimation(
  ".slide-2",
  "yellow",
  ".side1",
  "106% 10%",
  "111% 10%"
);
applyScrollTriggerAnimation(
  ".slide-2",
  "aquamarine",
  ".side1",
  "130% 10%",
  "130% 10%"
);
