(() => {
  let count = 1;
  const button = document.getElementById('button');

  button.addEventListener('click', (evt) => {
    if (evt.target.className === 'inner-arrow' && count <= 29) {
      count++;
      window.location.href = `#event_${count}`;
    } else if (evt.target.className === 'inner-arrow' && count >= 29) {
      count = 0;
      window.location.href = `#event_${count}`;
    } else {
      console.log('oops');
    }
  })

})();
