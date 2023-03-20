const electron = require('electron');

function hrefWorker(el) {
  el.addEventListener("click", () => {
    const link = el.getAttribute("href");
    electron.shell.openExternal(link);
  })
}
hrefWorker(document.getElementById("landing_custom_header__discord"));

document.getElementById("launch_button").addEventListener("click", () => {
  document.getElementById("landing_custom_main").style.display = "none";
  document.getElementById("landing_custom_after").style.display = "";
});
