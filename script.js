document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("themeToggle");
  const body = document.body;

  // Verifica tema salvo
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
    toggleBtn.textContent = savedTheme === "dark" ? "🌙" : "☀️";
  } else {
    // Tema padrão
    body.classList.add("dark");
    toggleBtn.textContent = "🌙";
  }

  // Evento de clique
  toggleBtn.addEventListener("click", () => {
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      body.classList.add("light");
      toggleBtn.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light");
      body.classList.add("dark");
      toggleBtn.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
});
