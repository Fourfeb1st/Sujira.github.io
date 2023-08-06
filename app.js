const SUJ = document.getElementById("SUJIRA PLOYSUMLEE");

// Function to simulate typing effect
function typeWriter(element, text, index, speed) {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(element, text, index, speed), speed);
    }
  }

const SUJling = "SUJIRA PLOYSUMLEE_";
typeWriter(SUJ, SUJling, 0, 50);

