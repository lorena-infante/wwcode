export function modifyControls(spacing, blur, color, text, bgColor, img) {
  // Spacing
  spacing.addEventListener("input", () => {
    if (spacing.value !== 7) {
      img.style.position = "absolute";
      img.style.inset = `${spacing.value}%`;
    } else {
      img.style.position = "static";
      img.style.inset = "0%";
    }
  });

  // blurring
  blur.addEventListener("input", () => {
    img.style.filter = `blur(${blur.value}px)`;
  });

  //initial color
  function setInitialColor(){
      text.style.color = `${color.value}`;
      bgColor.style.backgroundColor = `${color.value}`;
  }
  setInitialColor();

  // changing color
  color.addEventListener("input", setInitialColor);
}