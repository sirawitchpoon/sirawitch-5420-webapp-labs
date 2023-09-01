// Replace the faculty image
let facultyEN = document.querySelector("img");
facultyEN.src = "https://www.en.kku.ac.th/web/wp-content/uploads/2020/02/83473756_2603462796609052_5197128114282430464_n.png";
facultyEN.style.width = "300px";
facultyEN.style.cursor = "pointer"

// Add new element below the image
let newElement = document.querySelector("p");
newElement.textContent = "We hope you enjoy learning";
newElement.style.color = "white";
newElement.style.backgroundColor = "black";
newElement.style.fontSize = "24px";
newElement.style.marginTop = "10px"
newElement.style.padding = "10px";
newElement.style.width = "300px"
facultyEN.parentNode.insertBefore(newElement, facultyEN.nextSibling);

// Add click event to the image
facultyEN.addEventListener("click", function() {
    window.location.href = "https://www.en.kku.ac.th";
});

// Change HTML title to "KKU Engineering"
document.title = "KKU Engineering";