import { projects } from './data.js';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// Toggle nav menu
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Close nav on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Function to get query parameters from the URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Check if we're on the portfolio-item page
if (window.location.pathname.includes('portfolio-item.html')) {
    // Get the project ID from the query string
    const projectId = parseInt(getQueryParam('id')); // Convert ID to number

    const project = projects[projectId]; // Find the project by index

    if (project) {
        // Get the container where details will be displayed
        const detailsDiv = document.querySelector('.project-display-container');

        // Dynamically render project details
        detailsDiv.innerHTML = `
            <section class="intro">
                <h1 class="section__title section__title--intro">
                    ${project.title} <strong>${project.subtitle}</strong>
                </h1>
                <p class="section__subtitle section__subtitle--intro">${project.descriptionIntro}</p>
                <img src="${project.img}" alt="${project.title}" class="intro__img">
            </section>
            
            <div class="portfolio-item-individual">
                <p>${project.descriptionDetails}</p>
                <p><a href="${project.html}" target="_blank">View Project</a></p>
            </div>
        `;
    } else {
        // If the project is not found, display a friendly error message
        const detailsDiv = document.querySelector('.project-display-container');
        detailsDiv.innerHTML = `
            <section class="error">
                <h1>Project Not Found</h1>
                <p>Sorry, we couldn't find the project you're looking for.</p>
            </section>
        `;
        console.error('Project not found!');
    }
}
