// document.addEventListener('DOMContentLoaded', () => {
//   const cursor = document.querySelector('.cursor');

//   window.addEventListener('mousemove', (e) => {
//     gsap.to(cursor, {
//       duration: 0.1,
//       x: e.clientX,
//       y: e.clientY
//     });
//   });

//   const hoberTargets = document.querySelectorAll('button, a');

//   hoverTargets.forEach(target => {
//     target.addEventListener('mousemove', () => cursor.classList.add('hover'));
//     target.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
//   });
// });