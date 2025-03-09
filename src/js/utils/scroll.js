// gsap.registerPlugin(ScrollToPlugin);

// const sections = document.querySelectorAll("section");
// let currentIndex = 0;
// let isScrolling = false;
// const SCROLL_DURATION = 0.9; // スクロールアニメーション時間（秒）

// function scrollToSection(index) {
//   if (index < 0 || index >= sections.length || isScrolling) return;

//   isScrolling = true; // スクロール中は入力を無視
//   let targetY = window.innerHeight * index; // 100vh分の固定スクロール位置を計算

//   gsap.to(window, {
//     scrollTo: {
//       y: targetY
//     },
//     duration: SCROLL_DURATION,
//     ease: "power2.inOut",
//     onComplete: () => {
//       currentIndex = index; // アニメーション完了後に currentIndex を更新
//       isScrolling = false; // スクロール完了後に解除
//     },
//   });
// }

// window.addEventListener("wheel", (e) => {
//   if (isScrolling) return; // スクロールアニメーション中は無視
//   e.preventDefault();

//   let direction = e.deltaY > 0 ? 1 : -1;
//   let nextIndex = currentIndex + direction;

//   if (nextIndex >= 0 && nextIndex < sections.length) {
//     scrollToSection(nextIndex);
//   }
// }, {
//   passive: false
// });