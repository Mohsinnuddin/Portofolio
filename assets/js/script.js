'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// AcademicProjects variables
const AcademicProjectsItem = document.querySelectorAll("[data-AcademicProjects-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const AcademicProjectsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < AcademicProjectsItem.length; i++) {
  AcademicProjectsItem[i].addEventListener("click", function () {
    const projectTitle = this.querySelector("[data-AcademicProjects-title]").innerHTML;
    const projectText = this.querySelector("[data-AcademicProjects-text]").innerHTML;
    const projectAvatar = this.querySelector("[data-AcademicProjects-avatar]");

    modalImg.src = projectAvatar.src;
    modalImg.alt = projectAvatar.alt;
    modalTitle.innerHTML = projectTitle;
    modalText.innerHTML = `<p style="color: var(--white-2);">${projectText}</p>`;

    // Update the "View Here" link based on the project
    const viewHereLink = document.querySelector(".projectview-button");
    if (projectTitle.includes("Gym Trainer")) {
      viewHereLink.href = "https://github.com/Mohsinnuddin/Gym-Trainer-App";
    } else if (projectTitle.includes("Tourism Management")) {
      viewHereLink.href = "https://github.com/Mohsinnuddin/Tourism-Management-System";
    }

    AcademicProjectsModalFunc();
  });
}


// add click event to modal close button
modalCloseBtn.addEventListener("click", AcademicProjectsModalFunc);
overlay.addEventListener("click", AcademicProjectsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Certification modal variables
const certificationModalContainer = document.querySelector("[data-certification-modal-container]");
const certificationModal = document.querySelector(".certification-modal");
const certificationOverlay = document.querySelector("[data-certification-overlay]");
const certificationCloseBtn = document.querySelector("[data-certification-close-btn]");
const certificationBtn = document.querySelector("[data-certification-btn]");

// Certification modal function
const certificationModalFunc = function () {
  certificationModalContainer.classList.toggle("active");
  certificationModal.classList.toggle("active");
  certificationOverlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

// Add click event to certification button
certificationBtn.addEventListener("click", function () {
  const certificationImg = document.querySelector("[data-certification-img]");
  
  // Set the image source based on the current certification
  if (certificationImg.src.includes("data-analyst-cert")) {
    certificationImg.src = "./assets/images/java-cert.jpg";
  } else {
    certificationImg.src = "./assets/images/data-analyst-cert.jpg";
  }
  
  certificationModalFunc();
});

// Add click event to modal close button and overlay
certificationCloseBtn.addEventListener("click", certificationModalFunc);
certificationOverlay.addEventListener("click", certificationModalFunc);

document.addEventListener("DOMContentLoaded", () => {
  // Update Gym Trainer App link
  const gymTrainerLink = document.getElementById("gym-trainer-link");
  if (gymTrainerLink) {
    gymTrainerLink.href = "https://github.com/Mohsinnuddin/Gym-Trainer-App";
  }

  // Update Tourism Management System link
  const tourismManagementLink = document.getElementById("tourism-management-link");
  if (tourismManagementLink) {
    tourismManagementLink.href = "https://github.com/Mohsinnuddin/Tourism-Management-System";
  }

  // Portfolio Project Modal Functionality
  const projectModalContainer = document.querySelector("[data-project-modal-container]");
  const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
  const projectOverlay = document.querySelector("[data-project-overlay]");
  const projectItems = document.querySelectorAll("[data-project-item]");

  // Project modal variables
  const projectModalImg = document.querySelector("[data-project-modal-img]");
  const projectModalTitle = document.querySelector("[data-project-modal-title]");
  const projectModalText = document.querySelector("[data-project-modal-text]");
  const projectModalLink = document.querySelector("[data-project-modal-link]");

  // Project modal default state
  let isProjectModalOpen = false;

  // Project modal toggle function
  const toggleProjectModal = () => {
    if (isProjectModalOpen === false) {
      projectModalContainer.classList.add("active");
      isProjectModalOpen = true;
    } else {
      projectModalContainer.classList.remove("active");
      isProjectModalOpen = false;
    }
  };

  // Add click event to all project items
  projectItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      
      const projectImg = item.querySelector("[data-project-img]").src;
      const projectTitle = item.querySelector("[data-project-title]").textContent;
      const projectCategory = item.querySelector("[data-project-category]").textContent;
      
      // Update modal content
      projectModalImg.src = projectImg;
      projectModalTitle.textContent = projectTitle;
      
      // Set project description based on category
      let projectDescription = "";
      let projectLink = "#";
      
      switch(projectCategory) {
        case "Looker":
          if (projectTitle === "Titanic Analysis") {
            projectDescription = "A comprehensive analysis of the Titanic dataset using Looker Studio, showcasing passenger demographics, survival rates, and key insights.";
            projectLink = "https://lookerstudio.google.com/reporting/titanic-analysis";
          } else if (projectTitle === "Sales Analysis") {
            projectDescription = "An interactive sales dashboard created in Looker Studio, providing insights into sales performance, trends, and key metrics.";
            projectLink = "https://lookerstudio.google.com/reporting/sales-analysis";
          }
          break;
        case "Alteryx":
          if (projectTitle === "Cohort Analysis") {
            projectDescription = "A detailed cohort analysis workflow in Alteryx, analyzing customer retention and behavior patterns over time.";
            projectLink = "https://github.com/Mohsinnuddin/Cohort-Analysis";
          } else if (projectTitle === "Replicate Tables") {
            projectDescription = "An Alteryx workflow for efficiently replicating and transforming database tables with data validation.";
            projectLink = "https://github.com/Mohsinnuddin/Replicate-Tables";
          } else if (projectTitle === "Replicate Tables Macro") {
            projectDescription = "A reusable Alteryx macro for automating table replication processes with customizable parameters.";
            projectLink = "https://github.com/Mohsinnuddin/Replicate-Tables-Macro";
          }
          break;
      }
      
      projectModalText.querySelector("p").textContent = projectDescription;
      projectModalLink.href = projectLink;
      
      toggleProjectModal();
    });
  });

  // Close project modal
  projectModalCloseBtn.addEventListener("click", toggleProjectModal);
  projectOverlay.addEventListener("click", toggleProjectModal);
});