import * as state from "./state.js";
import * as render from "./render.js";

export function refresh() {
  render.displaySidebar();
  render.displayHeader();
  render.displayTasks();
}

// projects / sidebar
// ==========================================

function openProjectModalForAdd() {
  document.getElementById("add-project-btn").addEventListener("click", () => {
    render.displayProjectModalForAdd();
  });
}
