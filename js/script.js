let toTop = document.getElementById("top");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    toTop.style.transform = "scale(1)";
  } else {
    toTop.style.transform = "scale(0)";
  }
});
toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
