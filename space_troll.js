const content_slab = document.getElementById("content");

function getRandomNumber(min, max) {
  // Ensure that min and max are numbers
  min = Number(min);
  max = Number(max);

  // Swap min and max if min is greater than max
  if (min > max) {
    [min, max] = [max, min];
  }

  // Generate a random number between min and max
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

function toggleSpacing() {
  // Get the computed style
  const computedStyle = window.getComputedStyle(content_slab);

  // Compare with a string value, and set the unit (e.g., pixels)
  if (computedStyle.wordSpacing === "0px") {
    content_slab.style.wordSpacing = "25px";
  } else {
    content_slab.style.wordSpacing = "0px";
  }
}

function rainbowColors() {
  let hue = 0;
  let color = 'white'

  setInterval(() => {
    // Convert HSL to RGB
    const rgbColor = `hsl(${hue}, 100%, 50%)`;

    // Apply the color to the element
    content_slab.style.backgroundColor = rgbColor;

    // Increment the hue for the next color
    hue = (hue + 5) % 360;
  }, 100); // Adjust the interval as needed

  setInterval(() => {
    if (content_slab.style.color == 'black') {
      content_slab.style.color = 'white';
    } else {
      content_slab.style.color = 'black';
    }
    
  });

}

document.addEventListener('click', () => {
  console.log(content_slab.style.wordSpacing);
  toggleSpacing();
  rainbowColors();
});
