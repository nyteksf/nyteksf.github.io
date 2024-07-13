document.addEventListener('DOMContentLoaded', function() {
    // Get all pagination links
    var pageLinks = document.querySelectorAll('.pagination-menu__item');
  
    // Add click event listener to each link
    pageLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Remove active class from all pagination links
        pageLinks.forEach(function(item) {
          item.classList.remove('active-page');
        });
  
        // Add active class to the clicked link
        this.classList.add('active-page');
  
        // Get target page number from page attribute
        var targetPage = this.getAttribute('page');
  
        // Hide all content pages
        var contentPages = document.querySelectorAll('.project-content-page');
        contentPages.forEach(function(page) {
          page.classList.remove('active');
        });
  
        // Show the target content page
        var targetContentPage = document.getElementById('page' + targetPage);
        if (targetContentPage) {
          targetContentPage.classList.add('active');
        }
      });
    });
  });  

/* 
document.addEventListener('DOMContentLoaded', function() {
    const paginationLinks = document.querySelectorAll('.pagination__item');
    paginationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.getAttribute('page');
            const activePageLink = document.querySelector('.active-page');
            const activePage = parseInt(activePageLink.getAttribute('page'));
            console.log("CLICK")
            
            if (targetPage === 'last') {
                const prevPageLink = activePageLink.parentElement.previousElementSibling.querySelector('.pagination__item');
                if (prevPageLink) {
                    activePageLink.classList.remove('active-page');
                    prevPageLink.classList.add('active-page');
                }
            } else if (targetPage === 'next') {
                const nextPageLink = activePageLink.parentElement.nextElementSibling.querySelector('.pagination__item');
                if (nextPageLink) {
                    activePageLink.classList.remove('active-page');
                    nextPageLink.classList.add('active-page');
                }
            } else {
                document.querySelectorAll('.pagination__item').forEach(item => {
                    item.classList.remove('active-page');
                });
                this.classList.add('active-page');
            }
        });
    });
});
*/