(() => {
  let count = 1;
  const button = document.getElementById('button');

  button.addEventListener('click', (evt) => {
    if (evt.target.className === 'inner-arrow' && count < 35) {
      document.getElementById('button').classList.remove('secondspin')
      count++;
      window.location.href = `#event_${count}`;
      console.log(count);
    } else if (evt.target.className === 'inner-arrow' && count === 35) {
      count++;
      document.getElementById('button').classList.add('spin')
      window.location.href = `#event_${count}`;
      console.log(count);
    } else if (evt.target.className === 'inner-arrow' && count > 35) {
      count = 0;
      document.getElementById('button').classList.remove('spin');
      document.getElementById('button').classList.add('secondspin')
      window.location.href = `#event_${count}`;
      console.log(count);
    } else {
      console.log('oops');
    }
  })

})();
