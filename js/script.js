const btn = document.querySelector("#btn");
const blur = document.querySelector("#menu");
btn.addEventListener("click", () => {
  blur.style.display = "flex";
});

blur.addEventListener("click", (e) => {
  if (e.target === blur) {
    blur.style.display = "none";
  }
});