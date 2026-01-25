/* variables */

const uploadButton = document.getElementById("uploadFileBtn");
const inputFile = document.getElementById("inputFileUpload");
const uploadFileTxt = document.getElementById("uploadFileTxt");
const fileDisplay = document.getElementById("fileDisplay");
const fileInputSection = document.getElementById("fileInput");
const fileUnorderedList = document.getElementById("fileUnorderedList");
const mergeButton = document.getElementById("mergeButton");

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

        if (fileArray[i].includes(".pdf")) {

            const li = document.createElement("li");

            li.innerHTML = fileArray[i];

            li.style.backgroundColor = "green";

            fileUnorderedList.appendChild(li);

        } else {

            const li = document.createElement("li");

            li.innerHTML = fileArray[i] + ' (Please select PDF file)';

            li.style.backgroundColor = "red";

            fileUnorderedList.appendChild(li);

        }

    };
    
};

// pdf merge using library.

mergeButton.addEventListener("click", async () => {

    if (inputFile.files.length === 1) {
        console.log('select another file')
    } else {

        const PDFDocument = PDFLib.PDFDocument; 
        const mergedPdf = await PDFDocument.create();

        for (const file of inputFile.files) {
            const bytes = await file.arrayBuffer();
            const pdf = await PDFDocument.load(bytes);
            const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
            pages.forEach(page => mergedPdf.addPage(page));
        }

        const mergedBytes = await mergedPdf.save();
        downloadPDF(mergedBytes, "merged.pdf");

    }

});


function downloadPDF(bytes, filename) {
    const blob = new Blob([bytes], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
};
