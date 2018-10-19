// There is no single treatment that works for every phobia, but some people cure it by being gradually exposed to the phobic situation or object. In this kata we will try curing arachnophobia by drawing primitive spiders.

// Our spiders will have legs, body, eyes and a mouth. Here are some examples:

// /\((OOwOO))/\

// /╲(((0000w0000)))╱\

// ^(oWo)^
// You will be given four values:
// 1) leg size where each value stands for its own leg type: 1 for "^ ^", 2 for "/\ /\", 3 for "/╲ ╱\", 4 for "╱╲ ╱╲"
// 2) body size where each value stands for its own body type: 1 for "( )", 2 for "(( ))", 3 for "((( )))"
// 3) mouth representing the spider's mouth
// 4) eye representing the spider's eye

// Note: the eyes are symmetric, and their total amount is 2 to the power of body size.

// You will also be given only valid data. That's it for the instructions, you can start coding!

function drawSpider(legSize, bodySize, mouth, eye) {
  // Legs devided to left and right
  let arrOfLegsLeft = ["", "^", "/\\", "/╲", "╱╲"];
  let arrofLegsRight = ["", "^", "/\\", "╱\\", "╱╲"];
  // Body divided to left and right
  let arrOfbodyleft = ["", "(", "((", "((("];
  let arrOfBodyRight = ["", ")", "))", ")))"];
  // Eyes divided by half because they're symetrical
  let eyes = [];
  for (let i = 0; i < (2 ** bodySize) / 2; i++) {
    eyes.push(eye);
  };
  let eyesforReal = eyes.join('');
  // Scary spider woooo
  return `${arrOfLegsLeft[legSize]}${arrOfbodyleft[bodySize]}${eyesforReal}${mouth}${eyesforReal}${arrOfBodyRight[bodySize]}${arrofLegsRight[legSize]}`
}