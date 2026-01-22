/* variables */

const uploadButton = document.getElementById("uploadFileBtn");
const inputFile = document.getElementById("inputFileUpload");
const uploadFileTxt = document.getElementById("uploadFileTxt");
const fileDisplay = document.getElementById("fileDisplay");
const fileInputSection = document.getElementById("fileInput");

// clicking the 'select pdf files' button will open file explorer.
uploadButton.addEventListener("click", () => {
    inputFile.click();
});

// hide 'select pdf files' after inputFile is clicked.

const hideSelectPdfFilesBtn = () => {
    setTimeout(()=> {
        fileInputSection.remove();
        fileDisplay.style.display = "block";
    }, 1000)
};

// check if a file has been selected.

const fileArray = [];

inputFile.addEventListener("change", () => {
    if (inputFile.files.length > 0) {
        fileArray.push(inputFile.files[0].name)

        console.log(fileArray);
        hideSelectPdfFilesBtn();
    }
});

// render files to browser to see which files have been selected

const renderFiles = () => {
    
}