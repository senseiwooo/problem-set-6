/*
 * Hello. 2 numberOfSides.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
    let hello = document.getElementById('canvas1').getContext('2d');
    hello.font = '48px sans-serif';
    hello.strokeText('Hello, World!', 10, 50);
  }


/*
 * Rectangle. 3 numberOfSides.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let rectangle = document.getElementById('canvas2').getContext('2d');
  rectangle.clearRect(0, 0, rectangle.canvas.width, rectangle.canvas.height);

  do {
    rectHeight = prompt("Enter height: ");
  } while (rectHeight < 1);

  do {
    rectWidth = prompt("Enter width: ");
  } while (rectWidth < 1);

  do {
    restop = prompt("Enter x coordinate for top-left: ");
  } while (restop < 5);

  do {
    rectY = prompt("Enter y coordinate for top-left: ");
  } while (rectY < 5);

  rectangle.strokeRect(restop, rectY, rectWidth, rectHeight);
  rectangle.stroke();
}

/*
 * Color. 3 numberOfSides.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let colorRectangle = document.getElementById('canvas3').getContext('2d');
  colorRectangle.clearRect(0, 0, colorRectangle.canvas.width, colorRectangle.canvas.height);

  let color = prompt("Enter your color: ");

  if (color == "black") {
    colorRectangle.fillStyle = "#000000";
    colorRectangle.fillRect(10, 10, 100, 50);
  }

  if (color == "blue") {
    colorRectangle.fillStyle = "#0000ff";
    colorRectangle.fillRect(10, 10, 100, 50);
  }

  else if (color == "green") {
    colorRectangle.fillStyle = "#00ff00";
    colorRectangle.fillRect(10, 10, 100, 50);
  }

  else if (color == "orange") {
    colorRectangle.fillStyle = "#ffa500";
    colorRectangle.fillRect(10, 10, 100, 50);
  }

  else if (color == "purple") {
    colorRectangle.fillStyle = "#a020f0";
    colorRectangle.fillRect(10, 10, 100, 50);
  }

  else if (color == "red") {
    colorRectangle.fillStyle = "#ff0000";
    colorRectangle.fillRect(10, 10, 100, 50);
  }

  else if (color == "yellow") {
    colorRectangle.fillStyle = "#ffff00";
    colorRectangle.fillRect(10, 10, 100, 50);
  }

}

/*
 * Triangle. 5 numberOfSides.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost numberOfSides have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */
function drawTriangle() {
  let triangle = document.getElementById('canvas4').getContext('2d');
  triangle.clearRect(0, 0, triangle.canvas.width, triangle.canvas.height);

  do {
    triangleSide1 = Number(prompt("Side 1: "));
  } while (triangleSide1 == Number);

  do {
    triangleSide2 = Number(prompt("Side 2: "));
  } while (triangleSide2 == Number);

  do {
    triangleSide3 = Number(prompt("Side 3: "));
  } while (triangleSide3 == Number);

  let triangleSides = [triangleSide1, triangleSide2, triangleSide3];
  triangleSides.sort();

  let smallestSide = triangleSides[0];
  let secondLargestSide = triangleSides[1];
  let largestSide = triangleSides[2];

  if (((smallestSide)*(smallestSide) + (secondLargestSide)*(secondLargestSide) === (largestSide)*(largestSide))){
    triangle.beginPath();
    triangle.moveTo(10,10);
    triangle.lineTo(10,smallestSide + 10);
    triangle.lineTo(secondLargestSide + 10, smallestSide + 10);
    triangle.lineTo(10,10)
    triangle.stroke();
    triangle.closePath();
  }
  else {
    alert("Not a right triangle.");
  }
}

