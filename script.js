

// Initialize the current testimonial index
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

// Function to type hero words in index
document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      cursorChar: '|',
    });
  });
  
// Function to toggle the navigation menu on mobile
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.getElementById('hamburger');

    // Toggle the navigation links when hamburger icon is clicked
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

// Function to add a 'scrolled' class to the navbar when the page is scrolled
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');

    // Add or remove the 'scrolled' class based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

// Function to trigger fade-in animations when sections come into view
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in-section');
  
    const options = {
        threshold: 0.1 // Trigger when 10% of the section is visible
    };
  
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, options);
  
    // Observe each section for intersection
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Function to handle tab switching in the works section
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents and remove the 'active' class
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Remove 'active' class from all tab links
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the selected tab content and mark the tab link as 'active'
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

document.addEventListener('DOMContentLoaded', () => {
    let testimonials = document.querySelectorAll('.testimonial-card');
    let dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
  
    function showTestimonial(index) {
      testimonials[currentTestimonial].classList.remove('active');
      dots[currentTestimonial].classList.remove('active');
      currentTestimonial = index;
      testimonials[currentTestimonial].classList.add('active');
      dots[currentTestimonial].classList.add('active');
    }
  
    function showNextTestimonial() {
      let nextTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(nextTestimonial);
    }
  
    setInterval(showNextTestimonial, 5000); // Change every 5 seconds
  });
  

function showSkills(type) {
    var techSkills = document.getElementById('tech-skills');
    var designSkills = document.getElementById('design-skills');
    var buttons = document.querySelectorAll('.toggle-btn');

    if (type === 'tech') {
        techSkills.classList.add('active');
        designSkills.classList.remove('active');
    } else {
        techSkills.classList.remove('active');
        designSkills.classList.add('active');
    }

    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === type) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

// Initialize with Tech skills visible
document.addEventListener('DOMContentLoaded', () => {
    showSkills('tech');
});

//services page
function showDescription(serviceId) {
    var descriptions = document.querySelectorAll('.service-description');
    descriptions.forEach(function(description) {
        if (description.id === serviceId) {
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
        } else {
            description.style.display = 'none';
        }
    });
}
function showDescription(serviceId) {
    var descriptions = document.querySelectorAll('.service-description');
    descriptions.forEach(function(description) {
        if (description.id === serviceId) {
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
        } else {
            description.style.display = 'none';
        }
    });
}

// FAQ Toggle Functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Close other open FAQs
        faqQuestions.forEach(q => {
            if (q !== question) {
                q.classList.remove('active');
                q.nextElementSibling.style.display = 'none';
            }
        });

        // Toggle current FAQ
        question.classList.toggle('active');
        const answer = question.nextElementSibling;
        if (question.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});

