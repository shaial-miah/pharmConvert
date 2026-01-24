/* variables */

const uploadButton = document.getElementById("uploadFileBtn");
const inputFile = document.getElementById("inputFileUpload");
const uploadFileTxt = document.getElementById("uploadFileTxt");
const fileDisplay = document.getElementById("fileDisplay");
const fileInputSection = document.getElementById("fileInput");
const fileUnorderedList = document.getElementById("fileUnorderedList");

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

/* this array will store the names of the selected
files to be merged to render them onto the display */
const fileArray = [];

inputFile.addEventListener("change", () => {
    if (inputFile.files.length > 0) {

        /* loops through the file object array list & finds the 
        names of selected files.*/
        for (let i = 0; i < inputFile.files.length; i++) {
            fileArray.push(inputFile.files[i].name);
        };

        hideSelectPdfFilesBtn();
        renderFiles();
    }
});

// render files to browser to see which files have been selected

const renderFiles = () => {

    console.log(fileArray);

    /* loops through fileArray and renders onto page */
    for (let i = 0; i < fileArray.length; i++) {

        const li = document.createElement("li");

        li.innerHTML = fileArray[i];

        fileUnorderedList.appendChild(li);
    };
    
};