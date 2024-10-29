const projects = [
    {
        title: "Web-based Todo List",
        description: "A responsive PWA todo list application",
        tags: ["programming", "web"],
        image: "images/projects/todo-list.jpg"
    },
    {
        title: "Solar Power System Design",
        description: "Residential solar power system design and implementation",
        tags: ["renewable-energy", "electrical"],
        image: "images/projects/solar-power.jpg"
    },
    // Add more projects here
];

function loadProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        if (filter === 'all' || project.tags.includes(filter)) {
            const projectElement = createProjectElement(project);
            projectsGrid.appendChild(projectElement);
        }
    });
}

function createProjectElement(project) {
    // Create and return a DOM element for the project
    // You can use the existing article structure from your original HTML
}

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();

    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            loadProjects(filter);
        });
    });
});
