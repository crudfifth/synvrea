gsap.set(".cursor", {
  xPercent: -50,
  yPercent: -50
});

const cursor = document.querySelector(".cursor");
const targets = document.querySelectorAll("a, button");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.3,
    ease: "power2.out"
  });
});

// リンクやボタンにホバーしたらストーカーを拡大
targets.forEach(target => {
  target.addEventListener("mouseenter", () => {
    cursor.classList.add("hover");
  });
  target.addEventListener("mouseleave", () => {
    cursor.classList.remove("hover");
  });
});