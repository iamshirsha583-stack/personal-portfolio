// Select DOM elements
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const root = document.documentElement;
const yearSpan = document.getElementById("year");

// Check saved user preference or fall back to system settings
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Initialize theme on load
if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  root.setAttribute("data-theme", "dark");
  themeIcon.textContent = "☀️";
} else {
  root.setAttribute("data-theme", "light");
  themeIcon.textContent = "🌙";
}

// Toggle light / dark mode on button click
toggleBtn.addEventListener("click", () => {
  const currentTheme = root.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  root.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeIcon.textContent = newTheme === "dark" ? "☀️" : "🌙";
});

// Auto-update footer year
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
