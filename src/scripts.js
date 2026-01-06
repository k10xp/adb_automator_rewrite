// run button
function runCommands() {
  const outputDiv = document.getElementsByClassName("commands-output-text")[0];
  const checkboxes = document.querySelectorAll(
    '.commands-checkbox-container input[type="checkbox"]'
  );

  const lines = [];
  checkboxes.forEach((cb) => {
    if (cb.checked) {
      const labelText = cb.parentElement.textContent.trim();
      lines.push("Running: " + labelText);
    }
  });

  if (lines.length === 0) {
    lines.push("No commands selected.");
  }

  outputDiv.innerHTML = "";
  lines.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    outputDiv.appendChild(p);
  });
}

//clear button, uncheck all boxes + restore output box placeholders
function clearOutput() {
  const outputDiv = document.getElementsByClassName("commands-output-text")[0];
  const checkboxes = document.querySelectorAll(
    '.commands-checkbox-container input[type="checkbox"]'
  );

  checkboxes.forEach((cb) => (cb.checked = false));

  outputDiv.innerHTML = "";
  const defaultLines = ["Line 1", "Line 2", "Line 3"];
  defaultLines.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    outputDiv.appendChild(p);
  });
}

// help button
function showHelp() {
  alert('Select commands, then click "Run Commands" to run them.');
}

window.addEventListener("DOMContentLoaded", () => {
  const runBtn = document.getElementById("runCommandsBtn");
  const clearBtn = document.getElementById("clearBtn");
  const helpBtn = document.getElementById("helpBtn");

  if (runBtn) runBtn.addEventListener("click", runCommands);
  if (clearBtn) clearBtn.addEventListener("click", clearOutput);
  if (helpBtn) helpBtn.addEventListener("click", showHelp);
});
