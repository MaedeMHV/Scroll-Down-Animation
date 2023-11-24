let boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", (event) => {
  let windowsHeight = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    let topBox = box.getBoundingClientRect().top;
    if (topBox < windowsHeight) {
      box.classList.add("active");
    } else {
      box.classList.remove("active");
    }
  });
});
