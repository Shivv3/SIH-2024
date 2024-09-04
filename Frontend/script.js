document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  const canvas = document.getElementById("canvas");
  const captureBtn = document.getElementById("capture-btn");
  const translatedText = document.getElementById("translated-text");

  // Access the webcam
  navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
          video.srcObject = stream;
      })
      .catch(error => {
          console.error("Error accessing webcam: ", error);
      });

  captureBtn.addEventListener("click", () => {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Here you would process the captured image and translate it
      // For now, we'll just show a placeholder text
      translatedText.textContent = "Translating...";
      
      setTimeout(() => {
          // Simulate translation output
          translatedText.textContent = "Example translated text from ISL!";
      }, 2000);
  });
});
