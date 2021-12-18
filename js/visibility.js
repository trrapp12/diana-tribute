// (() => {
//   console.log('visibility.js is fired');
//     let observer = new IntersectionObserver( function (entries, observer) {
//       entries.forEach(entry => {
//         if(entry.isIntersecting) {
//           console.log("entry is intersecting" + entry.target.innerHTML);
//           entry.target.classList.add('javascript-card-visibility');
//           observer.unobserve(entry.target);
//         }
//       });
//     }, {threshold: 1});
//
//   document.querySelectorAll('card').forEach(element => {observer.observe(element); });
//
// })();

(() => {

let observer = new IntersectionObserver(myObserverCallback, {threshold: 0.3});

function myObserverCallback(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('javascript-card-visibility');
      observer.unobserve(entry.target);
    }
  });
}

document.querySelectorAll('.card:nth-child(even)').forEach(element => {observer.observe(element); });

})();
