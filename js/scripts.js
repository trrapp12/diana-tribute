(function () {
let j = 0;
const parent = document.getElementById('logo').children;
// console.log(parent);
    document.addEventListener('animationend', function(evt) {setTimeout( () => {
      if (evt.target.nodeName === 'path' && j === 0) {
        j++;
        console.log(parent);

        for (let i = 0; i < parent.length; i++) {
          // console.log(parent[i]);
          if (parent[i].nodeName === 'path') {
            parent[i].style.transitionProperty = 'stroke';
            parent[i].style.transitionTimingFunction = 'ease-in';
            parent[i].style.transitionDelay = '3s';
            parent[i].style.stroke = 'none';

          } else {
            console.log("not ");
          }
        }


        document.removeEventListener('animationend', function(evt) {
          return;
        });
      }
    }, 3100);
  });
})();
