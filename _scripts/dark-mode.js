/* Theme cycle: system → light → dark → system (matching LION's behavior).
   Applied in <head> to avoid light-theme flash on dark-mode loads. */
(function () {
  "use strict";
  var root = document.documentElement;
  var key = "mcci-theme";
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  function readSetting() {
    try {
      var saved = window.localStorage.getItem(key);
      if (saved === "system" || saved === "light" || saved === "dark") return saved;
      // Legacy setting used by earlier versions of the site.
      var legacy = window.localStorage.getItem("dark-mode");
      if (legacy === "true") return "dark";
    } catch (e) { /* Private browsing may disable storage. */ }
    return "system";
  }
  function render(setting) {
    var dark = setting === "dark" || (setting === "system" && !!(media && media.matches));
    root.setAttribute("data-dark", dark ? "true" : "false");
    root.setAttribute("data-theme-setting", setting);
    var btn = document.getElementById("mcci-theme-toggle");
    if (!btn) return;
    var en = root.lang === "en";
    var labels = en
      ? {system:"System theme", light:"Light theme", dark:"Dark theme"}
      : {system:"跟随系统", light:"浅色主题", dark:"深色主题"};
    var next = en ? "Click to change theme" : "点击切换主题";
    btn.setAttribute("aria-label", labels[setting] + " · " + next);
    btn.setAttribute("title", labels[setting] + " · " + next);
    var icon = btn.querySelector(".mcci-theme-icon");
    if (icon) icon.textContent = setting === "system" ? "◐" : setting === "light" ? "☀" : "☾";
  }
  var setting = readSetting();
  render(setting);
  document.addEventListener("DOMContentLoaded", function () {
    render(setting);
    var button = document.getElementById("mcci-theme-toggle");
    if (button) button.addEventListener("click", function () {
      setting = setting === "system" ? "light" : setting === "light" ? "dark" : "system";
      try { window.localStorage.setItem(key, setting); } catch (e) {}
      render(setting);
    });
  });
  if (media) {
    var onPreferenceChange = function () { if (setting === "system") render("system"); };
    if (media.addEventListener) media.addEventListener("change", onPreferenceChange);
    else if (media.addListener) media.addListener(onPreferenceChange);
  }
})();
