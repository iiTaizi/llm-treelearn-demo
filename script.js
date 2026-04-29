const root = document.documentElement;
const openDialogButton = document.querySelector('[data-action="open-dialog"]');

if (openDialogButton) {
  openDialogButton.addEventListener("click", () => {
    root.classList.add("is-dialog-open");
    openDialogButton.setAttribute("aria-expanded", "true");
  });
  openDialogButton.setAttribute("aria-expanded", "false");
}
