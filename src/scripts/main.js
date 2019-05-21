'use strict';

const thumbs = document.getElementById('thumbs');
const bigImg = document.getElementById('largeImg');

thumbs.onclick = function() {
  if (event.target.tagName === 'IMG') {
    bigImg.src = event.target.src;
    bigImg.alt = event.target.alt;
  }
};
