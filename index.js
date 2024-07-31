/*

 EMAIL CONTACT FORM

*/

let isModalOpen    = false;
let contrastToggle = false;
const scaleFactor  = 1 / 20;

/* MAIL CONTACT FORM FUNCTIONALITY */
function contact(e) {
  try {
      e.preventDefault();
      const loading = document.querySelector(".modal__overlay--loading");
      const success = document.querySelector(".modal__overlay--success");
      loading.classList += " modal__overlay--visible";
      emailjs.sendForm(
        "service_2zh7gkh",
        "template_athyrzu",
        e.target,
        "M5JGTBwzcn6wIf6a7"
      ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      }).catch(() => {
        
        loading.classList.remove("modal__overlay--visible");
        alert("Error: The email service is temporarily unavailable. Please contact me directly on email.nytek@gmail.com.")
      });
  } catch (error) {
      console.error("Error in contact function:", error);
  }
}

/* OPEN AND CLOSE THE MAIL CONTACT FORM */
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}

function moveBackgroundImgs (e) {
  const shapes = document.querySelectorAll(".shape");
  const x      = e.clientX * scaleFactor;
  const y      = e.clientY * scaleFactor;
  
  shapes.forEach((shape, index) => {
    const isOdd = index % 2 !== 0;
    const boolToInteger = isOdd ? -1 : 1;
    shape.style.transform = `translate(${x * boolToInteger}px, ${y * boolToInteger}px)`
  });
}

/* SWITCH BETWEEN LIGHT AND DARK THEMES */
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }

}

/*
 * PAGINATION FUNCTIONALITY PROPER
 */

// Get all pagination links in a nodelist
let pageLinks = document.querySelectorAll('.pagination-menu__item');

document.addEventListener('DOMContentLoaded', function() {
    // Add click event listener to each link
    pageLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Remove active class from all pagination links onclick
        pageLinks.forEach(function(item) {
          item.classList.remove('active-page');
        });
  
        // Add active class to only the clicked link
        this.classList.add('active-page');
  
        // Get target page number from page attribute
        let targetPage = this.getAttribute('page');
  
        // Hide all content pages
        let contentPages = document.querySelectorAll('.project-content-page');
        contentPages.forEach(function(page) {
          page.classList.remove('active');
        });
  
        // Show the target content page
        let targetContentPage = document.getElementById('page' + targetPage);
        if (targetContentPage) {
          targetContentPage.classList.add('active');
        }
      });
    });
  });  

  /* PREV & NEXT BUTTON FUNCTIONALITY
   *
   * i.e.: FIND NEXT OR PREV PAGE: 
   * IF AT END OF PAGE LIST, START OVER RESPECTIVE OF DIRECTION  
   */
  $(".prev").click(function(e) {
    e.preventDefault();

    if ($(".active-page").parent().prev().children()[0].className === "prev") {
      $(pageLinks)[pageLinks.length - 1].click();
    } else {
      $(".active-page").parent().prev().children()[0].click();
    }
  });

  $(".next").click(function(e) {
    e.preventDefault();

    if ($(".active-page").parent().next().children()[0].className === "next") {
      $(pageLinks)[0].click();
    } else {
      $(".active-page").parent().next().children()[0].click();
    }
  });