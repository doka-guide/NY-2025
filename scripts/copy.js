window.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-button");

  copyButtons.forEach((copyButton) => {
    copyButton.addEventListener("click", () => {
      const copyIcon = copyButton.querySelector("svg");
      const copyText = copyButton.previousElementSibling;

      if (copyText && copyText.classList.contains("copy-text")) {
        navigator.clipboard.writeText(copyText.innerText);
        copyButton.innerHTML = `<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#2E9AFF" d="M406.656 706.944 195.84 496.256a32 32 0 1 0-45.248 45.248l256 256 512-512a32 32 0 0 0-45.248-45.248L406.592 706.944z"></path></g></svg>`;
        copyButton.style.pointerEvents = "none";

        setTimeout(() => {
          copyButton.innerHTML = copyIcon.outerHTML;
          copyButton.style.pointerEvents = "all";
        }, 3000);
      }
    });
  });
});
