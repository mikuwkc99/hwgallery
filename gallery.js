/*Name this external file gallery.js*/

let originalImage = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg"; // Original image URL
let originalText = "Hover over an image below to display here."; // Original text

function upDate(previewPic) {
    // Change the background image of the div with id "image"
    document.getElementById("image").style.backgroundImage = `url(${previewPic.src})`;
    
    // Change the text of the div with id "image"
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo() {
    // Update the background image back to the original image
    document.getElementById("image").style.backgroundImage = `url(${originalImage})`;
    
    // Change the text of the div back to the original text
    document.getElementById("image").innerHTML = originalText;
}