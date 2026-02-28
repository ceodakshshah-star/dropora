// Ambient parallax
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".ambient").forEach((layer, i) => {
    const x = (e.clientX / window.innerWidth - 0.5) * (20 + i * 10);
    const y = (e.clientY / window.innerHeight - 0.5) * (20 + i * 10);
    layer.style.transform = `translate(${x}px, ${y}px)`;
  });
});

// FAQ toggle
function toggleFAQ(el) {
  const p = el.querySelector("p");
  p.style.display = p.style.display === "block" ? "none" : "block";
}

// Order form modal
function openForm() {
  document.getElementById("orderForm").style.display = "flex";
}
function closeForm() {
  document.getElementById("orderForm").style.display = "none";
}