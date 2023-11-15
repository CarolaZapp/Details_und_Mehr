function readMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let buttonText = document.getElementById("button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    buttonText.innerHTML = "Vollständiger Text";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    buttonText.innerHTML = "Weniger Text";
    moreText.style.display = "inline";
  }
}