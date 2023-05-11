// Change home image
function changeImage() {
    const homeImage = document.getElementById("home-image");
    if (homeImage.src.includes("hometwon")) {
      homeImage.src = "./images/photo1.jpg";
    } else {
      homeImage.src = "./images/hometwon.jpg";
    }
  }
  
  // Change things to do
  function changeThingsToDo() {
    const thingsToDo = document.getElementById("things-to-do");
    thingsToDo.innerHTML = `
      <li>Visit the Art Museum</li>
      <li>Take a hike in the mountains</li>
      <li>Go to the local music festival</li>
    `;
  }
  
  // Change local cuisine
  function changeLocalCuisine() {
    const localCuisine = document.getElementById("local-cuisine");
    localCuisine.innerHTML = `
      <li>Pizza parlors</li>
      <li>Sushi restaurants</li>
      <li>Taco trucks</li>
    `;
  }

  // Check required field
  function checkRequiredField() {
    const requiredField = document.getElementById("required-field");
    const requiredFieldError = document.getElementById("required-field-error");
    if (requiredField.validity.valid) {
      requiredFieldError.style.display = "none";
    } else {
      requiredFieldError.style.display = "block";
    }
  }
  
  function toggleAccordion() {
    var accordionContent = document.getElementById("accordion-content");
    if (accordionContent.style.display === "none") {
      accordionContent.style.display = "block";
    } else {
      accordionContent.style.display = "none";
    }
  }
  