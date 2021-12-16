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
            // parent[i].style.transitionProperty = 'stroke';
            // parent[i].style.transitionDuration = '5s'
            // parent[i].style.transitionTimingFunction = 'ease';
            // parent[i].style.stroke = 'none';

            parent[i].style.strokeDashArray = 'inherit';
            parent[i].style.strokeDashoffset = 'inherit';
            parent[i].style.animationName = 'goldtowhite';
            parent[i].style.animationDuration = '10s !important';
            parent[i].style.animationDirection = 'forwards !important';
            parent[i].style.animationTimingFunction = 'ease !important';
            parent[i].style.animationDelay = '500ms';
          } else {
            console.log('not');
          }
        }


        document.removeEventListener('animationend', function(evt) {
          return;
        });
      }
    }, 3300);
  });
})();
