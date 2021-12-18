// (()=> {
//   const button = document.getElementById('button');
//   let dynamicId = 1;
//
//   let increment = function(dynamicId) {
//     console.log("firiing increment, dynamicId is: " + dynamicId)
//     let newId = dynamicId + 1;
//     return newId;
//   };
//
//   let createHref = function(newId) {
//     conosle.log("firing createHref. newId is: " + newId)
//     let targetHref = `#event_${counter(newId)}`;
//     return targetHref;
//   };
//
//   function masterFunc(increment, createHref) {
//       increment(dynamicId);
//       window.location.href = createHref(newId);
//   };
//
//   button.addEventListener('click', (evt, increment, createHref, masterFunc) => {
//     if (evt.target.className === 'inner-arrow') {
//         masterFunc();
//       } else {
//         console.log("button not registered")
//       }
//   })
// })();

(() => {
  let count = 1;
  const button = document.getElementById('button');

  button.addEventListener('click', (evt) => {
    if (evt.target.className === 'inner-arrow') {
      count++;
      window.location.href = `#event_${count}`
    } else {
      console.log('outside of button')
    }
  })

})();
