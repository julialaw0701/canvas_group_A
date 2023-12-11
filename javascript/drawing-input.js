$("#drawing-input").click(() => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";
  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function () {
      const image = new Image();
      image.onload = function () {
<<<<<<< HEAD
        const canvasWidth = contextReal.canvas.width;
        const canvasHeight = contextReal.canvas.height;
        const imageAspectRatio = image.width / image.height;
        const canvasAspectRatio = canvasWidth / canvasHeight;
        let drawWidth, drawHeight, offsetX, offsetY;

        // Calculate the dimensions and offsets to fit the image within the canvas
        if (imageAspectRatio > canvasAspectRatio) {
          drawWidth = canvasWidth;
          drawHeight = canvasWidth / imageAspectRatio;
          offsetX = 0;
          offsetY = (canvasHeight - drawHeight) / 2;
        } else {
          drawHeight = canvasHeight;
          drawWidth = canvasHeight * imageAspectRatio;
          offsetY = 0;
          offsetX = (canvasWidth - drawWidth) / 2;
        }

        // Clear the canvas and draw the resized image
        contextReal.clearRect(0, 0, canvasWidth, canvasHeight);
        contextReal.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
=======
        const canvas = document.getElementById("canvas-real");
        const context = canvas.getContext("2d");

        // Calculate the dimensions to fit the image within the canvas
        const maxWidth = canvas.width;
        const maxHeight = canvas.height;
        const imageAspectRatio = image.width / image.height;
        const canvasAspectRatio = maxWidth / maxHeight;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imageAspectRatio > canvasAspectRatio) {
          drawWidth = maxWidth;
          drawHeight = maxWidth / imageAspectRatio;
          offsetX = 0;
          offsetY = (maxHeight - drawHeight) / 2;
        } else {
          drawHeight = maxHeight;
          drawWidth = maxHeight * imageAspectRatio;
          offsetY = 0;
          offsetX = (maxWidth - drawWidth) / 2;
        }

        // Clear the canvas
        canvas.width = maxWidth;
        canvas.height = maxHeight;
        context.clearRect(0, 0, maxWidth, maxHeight);

        // Draw the resized image
        context.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);

        // Apply black and white sketch effect using CamanJS
        Caman("#canvas-real", function () {
          this.greyscale(); // Apply grayscale effect
          this.contrast(50);
          this.render();
        });
>>>>>>> 3b3558954af55c153c275519681053d3ad7c007a
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
  input.click();
<<<<<<< HEAD
});
=======
});

>>>>>>> 3b3558954af55c153c275519681053d3ad7c007a
