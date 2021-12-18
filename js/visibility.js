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

let observer2 = new IntersectionObserver(myObserverCallback2, {threshold: 1});

function myObserverCallback2(entries, observer2) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      let count = 0;
      document.getElementById('button').classList.add('spin');
      window.location.href = `#event_${count}`;
      observer2.unobserve(entry.target);
    }
  });
}

document.querySelectorAll('.event_32').forEach(element => {observer2.observe(element); });

})();
