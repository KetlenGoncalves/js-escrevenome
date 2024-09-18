function setup() {
    createCanvas(600, 600);
    background("#9C27B0");
  }
  
  function draw() {
    stroke("rgb(0,0,0)");
    fill("#1C79A3");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }