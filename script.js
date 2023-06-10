// Initialising the canvas
var canvas = document.querySelector('#myCanvas'),
    ctx = canvas.getContext('2d');

// Setting up the letters
var letters = '010101010101010101010ズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴヵヶヷ';
letters = letters.split('');

// Setting up the columns
var fontSize = 11;

// Setting up the drops
var drops = [];

// Initialize canvas and columns
function initialize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = canvas.width / fontSize;
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }
}

// Setting up the draw function
function draw() {
  ctx.fillStyle = 'rgba(0, 0, 0, .1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (var i = 0; i < drops.length; i++) {
    var text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillStyle = '#0f0';
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    drops[i]++;
    if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
      drops[i] = 0;
    }
  }
}

// Loop the animation
setInterval(draw, 50);

// Listen to resize event
window.addEventListener('resize', initialize);

// Initial setup
initialize();



const buttons = document.querySelectorAll('.btn, .btn2, .btn3');

buttons.forEach(button => {
  const soundFile = button.dataset.sound;
  
  // Create an audio element
  const audio = new Audio(soundFile);
  
  button.addEventListener('mouseenter', () => {
    audio.currentTime = 0; // Reset audio to start
    audio.play();
  });
});
