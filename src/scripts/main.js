'use strict';

const thumbs = document.getElementById('thumbs');
const bigImg = [...document.getElementById('largeImg').children][0];

thumbs.onclick = function() {
  bigImg.src = event.target.src;
  bigImg.alt = event.target.alt;
  console.log(event.target.src, event.target.alt);
};
