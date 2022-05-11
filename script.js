if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.body.classList.toggle("dark")
  document.getElementById("moon").classList.toggle("light-icon")
  document.getElementById("sun").classList.toggle("dark-icon")
  document.getElementById("main").classList.toggle("main")
}
function themeToggler() {
  document.body.classList.toggle("dark")
  document.getElementById("moon").classList.toggle("light-icon")
  document.getElementById("sun").classList.toggle("dark-icon")
  document.getElementById("main").classList.toggle("main")
  document.getElementsByClassName("name").classList.toggle("dark-name")
}
