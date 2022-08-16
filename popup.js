window.addEventListener("load", function () {
  document.addEventListener("keyup", (e) => {
    if (e.getModifierState("CapsLock")) {
      console.log(`${e.key} "CapsLock ON"`);
    } else {
      console.log(`${e.key} "CapsLock OFF"`);
    }
  });
});
