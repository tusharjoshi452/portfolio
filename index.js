const circle = document.querySelectorAll(".add");
const p = document.querySelector(".p");
const i = document.querySelector(".i");
const c2 = document.querySelector(".circle1");
const head = document.querySelector(".head");
const nav = document.querySelector("nav");
const close = document.querySelector(".cross");
const li = document.querySelectorAll("li");
const mp = document.querySelector(".mainportfolio");
var WIDTH_LIMIT = 550;
var windowWidth = window.innerWidth;
var toop = 0;
console.log(window.innerWidth);
p.addEventListener("click", () => {
  circle.forEach((elem) => {
    elem.classList.add("circle");
    elem.classList.remove("add");
  });

  setTimeout(() => {
    p.classList.add("not");
    p.classList.remove("p");
  }, 500);

  if (windowWidth <= WIDTH_LIMIT) {
    const c1 = document.querySelectorAll(".circle");
    const c2 = document.querySelector(".circle1");
    console.log(c2);
    setTimeout(() => {
      c1.forEach((elem) => {
        elem.style.left = `${30}px`;
        elem.style.bottom = `${30}px`;
        elem.classList.add("nav");
      });
    }, 1000);
    setTimeout(() => {
      c1.forEach((elem) => {
        var windowHeight = window.innerHeight;
        var divOffset = c2.getBoundingClientRect().top + window.scrollY;
        var divHeight = c2.offsetHeight;
        var delta = windowHeight - (divOffset + divHeight);
        elem.style.bottom = `${delta}px`;
        elem.style.left = `${c2.offsetLeft}px`;
        elem.classList.add("ani");
      });
      i.classList.add("so");
    }, 800);
    setTimeout(() => {
      mp.style.display = "block";
      if (mp.style.display !== "none") {
        // Call AOS refresh function to reanimate the element
        AOS.refresh();
      }
    }, 1800);
  } else {
    const c1 = document.querySelectorAll(".circle");
    setTimeout(() => {
      c1.forEach((elem) => {
        elem.classList.add("ani");
        elem.style.top = `${c2.offsetTop}px`;
      });
    }, 800);
    setTimeout(() => {
      c1.forEach((elem) => {
        elem.style.top = `${0}px`;
      });
    }, 1000);
    setTimeout(() => {
      c1.forEach((elem) => {
        elem.classList.add("desktopnav");
      });
    }, 2000);

    const ul = document.querySelector("ul");
    ul.classList.add("uld");
    setTimeout(() => {
      li.forEach((elem) => {
        nav.classList.add("navd");
        elem.classList.add("lid");
      });
    }, 800);
    setTimeout(() => {
      li.forEach((elem) => {
        elem.classList.add("aninavd");
      });
      head.classList.add("aninavd");
    }, 1000);
    setTimeout(() => {
      mp.style.display = "block";
      if (mp.style.display !== "none") {
        // Call AOS refresh function to reanimate the element
        AOS.refresh();
      }
    }, 3000);
    close.style.display = "none";
  }
});

let cloose = () => {
  c2.classList.remove("navbar");
  c2.style.left = "30px";
  c2.style.bottom = "30px";
  i.style.display = "inline";
  nav.classList.remove("soo");
};
if (windowWidth <= WIDTH_LIMIT) {
  i.addEventListener("click", () => {
    c2.classList.add("navbar");
    c2.style.left = "0px";
    c2.style.bottom = "0px";
    i.style.display = "none";
    const ul = document.querySelector("ul");
    ul.classList.add("ulm");
    setTimeout(() => {
      nav.classList.add("soo");
      li.forEach((elem) => {
        elem.classList.add("lim");
        elem.classList.add("aninav");
      });
      close.classList.add("aniclo");
      const lii = document.querySelectorAll(".lim");
      lii.forEach((elem) => {
        elem.addEventListener("click", cloose);
      });
    }, 500);
  });
  close.addEventListener("click", cloose);
}

const trailer = document.querySelector(".trailer");
const sec = document.querySelector(".sec1");
const animatetrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px,${y}px)`,
  };
  trailer.animate(keyframes, {
    duration: 500,
    fill: "forwards",
    backgroundColor:"pink",
  });
};
sec.onmousemove = (e) => {
  const interact = e.target.closest(".interact"),
    interacting = interact !== null;
  animatetrailer(e, interacting);
};

const item = document.querySelectorAll('.word');
item.forEach(element => {
  element.addEventListener('mouseover', function(e) {
    if(element) element.classList.add('ani');
  });
  
  element.addEventListener('animationend', function(e) {
    if(element) element.classList.remove('ani');
  });
});

