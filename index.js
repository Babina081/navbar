var mainListDiv = document.getElementById('mainListDiv');

var mediaButton = document.getElementById('mediaButton');

mediaButton.onclick = function () {
  'use strict';
  mainListDiv.classList.toggle('showList');
  mediaButton.classList.toggle('active');
};
