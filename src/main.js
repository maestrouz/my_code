const captureScreenshot = () => {
  try {
    html2canvas(document.getElementById("page")).then(function (canvas) {
      // ... (rest of your code)
    });
  } catch (error) {
    console.error("Error capturing screenshot:", error);
  }
};
