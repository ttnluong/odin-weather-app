import * as state from "./state.js";

import spriteUrl from "./assets/lucide-sprite.svg";

// sidebar
// ==========================================

function createIcon(iconId, color) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("sidebar-icon");

  if (color) {
    svg.style.color = color;
  }

  const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
  use.setAttribute("href", `${spriteUrl}#${iconId}`);

  svg.appendChild(use);
  return svg;
}
