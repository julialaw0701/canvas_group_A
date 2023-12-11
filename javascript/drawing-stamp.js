<<<<<<< HEAD
class DrawingStamp extends DrawingFunction {
    constructor(contextReal, contextDraft) {
      super(contextReal, contextDraft);
    }
    
    onMouseDown(coord, event) {
      // Get the stamp image URL or data
  const stampImage = "./final_4/Canvas/img/OPI.jpg";

  // Create a new image element
  const stamp = new Image();

  // Set the source of the image to the stamp image URL or data
  stamp.src = stampImage;

  // When the image is loaded, draw it on the canvas at the clicked coordinates
  stamp.onload = () => {
    context.drawImage(stamp, mouseX, mouseY);
  };
      }
  
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
  }
=======
>>>>>>> 3b3558954af55c153c275519681053d3ad7c007a
