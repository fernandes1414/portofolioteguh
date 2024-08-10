// navigasibar
// Get all the navbar links
var navbarLinks = document.querySelectorAll('.nav-link');

// Add event listeners to each link
navbarLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // Get the target element
        var target = document.querySelector(link.getAttribute('href'));

        // Prevent default link behavior
        event.preventDefault();

        // Add smooth scrolling
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});


// Get the navbar and its toggle button
const navbar = document.querySelector('.navbar');
const toggleButton = document.querySelector('.navbar-toggler');

// Add an event listener to the toggle button
toggleButton.addEventListener('click', () => {
    // Toggle the navbar's collapse class
    navbar.classList.toggle('collapsed');
});



// efek kedap kedip
const nameElement = document.getElementById('name');
// ketika mouse diarahkan ke element akan menampilkan teks
nameElement.addEventListener('mouseover', () => {
    nameElement.textContent = 'WEB DEVELOPER';
});
// ketika mouse keluar akan menampilkan kembali
nameElement.addEventListener('mouseout', () => {
    nameElement.textContent = 'TEGUH WANTONI';
});



// main section
// Get all the View Project buttons
var viewProjectButtons = document.querySelectorAll('.btn.btn-primary');

// Add event listeners to each button
viewProjectButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        // Get the parent card element
        var card = button.parentNode.parentNode;

        // Get the project title and description
        var projectTitle = card.querySelector('.card-title').textContent;
        var projectDescription = card.querySelector('.card-text').textContent;

        // Create the popup HTML
        var popupHTML = `
      <div class="modal fade" id="project-modal" tabindex="-1" role="dialog" aria-labelledby="project-modal-label" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="project-modal-label">${projectTitle}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>${projectDescription}</p>
            </div>
          </div>
        </div>
      </div>
    `;

        // Create the popup element
        var popupElement = document.createElement('div');
        popupElement.innerHTML = popupHTML;

        // Add the popup element to the body
        document.body.appendChild(popupElement);

        // Show the popup
        var modal = new bootstrap.Modal(popupElement.querySelector('#project-modal'));
        modal.show();
    });
});






// Add an event listener to the window's resize event
window.addEventListener('resize', () => {
    // If the window width is greater than or equal to 992px (Bootstrap's lg breakpoint)
    if (window.innerWidth >= 992) {
        // Remove the collapse class from the navbar
        navbar.classList.remove('collapsed');
    }
});

// about section
// Add animation to the about section
$(document).ready(function () {
    $("#about").waypoint(function () {
        $(".profile-picture").addClass("animate");
        $(".about-content").addClass("animate");
    }, {
        offset: "50%"
    });
});

// portopfolio section
// Add animation to the portfolio section
$(document).ready(function () {
    $("#portfolio").waypoint(function () {
        $(".portfolio-item").addClass("animate");
    }, {
        offset: "50%"
    });
});

// contact section
// Add animation to the contact section
$(document).ready(function () {
    $("#contact").waypoint(function () {
        $(".contact-form").addClass("animate");
        $(".contact-info").addClass("animate");
    }, {
        offset: "50%"
    });
});

// footer section
// Add animation to the footer section
$(document).ready(function () {
    $("#footer").waypoint(function () {
        $("#footer").addClass("animate");
    }, {
        offset: "50%"
    });
});



const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'send-email.php', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert('Pesan berhasil terkirim!');
            form.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    };
    xhr.send(formData);
});



