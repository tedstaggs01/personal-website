PDFdocument = require('pdfkit');

function buildPDF(dataCallback, endCallback) {
    const doc = new PDFdocument({font: 'Calibri'}); // calibri to be implemented
    doc.on ('data', dataCallback);

    doc.end();
}

module.exports = { buildPDF };