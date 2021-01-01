var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 

function setup()
{
    createCanvas(400,400); 
    //To use angle in Degrees
    angleMode(DEGREES);   
}

function draw()
{
    background(0);

    //Translation and rotation 
    translate(200,200);// translates to center of screen
    rotate(-90);

    //Calculating time using predefined func from p5.js
    hr = hour();// 24 hour format
  //  console.log(hr);
    mn = minute();
    sc = second();

    //To create an iterative rotation
    /* map(the incoming value to be converted,
           lower bound of the value's current range, upper bound of the value's current range,
           lower bound of the value's target range, upper bound of the value's target range) */
    scAngle = map(sc, 0, 60, 0, 360);
  //  console.log("scangle:"+ scAngle);
    mnAngle = map(mn,0,60,0,360)

    hrAngle = map(hr % 12,0,12,0,360)

    //drawing seconds hand
    push();
    rotate(scAngle); //rotate the hand based on angle calculated
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop();

    //drawing mins hand
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop();

    //drawing hr hand
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop();

   // stroke(255,0,255);
   // point(0,0);

    //drawing the arcs
    strokeWeight(10);
    noFill();

    //Seconds
    stroke(255,0,0);
    // arc( x, y, width, height, start angle, end angle)
    arc(0,0,300,300,0,scAngle);
    
    //Minutes
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);

    //Hour
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);
}