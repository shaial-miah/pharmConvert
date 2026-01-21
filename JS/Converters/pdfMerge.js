/* variables */

const uploadButton = document.getElementById("uploadFileBtn");
const inputFile = document.getElementById("inputFileUpload");

// clicking the 'select pdf files' button will open file explorer.
uploadButton.addEventListener("click", () => {
    inputFile.click();
})