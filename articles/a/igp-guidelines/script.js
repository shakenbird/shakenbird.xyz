function copyFunction() {
navigator.clipboard.writeText(window.location.href).then(() => {
    alert(`Copied ${window.location.href} to your clipboard.`)
  })
}
function themeToggler() {
  document.body.classList.toggle("dark")
  document.getElementById("note").classList.toggle("danger-dark")
  document.getElementById("moon").classList.toggle("light-icon")
  document.getElementById("sun").classList.toggle("dark-icon")
  document.getElementById("tag").classList.toggle("discord")
  document.getElementById("author").classList.toggle("dark-author")
}
function printFunction() {
  window.print()
}
function formatDaysAgo(value, locale) {
  const date = new Date(value);
  const deltaDays = (date.getTime() - Date.now()) / (1000 * 3600 * 24);
  const formatter = new Intl.RelativeTimeFormat(locale);
  return formatter.format(Math.round(deltaDays), 'days');
}
