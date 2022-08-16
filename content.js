const func = async () => {
  detectCapsLock();
};

func();

function detectCapsLock() {
  document.head.insertAdjacentHTML(
    "beforeEnd",
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />'
  );

  const passwords = document.querySelectorAll("input[type='password']");

  [...passwords].forEach((password) => {
    const div = document.createElement("div");
    div.classList.add("alert-detect-capslock");
    div.textContent = "CapsLock Is On";
    div.innerHTML =
      "<span class='material-symbols-outlined alert-detect-icon'>error</span><div class='alert-detect-text'>CapsLock Is On</div>";
    password.after(div);

    password.addEventListener("keyup", (e) => {
      if (e.getModifierState("CapsLock")) {
        div.style.display = "flex";
      } else {
        div.style.display = "none";
      }
    });
  });
}
