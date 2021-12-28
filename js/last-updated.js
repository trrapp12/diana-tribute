(() => {
  window.addEventListener('load', function() {
    const lastUpdated = document.getElementById('last-updated');
    lastUpdated.innerText = `Last updated ${document.lastModified}`;
    lastUpdated.style.width = "30%";
    lastUpdated.style.margin = "auto";
  });
})();
