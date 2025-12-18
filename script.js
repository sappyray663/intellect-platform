const toggle=document.getElementById("themeToggle");

function updateIcon() {
  toggle.textContent = document.body.classList.contains("dark") ? "☀" : "☾";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateIcon();
});

updateIcon();
