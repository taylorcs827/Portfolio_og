import { projects } from './data.js';

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

if (window.location.pathname.includes('portfolio-item.html')) {
    const projectId = getQueryParam('id');
    const project = projects[projectId];

    if (project) {
        const detailsDiv = document.querySelector('.project-display-container');
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
        console.error('Project not found!');
    }
}
