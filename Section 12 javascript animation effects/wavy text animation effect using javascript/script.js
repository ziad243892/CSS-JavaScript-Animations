const text = document.getElementById("wavy-text");
const originalText = text.textContent;
text.textContent = "";

const chars = [...originalText];
chars.forEach((char) => {
  const span = document.createElement("span");
  span.textContent = char;
  text.appendChild(span);
});

const spans = text.querySelectorAll("span");
let angle = 0;

function animate() {
  angle += 0.1;

  spans.forEach((span, index) => {
    const wave = Math.sin(angle + index * 0.5) * 10; // amplitude = 10
    span.style.transform = `translateY(${wave}px)`;
  });

  requestAnimationFrame(animate);
}

animate();
