/* MCCI theme control: System / Light / Dark.
   The first click always changes the actual color scheme. */
(function () {
  "use strict";
  var root = document.documentElement;
  var key = "mcci-theme";
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function systemIsDark() {
    return !!(media && media.matches);
  }

  function readSetting() {
    try {
      var saved = window.localStorage.getItem(key);
      if (saved === "system" || saved === "light" || saved === "dark") return saved;
      if (window.localStorage.getItem("dark-mode") === "true") return "dark";
    } catch (error) { /* Storage can be disabled. */ }
    return "system";
  }

  var setting = readSetting();

  function applyTheme() {
    var dark = setting === "dark" || (setting === "system" && systemIsDark());
    root.setAttribute("data-dark", dark ? "true" : "false");
    root.setAttribute("data-theme-setting", setting);
    root.style.colorScheme = dark ? "dark" : "light";

    var button = document.getElementById("mcci-theme-toggle");
    if (!button) return;
    var english = root.lang === "en";
    var names = english
      ? { system: "System", light: "Light", dark: "Dark" }
      : { system: "自动", light: "浅色", dark: "深色" };
    var icons = { system: "◐", light: "☀", dark: "☾" };
    var hint = english ? "Click to switch theme" : "点击切换主题";
    var label = button.querySelector(".mcci-theme-label");
    var icon = button.querySelector(".mcci-theme-icon");
    if (label) label.textContent = names[setting];
    if (icon) icon.textContent = icons[setting];
    button.setAttribute("aria-label", names[setting] + " · " + hint);
    button.setAttribute("title", names[setting] + " · " + hint);
    button.setAttribute("data-theme", setting);
  }

  function nextSetting(current) {
    // When system mode already looks light, skip directly to dark (and vice versa).
    // This prevents the first click from appearing to do nothing.
    var sequence = systemIsDark()
      ? ["system", "light", "dark"]
      : ["system", "dark", "light"];
    var i = sequence.indexOf(current);
    return sequence[(i + 1) % sequence.length];
  }

  function initButton() {
    var button = document.getElementById("mcci-theme-toggle");
    if (button && !button.hasAttribute("data-theme-ready")) {
      button.setAttribute("data-theme-ready", "true");
      button.addEventListener("click", function (event) {
        event.preventDefault();
        setting = nextSetting(setting);
        try { window.localStorage.setItem(key, setting); } catch (error) {}
        applyTheme();
      });
    }
    applyTheme();
  }

  // Run as early as possible to prevent theme flash, but do not assume
  // whether the script was loaded before or after DOMContentLoaded.
  applyTheme();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initButton, { once: true });
  } else {
    initButton();
  }

  if (media) {
    var onSystemChange = function () {
      if (setting === "system") applyTheme();
    };
    if (media.addEventListener) media.addEventListener("change", onSystemChange);
    else if (media.addListener) media.addListener(onSystemChange);
  }
  window.addEventListener("storage", function (event) {
    if (event.key === key) {
      setting = readSetting();
      applyTheme();
    }
  });
})();
