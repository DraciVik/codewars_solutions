// Write a function that returns the total surface area and volume of a box as an array: [area, volume].

function getSize(width, height, depth) {
  // Calculates the surface area of a box
  let surfaceArea = 2 * width * height + 2 * height * depth + 2 * width * depth;
  // Calculates the volume of a box
  let volume =  width * height * depth;
  // returns the surface area and volume of a box and stores it in an array
  return [surfaceArea, volume];
}
