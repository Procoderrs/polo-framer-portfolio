


const circle = document.getElementById('mouse-circle');

    document.addEventListener('mousemove', (e) => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    });




const sky = document.getElementById("sky");

function createStar() {
  const star = document.createElement("div");

  star.className = `
    absolute
    w-[100px]
    h-[1px]
    pointer-events-none
    opacity-0
    [background:linear-gradient(to_left,white,transparent)]
    [transform:rotate(45deg)]
    shoot
  `;

  // Random top-left starting position
  const startX = Math.random() * window.innerWidth * 0.3;
  const startY = Math.random() * window.innerHeight * 0.3;
  star.style.left = `${startX}px`;
  star.style.top = `${startY}px`;

  // Smooth duration
  const duration = Math.random() * 1 + 5.2; // 2.2s to 3.2s
  star.style.animationDuration = `${duration}s`;

  sky.appendChild(star);

  star.addEventListener("animationend", () => {
    star.remove();
  });
}

// Create a new star every 1.2 seconds (adjust as needed)
setInterval(createStar, 800);





/* navbar */
const toggle = document.getElementById('menu-toggle');
  const bar1 = document.getElementById('bar1');
  const bar2 = document.getElementById('bar2');
  const menu = document.getElementById('nav-menu');

  let open = false;

  toggle.addEventListener('click', () => {
    open = !open;

    // Animate to cross
    if (open) {
      bar1.style.transform = "rotate(45deg) translate(4px,4px)";
      bar2.style.transform = "rotate(-45deg) translate(4px,-7px)";
      menu.classList.remove('max-h-0');
      menu.classList.add('max-h-[500px]');
    } else {
      bar1.style.transform = "rotate(0) translateY(0)";
      bar2.style.transform = "rotate(0) translateY(0)";
      menu.classList.remove('max-h-[500px]');
      menu.classList.add('max-h-0');
    }
  });


// jump animation for icon
document.querySelectorAll('.icon-container').forEach(container => {
    const svg = container.querySelector('.icon-svg');
 
    container.addEventListener('mouseenter', () => {
        svg.classList.remove('bounce-reverse');
        void svg.offsetWidth; // Reset animation
        svg.classList.add('bounce');
    });
 
    container.addEventListener('mouseleave', () => {
        svg.classList.remove('bounce');
        void svg.offsetWidth; // Reset animation
        svg.classList.add('bounce-reverse');
    });
});


// Image Swiper
new Swiper('.swiper-images', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

// Text Swiper
new Swiper('.swiper-text', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  speed: 6000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});
