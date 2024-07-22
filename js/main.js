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