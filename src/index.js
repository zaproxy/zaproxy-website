// JS Goes here - ES6 supported

import "./css/main.css";
import Glide from '@glidejs/glide'

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");

const glide = new Glide('.glide', {
  autoplay: 4000

})

glide.mount()
