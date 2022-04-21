function copyFunction() {
  navigator.clipboard.writeText(window.location.href).then(() => {
  alert(`Copied ${window.location.href} to your clipboard.`)
})
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
document.getElementById("post").innerHTML = "Updated " + formatDaysAgo(new Date('2022-04-18'))
