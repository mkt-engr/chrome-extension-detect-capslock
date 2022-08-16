function detectCapsLock() {
  const passwords = document.querySelectorAll("input[type='password']");

  [...passwords].forEach((password) => {
    const div = document.createElement("div");
    div.classList.add("alert-detect-capslock");
    div.textContent = "CapsLock Is On";

    password.after(div);

    password.addEventListener("keyup", (e) => {
      if (e.getModifierState("CapsLock")) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    });
  });
}

chrome.action.onClicked.addListener(async (tab) => {
  try {
    await chrome.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      files: ["style.css"],
    });
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: detectCapsLock,
    });
  } catch (err) {
    console.error(`${err}`);
  }
});