/*
 * Smile. 7 numberOfSides.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let smile = document.getElementById('canvas5').getContext('2d');
  smile.clearRect(0, 0, smile.canvas.width, smile.canvas.height);
  let radius;

  do {
    radius = prompt("Enter a radius: ")
  } while (radius>=1 && radius<=smile.canvas.width && Number.isInteger(radius));

  let x = smile.canvas.width;
  let y = smile.canvas.height;
  let eyeRadius = (radius*0.1);
  let mouthRadius = (radius*0.7);

  smile.beginPath();
  smile.arc(x/2, y/2, radius, 0, Math.PI*2);
  smile.stroke();
  smile.closePath();

  smile.beginPath();
  smile.arc(x/2-radius/3, y/2-radius/4, eyeRadius, 0, Math.PI*2);
  smile.stroke();
  smile.closePath();

  smile.beginPath();
  smile.arc(x/2+radius/3, y/2-radius/4, eyeRadius, 0, Math.PI*2);
  smile.stroke();
  smile.closePath();

  smile.beginPath();
  smile.arc(x/2, y/2, mouthRadius, 0, Math.PI);
  smile.stroke();
  smile.closePath();

  }




/*
 * Star. 9 numberOfSides.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer numberOfSides) and inner radius (i.e., a circle that would connect
 * each of the star's inner numberOfSides). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  let star = document.getElementById('canvas6').getContext('2d');
  star.clearRect(0, 0, star.canvas.width, star.canvas.height);

  let outerRadius = Number(prompt("Enter outer radius:"));
  let innerRadius = Number(prompt("Enter inner radius:"));

  if(isNaN(outerRadius) == true || isNaN(innerRadius) == true) {
    alert("One of your inputs is not a number.");
  }

  else if(outerRadius < 2){
    alert("Your outer radius is too small.");
  }

  else if(innerRadius < 1){
    alert("Your inner radius is too small.");
  }

  else if(innerRadius >= outerRadius){
    alert("Your outer radius must be larger than your inner radius.");
  }

  else {
    star.beginPath();
    star.moveTo(125, 125 - outerRadius);
    let angle = 0;

    for (let i=0; i<=5; i++) {
        star.lineTo(Math.round((Math.cos(Math.PI*(angle-90)/180)*outerRadius)+125), Math.round((Math.sin(Math.PI*(angle-90)/180)*outerRadius))+125);
        angle += 36;
        star.lineTo(Math.round((Math.cos(Math.PI*(angle-90)/180)*innerRadius)+125), Math.round((Math.sin(Math.PI*(angle-90)/180)*innerRadius))+125);
        angle += 36;
    }
    star.stroke();
    star.closePath();
  }
}
/*
 * Stop Sign. 7 numberOfSides.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let stop = document.getElementById('canvas7').getContext('2d');
  stop.clearRect(0, 0, stop.canvas.width, stop.canvas.height);

  let sideLength=80;
  let center=[10+(sideLength)/2+sideLength/Math.sqrt(2), 10+(sideLength/2)+(sideLength/Math.sqrt(2))]
  let numberOfSides=8;
  let xPoints=[];
  let yPoints=[];

  for(let i=0;i<numberOfSides;i++){
    xPoints.push(Math.cos(((Math.PI*2*i)/numberOfSides)-Math.PI/8)*100+center[0]);
    yPoints.push(Math.sin(((Math.PI*2*i)/numberOfSides)-Math.PI/8)*100+center[1]);
  }
  stop.beginPath();
  stop.moveTo([xPoints][0], yPoints[0]);
  for(let j=0;j<xPoints.length;j++){
    stop.lineTo(xPoints[j], yPoints[j]);
  }
  stop.lineTo(xPoints[0], yPoints[0]);
  stop.stroke();

  stop.fillStyle="red";
  stop.fill();
  stop.closePath();
  stop.beginPath();
  stop.textAlign="center";
  stop.font="56px sans-serif";
  stop.fillStyle="white";
  stop.fillText("STOP", center[0], center[1]+15);
  stop.closePath()

 }


/*
 * Pyramid. 7 numberOfSides.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

 function drawPyramid() {
  let pyramid = document.getElementById('canvas8').getContext('2d');
  pyramid.clearRect(0, 0, pyramid.canvas.width, pyramid.canvas.height);

  let sideLength = Number(prompt("Enter side length."));

  if (isNaN(sideLength) == true) {
    alert("invalid Input(s). Try again.");
  }

  else {
    let x = 10;
    let y = pyramid.canvas.height - 10;
    let i = 0;
    lineNumber = 1;

    while(i < 5){
      for(let j = lineNumber; j <= 5; j++){
        pyramid.strokeRect(x, y - sideLength, sideLength, sideLength);
        x += sideLength;
      }

      x = 10 + (sideLength / 2) * lineNumber;
      y -= sideLength;
      lineNumber++;
      i++;
    }
  }
}

/*
 * house. 7 numberOfSides.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let house = document.getElementById('canvas9').getContext('2d');
  house.clearRect(0, 0, house.canvas.width, house.canvas.height);

  let houseColor= prompt("Choose a house color.");
  let doorColor= prompt("Choose a door color.");

  house.beginPath();
  house.moveTo(150,350);
  house.lineTo(750,350);
  house.lineTo(450,100);
  house.lineTo(150,350);
  house.closePath();
  house.fillStyle ="#808080";
  house.fill();
  house.closePath();

  if(houseColor==="brown"){
    houseColor="#654500";
  }
  else if(houseColor==="blue"){
    houseColor="#0000FF";
  }
  else if(houseColor==="green"){
    houseColor="#00FF40";
  }
  else if(houseColor==="orange"){
    houseColor="#FF8000";
  }
  else if(houseColor==="purple"){
    houseColor="#8000FF";
  }
  else if(houseColor==="red"){
    houseColor="#FF0000";
  }
  else if(houseColor==="yellow"){
    houseColor="#FFFF00";
  }

  house.fillStyle = houseColor;
  house.fillRect(150, 350, 600, 500);

   if(doorColor==="brown"){
     doorColor="#654500";
   }
   else if(doorColor==="blue"){
     doorColor="#0000FF";
   }
   else if(doorColor==="green"){
     doorColor="#00FF40";
   }
   else if(doorColor==="orange"){
     doorColor="#FF8000";
   }
   else if(doorColor==="purple"){
     doorColor="#8000FF";
   }
   else if(doorColor==="red"){
     doorColor="#FF0000";
   }
   else if(doorColor==="yellow"){
     doorColor="#FFFF00";
   }

   house.fillStyle = doorColor;
   house.fillRect(400, 620, 100, 150);

   let windowColor="#B7E9FF"
   house.fillStyle = windowColor;
   house.fillRect(250, 400, 75, 75);

   let window2Color="#B7E9FF"
   house.fillStyle = window2Color;
   house.fillRect(575, 400, 75, 75);

   let window3Color="#B7E9FF"
   house.fillStyle = window3Color;
   house.fillRect(250, 620, 75, 75);

   let window4Color="#B7E9FF"
   house.fillStyle = window4Color;
   house.fillRect(575, 620, 75, 75);

   let doorknobColor= "#B7E9FF"
   house.fillStyle = doorknobColor;
   house.fill();
   house.beginPath();
   house.arc(480,695,5,0,2*Math.PI);
   house.stroke();

}
